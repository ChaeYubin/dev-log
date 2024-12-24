"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { slugify } from "@/utils";
import { getIntersectionObserver } from "@/utils/observer";

const Toc = () => {
  const [currentId, setCurrentId] = useState<string>("");
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    // ID가 없는 헤딩 요소에 고유 ID 추가
    headingElements.forEach((header) => {
      if (!header.id) {
        header.id = slugify(header.textContent || "");
      }
    });

    setHeadingEls(headingElements);

    headingElements.forEach((header) => {
      observer.observe(header);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (headingId: string) => {
    setCurrentId(headingId);
  };

  return (
    <div className="absolute invisible xl:visible left-full ml-12 h-full">
      <div className="sticky w-[230px] top-12">
        <ul className="list-none">
          <span className="inline-block font-semibold pb-2">On this page</span>
          {headingEls.map((el) => {
            const id = el.id || slugify(el.textContent || "");
            const isActive = currentId === id;

            return (
              <li
                key={el.id || slugify(el.textContent || "")}
                className={`${
                  el.tagName === "H2" ? "pl-0" : "pl-4"
                } m-0 transition-colors duration-200`}
              >
                <Link
                  href={`#${slugify(el.textContent || "")}`}
                  className={`no-underline font-normal text-gray-500 dark:text-gray-300 ${
                    currentId === el.id
                      ? "text-primary dark:text-primary"
                      : "text-initial"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => handleClick(id)}
                >
                  {el.textContent}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Toc;

"use client";

import Link from "next/link";

import { slugify } from "@/utils";
import useHeadingsObserver from "@/hooks/useHeadingsObserver";

const Toc = () => {
  const { activeIdList, headingEls } = useHeadingsObserver();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);

    targetElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="absolute invisible xl:visible left-full ml-12 h-full">
      <div className="sticky w-[230px] top-20">
        <ul className="list-none text-[0.93rem]">
          <span className="inline-block font-semibold pb-2">On this page</span>
          {headingEls.map((el) => {
            const id = el.id || slugify(el.textContent || "");
            const isActive = activeIdList.includes(id);

            return (
              <li
                key={el.id || slugify(el.textContent || "")}
                className={`${el.tagName === "H2" ? "pl-0" : "pl-4"} m-0`}
              >
                <Link
                  href={`#${id}`}
                  className={`no-underline font-normal text-gray-500 dark:text-gray-300 transition-colors duration-200 ${
                    isActive ? "text-primary dark:text-primary" : "text-initial"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(e) => handleClick(e, id)}
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

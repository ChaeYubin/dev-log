import { slugify } from "@/utils";
import { useEffect, useRef, useState } from "react";

const useHeadingsObserver = () => {
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [lastActiveId, setLastActiveId] = useState<string>("");
  const headingElsRef = useRef<Element[]>([]);

  useEffect(() => {
    const headingEls = Array.from(document.querySelectorAll("h2, h3"));

    // ID가 없는 헤딩 요소에 고유 ID 추가
    headingEls.forEach((header) => {
      if (!header.id) {
        header.id = slugify(header.textContent || "");
      }
    });

    headingElsRef.current = headingEls;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetId = entry.target.id;

          if (entry.isIntersecting) {
            setActiveIdList((prev) => [...prev, targetId]);
            setLastActiveId("");
          } else {
            setActiveIdList((prev) => {
              if (prev.length === 1) setLastActiveId(targetId);
              return prev.filter((el) => el !== targetId);
            });
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    headingEls.forEach((header) => {
      observer.observe(header);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    activeIdList: [...activeIdList, lastActiveId],
    headingEls: headingElsRef.current,
  };
};

export default useHeadingsObserver;

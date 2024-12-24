import { Dispatch, SetStateAction } from "react";

const observerOption = {
  threshold: 0.4,
};

export const getIntersectionObserver = (
  setState: Dispatch<SetStateAction<string>>
) => {
  let direction: "UP" | "DOWN" = "DOWN";
  let prevYposition = window.scrollY;

  const checkScrollDirection = (prevY: number) => {
    if (window.scrollY === 0 && prevY === 0) {
      return;
    } else if (window.scrollY > prevY) {
      direction = "DOWN";
    } else {
      direction = "UP";
    }

    prevYposition = window.scrollY;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYposition);

      if (
        (direction === "DOWN" && !entry.isIntersecting) ||
        (direction === "UP" && entry.isIntersecting)
      ) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
};

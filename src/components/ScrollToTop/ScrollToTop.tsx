"use client";
import { useState, useEffect } from "react";

import { classNames } from "@/shared/lib/classNames";

import { Button } from "../Button";
import styles from "./ScrollToTop.module.scss";

import ScrollToTopIcon from "/public/shared/arrow-up.svg";

interface ScrollToTopProps {
  className?: string;
}

export const ScrollToTop = ({ className }: ScrollToTopProps) => {
  const [isBtnShown, setIsBtnShown] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (
        document.documentElement.clientHeight / 6 < document.body.scrollTop ||
        document.documentElement.clientHeight / 6 <
          document.documentElement.scrollTop
      ) {
        setIsBtnShown(true);
      } else {
        setIsBtnShown(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  if (isBtnShown) {
    return (
      <Button
        className={classNames(styles.scrollToTop, {}, [className])}
        btnContent={<ScrollToTopIcon />}
        variant="nav"
        aria-label="Скролл страницы в начало"
        onClick={handleClick}
      />
    );
  }

  return null;
};

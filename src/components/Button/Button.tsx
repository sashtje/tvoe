import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { classNames } from "@/shared/lib/classNames";

import styles from "./Button.module.scss";

export type ButtonVariant = "nav" | "filled" | "genre" | "default";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  btnContent: ReactNode;
  variant?: ButtonVariant;
  href?: string;
}

export const Button = (props: ButtonProps) => {
  const { className, btnContent, onClick, variant = "default", href } = props;

  if (!href) {
    return (
      <button
        className={classNames(styles.btn, {}, [className, styles[variant]])}
        onClick={onClick}
      >
        {btnContent}
      </button>
    );
  }

  return (
    <Link
      className={classNames(styles.btn, {}, [className, styles[variant]])}
      href={href}
    >
      {btnContent}
    </Link>
  );
};

import Link from "next/link";

import LogoIcon from "/public/shared/logo.svg";

import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <LogoIcon />
    </Link>
  );
};

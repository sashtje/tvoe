"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../Button";

import SearchIcon from "/public/shared/search.svg";
import HomeIcon from "/public/shared/home.svg";
import MovieIcon from "/public/shared/movie.svg";
import TvIcon from "/public/shared/tv.svg";
import FavoriteIcon from "/public/shared/favorite.svg";
import UserIcon from "/public/shared/user.svg";

import styles from "./Navigation.module.scss";
import { classNames } from "./../../shared/lib/classNames/classNames";

export const Navigation = () => {
  const pathname = usePathname();

  const getLinkStyles = (path: string) => {
    return pathname === path
      ? classNames(styles.link, {}, [styles.active])
      : styles.link;
  };

  return (
    <nav className={styles.navigation}>
      <Button
        btnContent={<SearchIcon />}
        variant="nav"
        aria-label="Поиск по сайту"
      />

      <ul className={styles.linksList}>
        <li>
          <Link href="/" className={getLinkStyles("/")} aria-label="Главная">
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link
            href="/filmy"
            className={getLinkStyles("/filmy")}
            aria-label="Фильмы"
          >
            <MovieIcon />
          </Link>
        </li>
        <li>
          <Link
            href="/tv/pervyj-kanal"
            className={getLinkStyles("/tv/pervyj-kanal")}
            aria-label="ТВ"
          >
            <TvIcon />
          </Link>
        </li>
        <li>
          <Link
            href="/my/bookmarks"
            className={getLinkStyles("/my/bookmarks")}
            aria-label="Избранное"
          >
            <FavoriteIcon />
          </Link>
        </li>
      </ul>

      <Button
        btnContent={<UserIcon />}
        variant="nav"
        aria-label="Авторизация"
      />
    </nav>
  );
};

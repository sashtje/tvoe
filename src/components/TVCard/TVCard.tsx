import Image from "next/image";
import Link from "next/link";

import { classNames } from "@/shared/lib/classNames";

import styles from "./TVCard.module.scss";
import { Rating } from "../Rating";

export type TVCardSize = "s" | "l";

interface TVCardProps {
  className?: string;

  movieHref: string;
  movieCoverSrc: string;
  movieCoverAlt: string;
  size?: TVCardSize;
  movieRating: number;
  movieTitle?: string;
}

export const TVCard = (props: TVCardProps) => {
  const {
    className,
    movieHref,
    movieCoverSrc,
    movieCoverAlt,
    size = "l",
    movieRating,
    movieTitle,
  } = props;

  return (
    <Link
      className={classNames(styles.tvCard, {}, [className, styles[size]])}
      href={movieHref}
    >
      <div className={styles.coverWrapper}>
        <Image
          className={styles.cover}
          src={movieCoverSrc}
          alt={movieCoverAlt}
          fill
          sizes="(max-width: 945px) or (max-height: 700px) 200px, 20vw"
        />
        <Rating
          className={styles.rating}
          rating={movieRating}
          variant="filled"
          size={size}
        />
      </div>

      {!!movieTitle && <h3 className={styles.movieTitle}>{movieTitle}</h3>}
    </Link>
  );
};

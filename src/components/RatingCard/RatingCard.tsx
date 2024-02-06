import Link from "next/link";
import Image from "next/image";

import { archivo } from "@/fonts";
import { classNames } from "@/shared/lib/classNames";

import styles from "./RatingCard.module.scss";

interface RatingCardProps {
  className?: string;

  id: string;
  movieHref: string;
  movieCoverSrc: string;
  movieCoverAlt: string;
}

export const RatingCard = (props: RatingCardProps) => {
  const { className, id, movieHref, movieCoverSrc, movieCoverAlt } = props;

  return (
    <Link
      href={movieHref}
      className={classNames(styles.ratingCard, {}, [className])}
    >
      <div className={classNames(styles.index, {}, [archivo.className])}>
        {id}
      </div>

      <div className={styles.wrapper}>
        <Image
          className={styles.cover}
          src={movieCoverSrc}
          alt={movieCoverAlt}
          fill
          sizes="(max-width: 945px) or (max-height: 700px) 200px, 20.74vw"
        />
      </div>
    </Link>
  );
};

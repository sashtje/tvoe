import Image from "next/image";

import styles from "./SerialCard.module.scss";

interface SerialCardProps {
  className?: string;
  serialCoverSrc: string;
  serialCoverAlt: string;
  seriesNumber: string;
  seriesDuration: string;
}

export const SerialCard = (props: SerialCardProps) => {
  const { serialCoverSrc, serialCoverAlt, seriesNumber, seriesDuration } =
    props;

  return (
    <button className={styles.serialCard}>
      <div className={styles.coverWrapper}>
        <Image
          className={styles.cardCover}
          src={serialCoverSrc}
          alt={serialCoverAlt}
          fill
          sizes="(max-width: 1500px) 300px, 28.3vw"
        />
      </div>

      <h3 className={styles.cardTitle}>{seriesNumber}</h3>
      <p className={styles.cardDescription}>{seriesDuration}</p>
    </button>
  );
};

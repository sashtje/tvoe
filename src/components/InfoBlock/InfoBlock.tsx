import { GenreBtns } from "../GenreBtns";
import { classNames } from "./../../shared/lib/classNames/classNames";

import styles from "./InfoBlock.module.scss";

type InfoBlockVariant = "default" | "btns" | "chips";

interface InfoBlockProps {
  title: string;
  data: string;
  type?: InfoBlockVariant;
}

export const InfoBlock = (props: InfoBlockProps) => {
  const { title, data, type = "default" } = props;

  return (
    <section className={classNames(styles.infoBlock, {}, [styles[type]])}>
      <h3 className={styles.title}>{title}</h3>

      {type === "default" ? (
        <p className={styles.data}>{data}</p>
      ) : type === "btns" ? (
        <GenreBtns className={styles.data} data={data} />
      ) : (
        <div className={styles.data}>{data}</div>
      )}
    </section>
  );
};

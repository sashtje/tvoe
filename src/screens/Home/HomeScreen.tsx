import Image from "next/image";

import { Button, TVCardSlider, RatingCardSlider } from "@/components";

import newsData from "@/mock/newsData.json";
import top10Data from "@/mock/top10Data.json";

import styles from "./Home.module.scss";

export const HomeScreen = () => {
  return (
    <main className={styles.home}>
      <div className={styles.bgImgWrapper}>
        <Image
          className={styles.bgImg}
          priority
          src="/main-page/background.png"
          alt="Индиана Джонс, фото"
          fill
          sizes="(max-width: 1400px) 100vw, 65vw"
        />
      </div>

      <section className={styles.main}>
        <h1 className={styles.title}>
          <Image
            className={styles.titleImg}
            src="/main-page/title.png"
            alt="Индиана Джонс и колесо судьбы"
            fill
            sizes="(max-width: 740px) 208px,(max-width: 1400px) 25vw, 30vw"
          />
        </h1>

        <p className={styles.subtitle}>
          Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему
          в седле.
        </p>

        <div className={styles.controls}>
          <Button
            className={styles.btn}
            btnContent="Смотреть"
            variant="filled"
          />
          <Button className={styles.btn} btnContent="О фильме" />
        </div>
      </section>

      <section className={styles.newItems}>
        <h2 className={styles.title}>Новинки</h2>

        <TVCardSlider data={newsData} />
      </section>

      <section className={styles.top10}>
        <h2 className={styles.title}>
          <span className={styles.titleHighlighted}>топ-10</span>просмотров за
          неделю
        </h2>

        <RatingCardSlider data={top10Data} />
      </section>
    </main>
  );
};

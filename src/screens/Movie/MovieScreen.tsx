import Image from "next/image";

import {
  Button,
  Rating,
  InfoBlock,
  TVCardSlider,
  SerialCardSlider,
} from "@/components";

import similarData from "@/mock/similarData.json";

import MarkerIcon from "/public/movie-page/icons/marker.svg";
import FavoriteIcon from "/public/movie-page/icons/favorite.svg";
import AttentionIcon from "/public/movie-page/icons/attention.svg";

import styles from "./MovieScreen.module.scss";

export const MovieScreen = () => {
  return (
    <main className={styles.movie}>
      <div className={styles.bgImgWrapper}>
        <Image
          className={styles.bgImg}
          priority
          src="/movie-page/background.png"
          alt="Уэнздей, фото"
          fill
          sizes="(max-width: 1400px) 100%, 73%"
        />
      </div>

      <section className={styles.main}>
        <h1 className={styles.title}>
          <Image
            className={styles.titleImg}
            src="/movie-page/title.svg"
            alt="Уэнздей"
            fill
            sizes="(max-width: 520px) 100px, 19vw"
          />
        </h1>

        <div className={styles.shortInfo}>
          <Rating className={styles.shortInfo__text} rating={10} />
          <span className={styles.shortInfo__text}>2022 - ...</span>
          <span className={styles.shortInfo__text}>1 сезон</span>
          <span className={styles.shortInfo__text}>США</span>
          <span className={styles.shortInfo__text}>Ужасы</span>
          <span className={styles.shortInfo__text}>0+</span>
        </div>

        <p className={styles.subtitle}>
          Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы
          остановить местного серийного убийцу и раскрыть тайну родителей.
        </p>

        <div className={styles.controls}>
          <Button btnContent="Смотреть" variant="filled" />
          <Button btnContent="Трейлер" />
          <Button
            btnContent={<MarkerIcon className={styles.svgIcon} />}
            aria-label="Закладки"
          />
          <Button
            btnContent={<FavoriteIcon className={styles.svgIcon} />}
            aria-label="Избранное"
          />
        </div>
      </section>

      <section className={styles.seasons}>
        <SerialCardSlider
          title={<h2 className={styles.title}>Сезоны</h2>}
          spaceBetween={20}
        />
      </section>

      <section className={styles.description}>
        <h2 className={styles.title}>Описание</h2>

        <p className={styles.contentText}>
          Детективная история, наполненная сверхъестественными силами. Главная
          героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и
          единственная дочь Гомеса и Мортиши Аддамсов, которая становится
          студенткой академии «Невермор». Она пытается овладеть своими
          проявившимися экстрасенсорными способностями, помешать чудовищным
          убийствам монстра, что терроризирует местный городок Джерико, а также
          разгадать тайну, в которую были втянуты её родители 32 года назад, — и
          всё это на фоне её новых и очень запутанных отношений в академии.
        </p>

        <div className={styles.attentionBlock}>
          <AttentionIcon />

          <p className={styles.attentionText}>
            Контент может содержать сцены курения и употребления спиртных
            напитков. Курение и чрезмерное употребление алкоголя вредит вашему
            здоровью.
          </p>
        </div>
      </section>

      <section className={styles.similar}>
        <h2 className={styles.title}>Похожее</h2>

        <TVCardSlider data={similarData} size="s" />
      </section>

      <section className={styles.info}>
        <h2 className={styles.title}>Информация</h2>

        <div className={styles.infoBlockWrapper}>
          <InfoBlock title="Премьера в мире" data="31 октября 2022" />
          <InfoBlock title="Страна" data="США" />
          <InfoBlock title="Язык аудиодорожки" data="Rus, Eng" />

          <InfoBlock title="Оригинальное название" data="Wednesday" />
          <InfoBlock
            title="Жанры"
            data="Фентези, Комедия, Криминал, Детектив"
            type="btns"
          />
          <InfoBlock title="Качество" data="Full HD" type="chips" />
        </div>
      </section>
    </main>
  );
};

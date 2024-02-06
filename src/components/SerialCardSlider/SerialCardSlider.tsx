"use client";

import { ChangeEvent, useState, Fragment } from "react";

import seasonsData from "@/mock/seasonsData.json";

import { Slider } from "../Slider";
import { SerialCard } from "../SerialCard";
import styles from "./SerialCardSlider.module.scss";

interface SerialCardSliderProps {
  title: JSX.Element;
  spaceBetween: number;
}

export const SerialCardSlider = (props: SerialCardSliderProps) => {
  const { title, spaceBetween } = props;

  const seasons = Object.keys(seasonsData);
  const [seasonNumber, setSeasonNumber] = useState(seasons[0]);

  const currentSeasonData =
    seasonsData[seasonNumber as keyof typeof seasonsData];

  const onSeasonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeasonNumber(e.target.value);
  };

  return (
    <>
      <div className={styles.titleBlock}>
        {title}

        <span className={styles.seasonsBtnsWrapper}>
          {seasons.map((seasonIndex) => (
            <Fragment key={seasonIndex}>
              <input
                className={styles.seasonsBtn}
                id={`season-${seasonIndex}`}
                type="radio"
                name="seasonNumber"
                value={seasonIndex}
                checked={seasonNumber === seasonIndex}
                onChange={onSeasonChange}
              />

              <label
                className={styles.seasonsLabel}
                htmlFor={`season-${seasonIndex}`}
                tabIndex={0}
              >
                {seasonIndex}
              </label>
            </Fragment>
          ))}
        </span>
      </div>

      <Slider
        data={currentSeasonData}
        ComponentSlide={SerialCard}
        spaceBetween={spaceBetween}
      />
    </>
  );
};

"use client";

import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./Slider.module.scss";
import { TVCardSize } from "../TVCard";

interface SliderProps<T> {
  ComponentSlide: FunctionComponent<T>;
  data: T[];
  spaceBetween: number;
  size?: TVCardSize;
  slidesPerView?: number;
  slidesPerGroup?: number;
}

export const Slider = <T extends { id: string }>(props: SliderProps<T>) => {
  const {
    ComponentSlide,
    data,
    spaceBetween,
    size,
    slidesPerView = "auto",
    slidesPerGroup,
  } = props;

  return (
    <Swiper
      className={styles.slider}
      modules={[Navigation]}
      navigation
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      slidesPerGroupAuto={!slidesPerGroup}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <ComponentSlide {...item} size={size} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

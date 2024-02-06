"use client";

import { useQuery } from "@/shared/hooks/useQuery";

import { TVCardData } from "@/mock/types";

import { Slider } from "../Slider";
import { TVCard, TVCardSize } from "../TVCard";

interface TVCardSliderProps {
  data: TVCardData[];
  size?: TVCardSize;
}

export const TVCardSlider = (props: TVCardSliderProps) => {
  const { data, size } = props;

  const is1200px = useQuery("(max-width: 1200px)");
  const is1000px = useQuery("(max-width: 1000px)");
  const is765px = useQuery("(max-width: 765px)");
  const is580px = useQuery("(max-width: 580px)");
  const is450px = useQuery("(max-width: 450px)");

  const calcSlidesPerView = () => {
    if (size) {
      if (is450px) {
        return 1.5;
      }

      if (is580px) {
        return 2.1;
      }

      if (is765px) {
        return 3.1;
      }

      if (is1000px) {
        return 4.1;
      }

      if (is1200px) {
        return 5.1;
      }

      return 6;
    } else {
      if (is450px) {
        return 1.5;
      }

      if (is765px) {
        return 2.1;
      }

      if (is1200px) {
        return 3.1;
      }

      return 3.8;
    }
  };

  const calcSlidesPerGroup = () => {
    if (size) {
      if (is450px) {
        return 1;
      }

      if (is580px) {
        return 2;
      }

      if (is765px) {
        return 3;
      }

      if (is1000px) {
        return 4;
      }

      if (is1200px) {
        return 5;
      }

      return 6;
    } else {
      if (is450px) {
        return 1;
      }

      if (is765px) {
        return 2;
      }

      return 3;
    }
  };

  const calcSpaceBetween = () => {
    if (size) {
      return 24;
    } else {
      if (is1200px) {
        return 20;
      }

      return 44;
    }
  };

  return (
    <Slider
      ComponentSlide={TVCard}
      data={data}
      spaceBetween={calcSpaceBetween()}
      size={size}
      slidesPerView={calcSlidesPerView()}
      slidesPerGroup={calcSlidesPerGroup()}
    />
  );
};

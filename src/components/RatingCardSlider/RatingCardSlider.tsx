"use client";

import { useQuery } from "@/shared/hooks/useQuery";

import { RatingData } from "@/mock/types";

import { RatingCard } from "../RatingCard";
import { Slider } from "../Slider";

interface RatingCardSliderProps {
  data: RatingData[];
}

export const RatingCardSlider = (props: RatingCardSliderProps) => {
  const { data } = props;

  const is1200px = useQuery("(max-width: 1200px)");
  const is450px = useQuery("(max-width: 450px)");

  const calcSpaceBetween = () => {
    if (is450px) {
      return 20;
    }

    if (is1200px) {
      return 50;
    }

    return 100;
  };

  return (
    <Slider
      ComponentSlide={RatingCard}
      data={data}
      spaceBetween={calcSpaceBetween()}
    />
  );
};

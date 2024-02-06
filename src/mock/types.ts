export interface RatingData {
  id: string;
  movieHref: string;
  movieCoverSrc: string;
  movieCoverAlt: string;
}

export type TVCardData = RatingData & {
  movieRating: number;
  movieTitle?: string;
};

export interface SerialCardData {
  id: string;
  serialCoverSrc: string;
  serialCoverAlt: string;
  seriesNumber: string;
  seriesDuration: string;
}

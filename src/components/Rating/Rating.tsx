import styles from "./Rating.module.scss";
import { classNames } from "./../../shared/lib/classNames/classNames";

type RatingVariant = "filled" | "default";
type RatingSize = "s" | "l";

interface RatingProps {
  className?: string;

  rating: number;
  variant?: RatingVariant;
  size?: RatingSize;
}

export const Rating = (props: RatingProps) => {
  const { className, rating, variant = "default", size = "l" } = props;

  return (
    <div
      className={classNames(styles.rating, {}, [
        className,
        styles[variant],
        styles[size],
      ])}
    >
      {rating.toLocaleString("ru")}
    </div>
  );
};

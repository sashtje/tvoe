import { Fragment } from "react";
import { Button } from "../Button";

interface GenreBtnsProps {
  className?: string;
  data: string;
}

export const GenreBtns = (props: GenreBtnsProps) => {
  const { className, data } = props;
  const btnsContents = data.split(", ");

  return (
    <div className={className}>
      {btnsContents.map((content, index) => (
        <Fragment key={index}>
          <Button btnContent={content} variant="genre" />
          {index !== btnsContents.length - 1 && <>, </>}
        </Fragment>
      ))}
    </div>
  );
};

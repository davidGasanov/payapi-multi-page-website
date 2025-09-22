import type React from "react";
import { twMerge } from "tailwind-merge";

interface TitleAndParagraphProps {
  title: string;
  paragraph: string;
}

const TitleAndParagraph: React.FC<
  React.HTMLAttributes<HTMLDivElement> & TitleAndParagraphProps
> = ({ title, paragraph, className }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:justify-between md:gap-[10px] md:text-start lg:max-w-[920px]",
        className
      )}
    >
      <h2 className="h4 text-san-juan-blue min-w-[230px] md:h3-big">{title}</h2>
      <p className="text-light-san-juan-blue body">{paragraph}</p>
    </div>
  );
};

export default TitleAndParagraph;

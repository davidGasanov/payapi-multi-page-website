import type React from "react";
import Button from "../button";

interface MailingProps {
  withTitle?: boolean;
}

const Mailing: React.FC<MailingProps> = ({ withTitle }) => {
  return (
    <div className="flex flex-col w-full items-center gap-8 lg:flex-row lg:justify-between">
      {withTitle && (
        <h2 className="h3-big text-san-juan-blue md:h2">Ready to start?</h2>
      )}
      <form className="cursor-pointer shrink-0 max-w-[445px] flex flex-col gap-4 w-full md:drop-shadow-[10px_10px_10px_rgba(54,83,107,0.25)] md:flex-row md:gap-0 relative lg:mt-[21px] lg:drop-shadow-[10px_10px_15px_rgba(54,83,107,0.25)]">
        <input
          type="email"
          placeholder="Enter email address"
          className="cursor-pointer w-full h-[48px] bg-water-white drop-shadow-[10px_30px_25px_rgba(54,83,107,0.25)] p-4 pl-6 rounded-[24px] outline-none focus:outline-none focus:ring-0 placeholder:font-public-sans placeholder:text-san-juan-blue/50 placeholder:font-bold md:drop-shadow-none md:pr-[180px]"
        />
        <Button
          variant="primary"
          className="z-10 w-full md:absolute md:right-0 md:w-auto md:h-[48px]"
          type="submit"
        >
          Schedule a demo
        </Button>
      </form>
    </div>
  );
};

export default Mailing;

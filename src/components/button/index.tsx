import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary-light" | "secondary-dark";
};

const Button = ({ variant, className, ...props }: ButtonProps) => {
  const button = tv({
    base: "pt-4 pr-[24px] pb-[14px] pl-[27px] transition-all duration-200 ease-in-out rounded-[24px] font-bold cursor-pointer disabled:cursor-default disabled:hover-none text-[15px] font-public-sans leading-snug disabled:opacity-50",
    variants: {
      variant: {
        // Priamary
        primary:
          "bg-dark-pink text-water-white hover:bg-charm-pink disabled:hover:bg-dark-pink",
        //   Secondary (Light)
        "secondary-light":
          "bg-mirage-blue text-water-white border border-water-white hover:bg-water-white hover:text-mirage-blue disabled:hover:bg-mirage-blue disabled:hover:text-water-white",
        //   Secondary (Dark)
        "secondary-dark":
          "bg-water-white text-san-juan-blue border border-san-juan-blue hover:bg-san-juan-blue hover:text-water-white disabled:hover:bg-san-juan-blue disabled:hover:text-water-white",
      },
    },
  });

  return (
    <button className={twMerge(button({ variant }), className)} {...props} />
  );
};

export default Button;

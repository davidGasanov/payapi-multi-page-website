import { useLocation } from "react-router-dom";
import { tv } from "tailwind-variants";

const BackgroundImage = () => {
  const location = useLocation();

  const bgImage = tv({
    base: "w-[780px] h-[780px] absolute max-w-none transition-all duration-200 ease-in",
    variants: {
      location: {
        "/": "-top-[550px] left-1/2 -translate-x-1/2 z-0  lg:translate-x-[89px] lg:-top-[272px]",
        "/pricing":
          "z-0 -top-[644px] -right-[479px] md:-top-[464px] md:-right-[517px] lg:-right-[140px] lg:-top-[527px]",
        "/about":
          "z-0 -top-[644px] -right-[479px] md:-top-[464px] md:-right-[517px] lg:-right-[140px] lg:-top-[527px]",
        "/contact":
          "z-0 -top-[644px] -right-[479px] md:-top-[464px] md:-right-[517px] lg:-right-[140px] lg:-top-[527px]",
      },
    },
  });

  return (
    <div className="absolute w-full h-full overflow-hidden">
      <img
        src="/assets/shared/desktop/bg-pattern-circle.svg"
        className={bgImage({
          location: location.pathname as keyof typeof bgImage.variants.location,
        })}
      />
    </div>
  );
};

export default BackgroundImage;

import Container from "../../../../layout/container";

const Section3 = () => {
  return (
    <section className="mt-20 md:mt-[100px] lg:mt-[150px] ">
      <Container className="">
        <div className="flex flex-col gap-[48px] md:max-w-[573px] md:mx-auto lg:flex-row lg:gap-[125px] lg:items-center lg:mx-0 lg:max-w-full">
          <img
            alt="Illustration image"
            src="assets/home/desktop/illustration-easy-to-implement.svg"
            className="w-full object-contain drop-shadow-[25px_25px_80px_rgba(54,83,107,0.25)] lg:max-w-[445px]"
          />

          <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-start lg:max-w-[445px]">
            <h2 className="font-dm-serif-display text-[36px] leading-[36px] text-san-juan-blue md:h2">
              Easy to implement
            </h2>
            <p className="body leading-[28px] text-light-san-juan-blue max-w-[350px] md:max-w-full">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-[48px] mt-[82px] md:mt-[100px] md:max-w-[573px] md:mx-auto lg:mt-[150px] lg:flex-row-reverse lg:items-center lg:gap-[95px] lg:mx-0 lg:max-w-full">
          <div className="w-full relative">
            <div className="absolute w-[780px] h-[780px] top-1/2 -translate-y-1/2 -right-[560px] bg-light-san-juan-blue/15 rounded-full hidden lg:block" />
            <img
              alt="Illustration image 2"
              src="assets/home/desktop/illustration-simple-ui.svg"
              className="w-full object-contain drop-shadow-[25px_25px_80px_rgba(54,83,107,0.25)]"
            />
          </div>

          <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-start lg:w-[445px] lg:shrink-0">
            <h2 className="font-dm-serif-display text-[36px] leading-[36px] text-san-juan-blue md:h2">
              Simple UI & UX
            </h2>
            <p className="body leading-[28px] text-light-san-juan-blue max-w-[350px] md:max-w-full">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section3;

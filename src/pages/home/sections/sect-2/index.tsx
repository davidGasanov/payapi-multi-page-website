import { Link } from "react-router-dom";
import Button from "../../../../components/button";
import Container from "../../../../layout/container";

const companiesImageUrlList = [
  "/assets/shared/desktop/tesla.svg",
  "/assets/shared/desktop/microsoft.svg",
  "/assets/shared/desktop/hewlett-packard.svg",
  "/assets/shared/desktop/oracle.svg",
  "/assets/shared/desktop/google.svg",
  "/assets/shared/desktop/nvidia.svg",
];

const Section2 = () => {
  return (
    <section className="bg-mirage-blue w-full mt-20 relative overflow-hidden">
      {/* Bg image */}
      <img
        src="/assets/shared/desktop/bg-pattern-circle.svg"
        className="w-[780px] h-[780px] z-0 object-contain absolute left-1/2 -translate-x-1/2 -top-[502px] md:-top-[548px] lg:-top-[359px] lg:-left-[235px] lg:translate-x-0"
      />
      {/* /Bg image */}

      <Container className="py-20 md:py-[88px] flex flex-col relative z-10 md:items-center md:justify-between lg:flex-row-reverse lg:gap-6">
        {/* Company list */}
        <div className="flex flex-wrap justify-between gap-y-10 gap-x-12 w-full max-w-[300px] mx-auto md:grid md:grid-cols-3 md:max-w-[536px] md:place-items-center shrink-0 lg:mx-0 lg:justify-items-start lg:items-center">
          {companiesImageUrlList.map((imageUrl) => (
            <img key={imageUrl} src={imageUrl} className="object-contain" />
          ))}
        </div>

        {/* Description */}
        <div className="mt-[56px] text-center flex flex-col items-center md:mt-[64px] lg:items-start lg:text-start">
          <h2 className="h3-big text-water-white tracking-[-0.25px] font-normal md:h2">
            Who we work with
          </h2>
          <p
            className="body text-water-white/70 mt-2 leading-[28px] max-w-[400px] font-light
          md:max-w-[457px] md:mt-6"
          >
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Button className="mt-[32px] px-[32px]" variant="secondary-light">
            <Link to="/about-us">About us</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Section2;

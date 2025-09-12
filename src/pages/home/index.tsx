import Mailing from "../../components/mailing";
import Container from "../../layout/container";

const HomePage = () => {
  return (
    <section className="mt-8 relative z-10">
      <Container className="flex flex-col items-center gap-[24px] lg:flex-row-reverse lg:gap-[206px]">
        <img
          src="/public/assets/home/desktop/illustration-phone-mockup.svg"
          alt="Mobile phone illustration"
          className="w-[128px] h-[240px] drop-shadow-[25px 25px 80px #36536B] lg:w-[263px] lg:h-[500px]"
        />
        <div className="w-full flex flex-col items-center gap-6 md:max-w-[573px] lg:max-w-[546px] lg:items-start lg:gap-0">
          <h1 className="h3-big text-center md:h2 lg:h1-large lg:text-start lg:h-[243px]">
            Start building with our APIs for absolutely free.
          </h1>
          <Mailing />
          <p className="body text-light-san-juan-blue lg:mt-[16px] lg:ml-[27px]">
            Have any questions?{" "}
            <span>
              <a className="font-bold" href="/">
                Contact us
              </a>
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;

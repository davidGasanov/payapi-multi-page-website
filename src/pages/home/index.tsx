import Mailing from "../../components/mailing";
import Container from "../../layout/container";

const HomePage = () => {
  return (
    <section className="mt-8 relative z-10">
      <Container className="flex flex-col items-center gap-[24px]">
        <img
          src="/public/assets/home/desktop/illustration-phone-mockup.svg"
          alt="Mobile phone illustration"
          className="w-[128px] h-[240px] drop-shadow-[25px 25px 80px #36536B]"
        />
        <div className="w-full flex flex-col items-center gap-6">
          <h1 className="h3-big text-center">
            Start building with our APIs for absolutely free.
          </h1>
          <Mailing />
          <p className="body text-light-san-juan-blue">
            Have any questions?{" "}
            <span>
              <a className="font-bold" href="/">Contact us</a>
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;

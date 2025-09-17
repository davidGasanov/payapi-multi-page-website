import MailingSection from "../../components/mailing-section";
import HeroSection from "./sections/hero";
import Section2 from "./sections/sect-2";
import Section3 from "./sections/sect-3";
import Section4 from "./sections/sect-4";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <MailingSection />
    </>
  );
};

export default HomePage;

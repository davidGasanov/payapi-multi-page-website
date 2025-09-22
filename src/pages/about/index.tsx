import MailingSection from "../../components/mailing-section";
import AboutImageSection from "./sections/image-section";
import AboutSection1 from "./sections/sect-1";
import AboutSection2 from "./sections/sect-2";

const AboutPage = () => {
  return (
    <>
      <AboutSection1 />
      <AboutImageSection />
      <AboutSection2 />
      <MailingSection />
    </>
  );
};

export default AboutPage;

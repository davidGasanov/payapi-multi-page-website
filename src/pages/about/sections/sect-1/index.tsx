import Container from "../../../../layout/container";
import TitleAndParagraph from "../../components/title-and-paragraph";

const sectionText = [
  {
    title: "Our Vision",
    paragraph:
      "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. ",
  },
  {
    title: "Our Business",
    paragraph:
      "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.",
  },
];

const AboutSection1 = () => {
  return (
    <section className="mt-12 md:mt-[75px]">
      <Container className="flex flex-col items-center gap-10 md:gap-[54px] lg:items-start">
        <h1 className="text-san-juan-blue h3-big text-center md:max-w-[573px] md:h2 lg:h1-small lg:text-start lg:max-w-[660px] lg:h-[189px]">
          We empower innovators by delivering access to the financial system
        </h1>
        <div className="flex flex-col gap-12 items-center">
          {sectionText.map((sectionText) => (
            <TitleAndParagraph key={sectionText.title} {...sectionText} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection1;

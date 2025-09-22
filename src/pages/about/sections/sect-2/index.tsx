import Container from "../../../../layout/container";
import Section2Stat from "../../components/section-2-stat";
import TitleAndParagraph from "../../components/title-and-paragraph";

const stats = [
  {
    title: "Team Members",
    value: "300+",
  },
  {
    title: "Offices in the US",
    value: "3",
  },
  {
    title: "Transactions analyzed",
    value: "10M+",
  },
];

const sectionText = [
  {
    title: "The Culture",
    paragraph:
      "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
  },
  {
    title: "The People",
    paragraph:
      "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
  },
];

const AboutSection2 = () => {
  return (
    <section className="mt-[72px] md:mt-[75px]">
      <Container>
        <div className="flex flex-col gap-[32px] py-4 border-y-[1px] border-san-juan-blue/25 md:border-none md:flex-row md:gap-10px lg:gap-[30px]">
          {stats.map((stat) => (
            <Section2Stat key={stat.title} {...stat} />
          ))}
        </div>
        <div className="flex flex-col gap-12 items-center mt-12 md:mt-[64px] lg:mt-[72px] max-w-[920px]">
          {sectionText.map((sectionText) => (
            <TitleAndParagraph key={sectionText.title} {...sectionText} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection2;

import Container from "../../../../layout/container";
import FeatureCard from "./feature-card";

const features = [
  {
    imageUrl: "/assets/home/desktop/icon-personal-finances.svg",
    title: "Personal Finances",
    description:
      "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
  },
  {
    imageUrl: "/assets/home/desktop/icon-banking-and-coverage.svg",
    title: "Banking & Coverage",
    description:
      "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
  },
  {
    imageUrl: "/assets/home/desktop/icon-consumer-payments.svg",
    title: "Consumer Payments",
    description:
      "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
  },
];

const Section4 = () => {
  return (
    <section className="mt-[80px] md:mt-[100px] lg:mt-[150px]">
      <Container>
        <div className="grid grid-cols-1 gap-y-[48px] justify-items-center md:gap-x-[10px] md:grid-cols-3 lg:gap-[30px]">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Section4;

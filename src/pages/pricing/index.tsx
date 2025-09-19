import MailingSection from "../../components/mailing-section";
import Container from "../../layout/container";
import PlanCard from "./components/price-card";

const plansList = [
  {
    name: "Free Plan",
    description:
      "Build and test using our core set of products with up to 100 API requests ",
    price: 0.0,
    features: {
      transactions: true,
      auth: true,
      identity: true,
      investments: false,
      assets: false,
      liabilities: false,
      income: false,
    },
  },
  {
    name: "Basic Plan",
    description:
      "Launch your project with unlimited requests and no contractual minimums",
    price: 249.0,
    features: {
      transactions: true,
      auth: true,
      identity: true,
      investments: true,
      assets: true,
      liabilities: false,
      income: false,
    },
  },
  {
    name: "Premium Plan",
    description:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: 499.0,
    features: {
      transactions: true,
      auth: true,
      identity: true,
      investments: true,
      assets: true,
      liabilities: true,
      income: true,
    },
  },
];

const PricingPage = () => {
  return (
    <section className="mt-[48px] md:mt-[75px] lg:mt-[82px]">
      <Container>
        <h1 className="h3-big text-center text-san-juan-blue md:h2 lg:h1-small lg:text-start">
          Pricing
        </h1>
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-[10px] lg:gap[30px] mt-12 md:mt-[70px] lg:mt-[72px]">
          {plansList.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
      <MailingSection className="lg:mt-[96px]" />
    </section>
  );
};

export default PricingPage;

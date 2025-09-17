import Container from "../../layout/container";
import Mailing from "../mailing";

const MailingSection = () => {
  return (
    <section className="mt-[80px] md:mt-[100px] lg:mt-[150px]">
      <Container>
        <Mailing withTitle />
      </Container>
    </section>
  );
};

export default MailingSection;

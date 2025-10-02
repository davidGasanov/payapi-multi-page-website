import Container from "../../layout/container";
import ContactForm from "./sections/contact-form";
import PartnerCompanies from "./sections/partner-companies";

const ContactPage = () => {
  return (
    <section className="mt-12 md:mt-[75px]">
      <Container>
        <h1 className="text-san-juan-blue h3-big text-center md:max-w-[573px] md:h2 lg:h1-small lg:text-start lg:max-w-[660px] lg:h-[189px]">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className="flex flex-col gap-[64px]">
          <ContactForm />
          <PartnerCompanies />
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;

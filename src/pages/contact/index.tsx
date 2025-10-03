import MailingSection from "../../components/mailing-section";
import Container from "../../layout/container";
import ContactForm from "./sections/contact-form";
import PartnerCompanies from "./sections/partner-companies";

const ContactPage = () => {
  return (
    <section className="mt-12 md:mt-[75px]">
      <Container className="flex flex-col md:items-center lg:items-start">
        <h1 className="text-san-juan-blue h3-big text-center md:max-w-[573px] md:h2 lg:h1-small lg:text-start lg:max-w-[660px] lg:h-[189px]">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className="flex flex-col gap-[64px] lg:flex-row lg:w-full lg:justify-between lg:items-center">
          <ContactForm />
          <PartnerCompanies />
        </div>
        <MailingSection />
      </Container>
    </section>
  );
};

export default ContactPage;

import { twMerge } from "tailwind-merge";
import Container from "../../layout/container";
import Mailing from "../mailing";

const MailingSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section
      className={twMerge("mt-[80px] md:mt-[100px] lg:mt-[150px] w-full", className)}
    >
      <Container>
        <Mailing withTitle />
      </Container>
    </section>
  );
};

export default MailingSection;

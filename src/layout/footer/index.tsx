import { Link } from "react-router-dom";
import Container from "../container";

const socials = [
  {
    href: "/",
    src: "/assets/shared/desktop/facebook.svg",
    alt: "facebook",
  },
  {
    href: "/",
    src: "/assets/shared/desktop/twitter.svg",
    alt: "twitter",
  },
  {
    href: "/",
    src: "/assets/shared/desktop/linkedin.svg",
    alt: "linkedin",
  },
];

const Footer = () => {
  return (
    <footer className="bg-mirage-blue py-10 mt-10 md:py-[31px] md:mt-[100px] lg:mt-[96px] relative z-10">
      <Container className="flex flex-col items-center md:flex-row md:items-center">
        <img src="/assets/shared/desktop/logo-white.svg" />
        <nav
          className="mt-10 flex flex-col gap-[31px] list-none [&>li]:{
          text-[15px] font-bold text-water-white/70 
          } items-center md:ml-[64px] md:flex-row md:mt-0"
        >
          <li>
            <Link to="/about">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>
        </nav>
        <ul className="mt-10 flex gap-6 list-none items-center md:mt-0 md:ml-auto">
          {socials.map(({ href, src, alt }) => (
            <li key={alt}>
              <a href={href}>
                <img src={src} alt={alt} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;

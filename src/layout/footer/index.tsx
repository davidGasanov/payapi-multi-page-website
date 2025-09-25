import { Link } from "react-router-dom";
import Container from "../container";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";

const socials = [
  {
    href: "/",
    Icon: AiFillFacebook,
  },
  {
    href: "/",
    Icon: FaTwitter,
  },
  {
    href: "/",
    Icon: FaLinkedin,
  },
];

const navLinks = [
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-mirage-blue py-10 mt-10 md:py-[31px] md:mt-[100px] lg:mt-[96px] relative z-10 overflow-hidden">
      {/* Bg image */}
      <div className="absolute w-[780px] h-[780px] bg-san-juan-blue/15 rounded-full -z-10 top-[177px] left-1/2 -translate-x-1/2 md:-right-[390px] md:translate-x-0 md:-top-[136px] md:left-auto" />
      <Container className="flex flex-col items-center md:flex-row md:items-center">
        <img src="/assets/shared/desktop/logo-white.svg" />
        <nav
          className="mt-10 flex flex-col gap-[31px] list-none [&>li]:{
          text-[15px] font-semibold text-water-white/70 
          } items-center md:ml-[64px] md:flex-row md:mt-0"
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link className="hover:text-water-white transition-all duration-150" to={link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </nav>
        <ul className="mt-10 flex gap-6 list-none items-center md:mt-0 md:ml-auto">
          {socials.map(({ href, Icon }) => (
            <li>
              <a href={href}>
                <Icon
                  size={26}
                  className="text-water-white hover:text-charm-pink transition-all duration-150"
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;

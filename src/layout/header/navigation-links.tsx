import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type NavigationLinksProps = React.HTMLAttributes<HTMLElement>;

const navLinks = [
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const NavigationLinks = ({ className, ...props }: NavigationLinksProps) => {
  return (
    <nav
      className={twMerge("mt-[43px] md:mt-0 lg:ml-[64px]", className)}
      {...props}
    >
      <ul className="flex flex-col gap-[32px] font-public-sans font-bold items-center [&>li]:{text-[20px] text-water-white/70 md:text-san-juan-blue/70 } md:flex-row md:gap-10 transition-all duration-150">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link className="hover:text-san-juan-blue" to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;

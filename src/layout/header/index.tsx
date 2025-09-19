import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import Container from "../container";
import MobileNavigation from "./mobile-navigation";
import NavigationLinks from "./navigation-links";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = tv({
    base: "sticky -top-[1px] z-[500] transition-all duration-300 ease-in-out",
    variants: {
      scrolled: {
        true: "bg-[#EDF3F8] pt-5 pb-3 shadow-sm",
        false: "bg-none pt-10 pb-0",
      },
    },
  });

  return (
    <div className={headerVariants({ scrolled })}>
      <Container>
        <header className="flex items-center justify-between lg:justify-start">
          <Link to="/">
            <img src="assets/shared/desktop/logo.svg" alt="Website logo" />
          </Link>

          <NavigationLinks className="hidden md:flex" />
          <Button variant="primary" className="hidden md:block lg:ml-auto">
            Schedule a demo
          </Button>

          {/* Mobile view only */}
          <MobileNavigation />
        </header>
      </Container>
    </div>
  );
};

export default Header;

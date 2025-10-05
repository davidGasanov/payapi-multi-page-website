import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import Button from "../../components/button";
import NavigationLinks from "./navigation-links";
import { useLocation } from "react-router-dom";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const route = useLocation();

  useEffect(() => {
    handleClose();
  }, [route.pathname]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const drawer = tv({
    base: "fixed top-0 right-0 h-screen w-[calc(100vw-75px)] transition-transform duration-300 bg-mirage-blue p-[24px] flex flex-col",
    variants: {
      open: {
        true: "translate-x-0",
        false: "translate-x-full",
      },
    },
  });

  return (
    <div className="block md:hidden">
      <button
        onClick={handleOpen}
        type="button"
        aria-label="navigation-menu-button"
      >
        <img src="assets/shared/mobile/menu.svg" />
      </button>

      <div className={drawer({ open })}>
        <div className="flex justify-end py-[24px] border-b-[1px] border-b-water-white/15">
          <button
            onClick={handleClose}
            type="button"
            aria-label="close-navigation-button"
          >
            <img src="assets/shared/mobile/close.svg" />
          </button>
        </div>

        <NavigationLinks />

        <Button variant="primary" className="mt-[32px]">
          Schedule a demo
        </Button>
      </div>
    </div>
  );
};

export default MobileNavigation;

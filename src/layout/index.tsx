import { RouterProvider } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { router } from "../routes";

const MainLayout = () => {
  return (
    <div className="bg-[#EDF3F8] relative min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/shared/desktop/bg-pattern-circle.svg"
        className="w-[780px] h-[780px] absolute max-w-none -top-[550px] left-1/2 -translate-x-1/2 z-0  lg:translate-x-[89px] lg:-top-[272px] transition-all duration-200 ease-in"
      />
      {/* /Background image */}
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

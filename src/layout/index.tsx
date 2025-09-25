import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import BackgroundImage from "./bg-image";

const MainLayout = () => {
  return (
    <div className="bg-[#EDF3F8] relative min-h-screen">
      <BackgroundImage />
      <Header />
      <main className="relative z-10 overflow-x-hidden overflow-y-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

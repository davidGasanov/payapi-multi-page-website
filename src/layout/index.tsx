import { RouterProvider } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { router } from "../routes";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

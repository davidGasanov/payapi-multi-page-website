import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout";
import TestPage from "../pages/test-page";
import HomePage from "../pages/home";
import PricingPage from "../pages/pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/test",
        Component: TestPage,
      },
      {
        path: "/pricing",
        Component: PricingPage,
      },
    ],
  },
]);

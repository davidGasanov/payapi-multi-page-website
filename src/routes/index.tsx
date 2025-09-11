import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import TestPage from "../pages/test-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/test",
    Component: TestPage,
  },
]);

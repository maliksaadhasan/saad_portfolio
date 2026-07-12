import { createBrowserRouter } from "react-router";
import Home from "@/app/pages/Home";
import CaseStudyDetail from "@/app/pages/CaseStudyDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudyDetail,
  },
]);

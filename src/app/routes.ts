import { createBrowserRouter } from "react-router";
import Home from "@/app/pages/Home";
import CaseStudyDetail from "@/app/pages/CaseStudyDetail";
import CaseStudies from "@/app/pages/CaseStudies";
import WorkGallery from "@/app/pages/WorkGallery";
import Blog from "@/app/pages/Blog";
import BlogPost from "@/app/pages/BlogPost";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/case-studies", Component: CaseStudies },
  { path: "/case-study/:id", Component: CaseStudyDetail },
  { path: "/gallery", Component: WorkGallery },
  { path: "/blog", Component: Blog },
  { path: "/blog/:slug", Component: BlogPost },
]);

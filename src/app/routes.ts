import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/components/RootLayout";
import Home from "@/app/pages/Home";
import CaseStudyDetail from "@/app/pages/CaseStudyDetail";
import CaseStudies from "@/app/pages/CaseStudies";
import WorkGallery from "@/app/pages/WorkGallery";
import Blog from "@/app/pages/Blog";
import BlogPost from "@/app/pages/BlogPost";
import ThankYou from "@/app/pages/ThankYou";

// Every page keeps its own URL. RootLayout is a pathless layout route: it adds
// nothing to the path, it just wraps every page with the persistent floating
// CTAs, the lead-form modal, and the analytics listeners.
export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/case-studies", Component: CaseStudies },
      { path: "/case-study/:id", Component: CaseStudyDetail },
      { path: "/gallery", Component: WorkGallery },
      { path: "/blog", Component: Blog },
      { path: "/blog/:slug", Component: BlogPost },
      { path: "/thank-you", Component: ThankYou },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/components/RootLayout";
import Home from "@/app/pages/Home";
import CaseStudyDetail from "@/app/pages/CaseStudyDetail";
import CaseStudies from "@/app/pages/CaseStudies";
import WorkGallery from "@/app/pages/WorkGallery";
import Blog from "@/app/pages/Blog";
import BlogPost from "@/app/pages/BlogPost";
import About from "@/app/pages/About";
import Services from "@/app/pages/Services";
import Process from "@/app/pages/Process";
import FAQ from "@/app/pages/FAQ";
import ThankYou from "@/app/pages/ThankYou";

// Every page keeps its own URL. RootLayout is a pathless layout route: it adds
// nothing to the path, it just wraps every page with the persistent floating
// CTAs, the lead-form modal, and the analytics listeners.
export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/services", Component: Services },
      { path: "/process", Component: Process },
      { path: "/case-studies", Component: CaseStudies },
      { path: "/case-study/:id", Component: CaseStudyDetail },
      { path: "/gallery", Component: WorkGallery },
      { path: "/blog", Component: Blog },
      { path: "/blog/:slug", Component: BlogPost },
      { path: "/faq", Component: FAQ },
      { path: "/thank-you", Component: ThankYou },
    ],
  },
]);

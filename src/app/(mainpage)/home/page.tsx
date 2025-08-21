
import Hero from "./Hero";
import CourseProgram from "../courses/CourseHighlight";
import AboutUs from "./AboutUs";
import CourseCategory from "../courses/CourseCategory";
import WelcomeText from "./WelcomeText";
import FeaturesSection from "./FeatureSection";
import SlidePage from "./SlidePage";
import NewsletterSection from "../subscription/newsletter";
import PricingSection from "../pricing/page.tsx";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-10 py-2 overflow-hidden">
      <Hero />
      <WelcomeText />
      <CourseProgram />
      <FeaturesSection />
      <CourseCategory />
      <SlidePage />
      {/* <Courses /> */}
      {/* <AboutUs /> */}
      <PricingSection />
      <NewsletterSection />
      {/* <ContactUs /> */}
      {/* <TrustedBy /> */}
    </main>
  );
}

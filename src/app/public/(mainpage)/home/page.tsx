
import Hero from "./Hero";
import CourseProgram from "../../Courses/CourseHighlight"
import AboutUs from "../../About/AboutUs";
import CourseCategory from "../../Courses/CourseCategory";
import WelcomeText from "./WelcomeText";
import FeaturesSection from "./FeatureSection";
import SlidePage from "./SlidePage";

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
      <AboutUs />
      {/* <ContactUs /> */}
      {/* <TrustedBy /> */}
    </main>
  );
}

import Image from "next/image";
import Hero from "./public/Hero";
import CourseProgram from "./public/CourseHighlight"
import Courses from "./public/Courses";
import AboutUs from "./public/AboutUs";
import ContactUs from "./public/ContactUs";
import TrustedBy from "./public/TrustedBy";
import CourseCategory from "./public/CourseCategory";
import WelcomeText from "./public/WelcomeText";
import FeaturesSection from "./public/FeatureSection";
import SlidePage from "./public/SlidePage";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-10 py-2">
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

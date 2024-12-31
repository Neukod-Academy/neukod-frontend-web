import Image from "next/image";
import Hero from "../app/components/home/Hero";
import CourseProgram from "./components/home/CourseHighlight"
import Courses from "./components/home/Courses";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import TrustedBy from "./components/home/TrustedBy";
import CourseCategory from "./components/home/CourseCategory";
import WelcomeText from "./components/home/WelcomeText";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-10 py-2">
      <Hero />
      <WelcomeText />
      <CourseProgram />
      <CourseCategory />
      <Courses />
      <AboutUs />
      <ContactUs />
      {/* <TrustedBy /> */}
    </main>
  );
}

import Image from "next/image";
import Hero from "../app/components/home/Hero"
import CourseProgram from "./components/home/CourseHighlight"
import Courses from "./components/home/Courses"
import AboutUs from "./components/home/AboutUs";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-10 py-2">
      <Hero />
      <CourseProgram />
      <Courses />
      <AboutUs />
    </main>
  );
}

import Image from "next/image";
import Hero from "../app/components/home/Hero"
import CourseProgram from "./components/home/CourseHighlight"

export default function Home() {
  return (
    <main className="flex flex-col justify-center mb-auto">
      <Hero />
      <CourseProgram />
    </main>
  );
}

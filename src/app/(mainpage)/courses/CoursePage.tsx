"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, PanelsTopLeft } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BgCourse from "../../images/course/course_banner.webp";
import BgCourse2 from "../../images/course/course_banner2.webp";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { coursePage, type CoursePage } from "../../utils/constant";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const CoursePage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray<HTMLElement>(".panel-img");
    const panelsContent = gsap.utils.toArray<HTMLElement>(".panel-content");
    gsap.to(panels, {
      scrollTrigger: {
        trigger: ".main-content",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: "30%",
    });

    gsap.to(panelsContent, {
      scrollTrigger: {
        trigger: ".main-content",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: "10%",
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetSection = document.querySelector("#course_intro");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollDown2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetSection2 = document.querySelector("#course_category");
    if (targetSection2) {
      targetSection2.scrollIntoView({ behavior: "smooth" });
    }
  };

  // if (!mounted) return null;

  return (
    <main className="flex flex-col">
      <section>
        <div className="w-full main-content relative overflow-hidden flex flex-col h-screen">
          <div className="panel-img relative w-full h-[100vh]">
            <div className="absolute inset-0 z-20 bg-black/20" />
            <Image
              src={BgCourse}
              className="absolute block top-0 left-0 w-full h-auto object-cover"
              alt="Course Page"
              placeholder="blur"
              quality={40}
              priority
            />
          </div>
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 z-40">
            <div className="absolute left-5 top-[5%] right-1/4 md:right-1/2 z-40 cursor-default panel-content">
              {/* <p className="mb-3 font-semibold md:mb-4">Empower</p> */}
              <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-blue-900">
                Unlock Your Potential with Our Expertise
              </h1>
              <p className="mb-6 md:mb-8 md:text-md">
                Partnering with us means gaining access to top-tier IT services
                tailored to your needs. Our consultancy empowers your business
                to thrive in a digital landscape.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 z-40">
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Expert Guidance
                  </h6>
                  <p>
                    Leverage our expertise to navigate complex IT challenges
                    with confidence.
                  </p>
                </div>
                <div>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    Tailored Solutions
                  </h6>
                  <p>
                    Customized strategies designed to meet your unique business
                    requirements.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col justify-center items-center gap-4 md:mt-8 z-40">
                <Link href="#course_intro">
                  <motion.button
                    title="Go"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    onClick={handleScrollDown}
                    className="stroke-3"
                  >
                    <ChevronDown className="h-10 w-10 stroke-[3] text-blue-900" />
                  </motion.button>
                </Link>
                {/* <Button title="Sign Up" variant="link" size="lg">
                  Sign Up <ChevronRight />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="course_intro">
        <div className="w-full main-content relative overflow-hidden flex flex-col h-screen">
          <motion.div
            className="relative h-[100vh]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            {/* <div className="absolute inset-0 z-20 w-full min-h-screen bg-black/20" /> */}
            <Image
              src={BgCourse2}
              className="absolute w-full h-auto min-h-screen object-cover"
              alt="w"
            />
          </motion.div>
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div className="absoulte z-40 m-[5%] right-1/4">
              <motion.h2
                className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl text-blue-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <span className="block">
                  Discover Our Impressive Achievements and Client Satisfaction
                  Metrics
                </span>
              </motion.h2>
              <motion.p
                className="mb-6 md:mb-8 md:text-md text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.4 }}
                viewport={{ once: true }}
              >
                <span>
                  Our commitment to excellence is reflected in our outstanding
                  results. With a client satisfaction rate that speaks volumes,
                  we are proud of our achievements.
                </span>
              </motion.p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 text-white">
                <div>
                  <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                    95%
                  </h3>
                  <p>Client satisfaction rate based on recent surveys.</p>
                </div>
                <div>
                  <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                    100%
                  </h3>
                  <p>Projects delivered on time and within budget.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col justify-center items-center gap-4 md:mt-8 z-40">
                <Link href="#course_intro">
                  <motion.button
                    title="Go"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    onClick={handleScrollDown2}
                    className="stroke-3"
                  >
                    <ChevronDown className="h-10 w-10 stroke-[3] text-blue-900" />
                  </motion.button>
                </Link>
                {/* <Button title="Sign Up" variant="link" size="lg">
                  Sign Up <ChevronRight />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="course_category" className="container mx-auto px-4 py-8">
        <motion.section
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // animate="visible"
          // variants={fadeIn}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Courses</h1>
          <p className="text-xl text-muted-foreground">
            Discover a wide range of courses designed to enhance your skills and
            knowledge in various fields. From programming to design, we have
            something for everyone.
          </p>
        </motion.section>

        {/* Categories and Recommendations Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // animate="visible"
          variants={staggerChildren}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Course Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {coursePage.map((course: CoursePage, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileTap={{ scale: 0.9 }}
              >
                <Card className="h-full transition-transform duration-300 hover:scale-105 rounded-lg">
                  <CardHeader>
                    <div className="flex items-center justify-center px-2 py-3">
                      <Image
                        src={course.image}
                        width={320}
                        height={300}
                        alt={`Course image ${course.level}`}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <CardTitle>{course.level} Courses</CardTitle>
                    <CardDescription>
                      <span className="font-bold">
                        {course.level.toUpperCase()},
                      </span>{" "}
                      {course.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {course.list.map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">
                      View {course.level} Courses
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Courses Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Explore Our Courses
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3, 4, 5, 6].map((course) => (
              <motion.div
                key={course}
                variants={fadeIn}
                whileTap={{ scale: 0.9 }}
              >
                <Card className="h-full transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle>Course Title {course}</CardTitle>
                    <CardDescription>
                      Brief description of the course
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Course details and highlights...</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="hover:scale-105 transition-all duration-200 bg-redFlag hover:bg-redFlag/60">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className="hover:scale-105 transition-all duration-200 bg-redFlag hover:bg-redFlag/60"
            >
              Explore All Courses
            </Button>
          </motion.div>
        </motion.section>
      </section>
    </main>
  );
};
export default CoursePage;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import {
  motion,
  useInView,
  useSpring,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CoursePage {
  image: string;
  level: string;
  desc: string;
  list: string[];
}

const coursePage: CoursePage[] = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    level: "Beginner",
    desc: "Start your journey with fundamental skills tailored for newcomers.",
    list: [
      "Introduction to Coding",
      "Basic Design Principles",
      "Logic Building",
      "Project Basics",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    level: "Intermediate",
    desc: "Deepen your knowledge and tackle more complex challenges.",
    list: [
      "Advanced Structures",
      "Database Management",
      "UI/UX Deep Dive",
      "Team Collaboration",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    level: "Expert",
    desc: "Master the craft with industry-standard practices and leadership skills.",
    list: [
      "System Architecture",
      "Cloud Computing",
      "AI Integration",
      "Agile Leadership",
    ],
  },
];

// Placeholder images
const BgCourse =
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1920&auto=format&fit=crop";
const BgCourse2 =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop";

// --- Custom Components & Animations ---

// Komponen untuk animasi angka (Counter)
const AnimatedNumber = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

// Komponen Teks Judul Modern
const ModernTitle = () => {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg"
      >
        Elevate Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
          Future Skills
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed drop-shadow-md"
      >
        Join thousands of professionals who have advanced their careers through
        our world-class training programs.
      </motion.p>
    </div>
  );
};

// Variants untuk animasi
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const CoursePage = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  // Parallax Effect using Framer Motion instead of GSAP
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <main
      ref={containerRef}
      className="flex flex-col w-full overflow-x-hidden bg-slate-50"
    >
      {/* SECTION 1: HERO PARALLAX */}
      <section className="relative h-screen w-full overflow-hidden main-content">
        {/* Background Image Wrapper */}
        <motion.div
          style={{ y, scale }}
          className="panel-img absolute inset-0 w-full h-[120vh] -top-[10vh]"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
          <img
            src={BgCourse}
            className="object-cover w-full h-full"
            alt="Course Hero Background"
          />
        </motion.div>

        {/* Content Wrapper */}
        <div className="relative z-30 flex flex-col justify-center h-full px-6 md:px-12 lg:px-20 container mx-auto">
          <div className="max-w-3xl">
            {/* Glassmorphism Card for Text */}
            <div className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              <ModernTitle />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={handleScrollTo("#course_category")}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-red-900/20 transition-all hover:scale-105"
                >
                  Get Started
                </Button>
                <Button
                  onClick={handleScrollTo("#course_intro")}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white transition-all"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <button
              onClick={handleScrollTo("#course_intro")}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <span className="text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                Scroll
              </span>
              <ChevronDown className="h-8 w-8 text-white/70 group-hover:text-white transition-colors" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STATS & INTRO */}
      <section
        id="course_intro"
        className="relative w-full py-24 bg-slate-900 text-white overflow-hidden"
      >
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={BgCourse2}
                alt="Achievements"
                className="object-cover w-full h-auto hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white text-slate-900 p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Star className="text-yellow-500 fill-yellow-500 h-5 w-5" />
                <Star className="text-yellow-500 fill-yellow-500 h-5 w-5" />
                <Star className="text-yellow-500 fill-yellow-500 h-5 w-5" />
                <Star className="text-yellow-500 fill-yellow-500 h-5 w-5" />
                <Star className="text-yellow-500 fill-yellow-500 h-5 w-5" />
              </div>
              <p className="font-bold text-sm">
                "The best training I've ever attended!"
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Text & Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-2">
                Why Choose Neukod
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Achievements that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Speak Volumes
                </span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our commitment to excellence is reflected in outstanding
                results. With proven methodologies and expert instructors, we
                ensure that each participant reaches their maximum potential.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div className="space-y-1">
                <h4 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                  <AnimatedNumber value={95} suffix="%" />
                </h4>
                <p className="text-sm text-slate-400">
                  Student Satisfaction Level
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                  <AnimatedNumber value={100} suffix="%" />
                </h4>
                <p className="text-sm text-slate-400">
                  Satisfied with the learning method
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={handleScrollTo("#course_category")}
                variant="link"
                className="text-blue-400 p-0 h-auto text-lg hover:text-blue-300 group"
              >
                View Class{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COURSE CATEGORIES (MODERN CARDS) */}
      <section id="course_category" className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Explore Our <span className="text-blue-900">Learning Path</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Discover a variety of courses designed to improve your skills,
              from beginner to advanced professional levels.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {coursePage.map((course: CoursePage, index: number) => (
              <motion.div key={index} variants={fadeIn} className="h-full">
                <Card className="h-full border-0 shadow-lg bg-white rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col">
                  {/* Card Image with Zoom Effect */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 z-10 transition-colors duration-300" />
                    <img
                      src={course.image}
                      alt={`Course ${course.level}`}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {course.level}
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                      {course.level} Class
                    </CardTitle>
                    <CardDescription className="text-slate-500 line-clamp-2">
                      {course.desc}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="w-full h-px bg-slate-100 my-4" />
                    <ul className="space-y-3">
                      {course.list
                        .slice(0, 4)
                        .map((item: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-slate-600"
                          >
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4 pb-6 px-6 bg-slate-50/50">
                    <Button className="w-full bg-white text-blue-900 border-2 border-blue-900/10 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-300 font-semibold rounded-xl h-12">
                      View Syllabus
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-800 text-white rounded-full px-10 py-6 text-lg font-bold shadow-xl hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Full Course
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CoursePage;

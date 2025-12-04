"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Award, Briefcase, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerFrontend from "@/app/images/class/frontend/frontend_banner.webp";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FrontendSection from "./component/SectionFrontend";

const App = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const goalsRef = useRef(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window === "undefined" || !wrapperRef.current) return;
    const ctx = gsap.context(() => {
      // HERO
      gsap.from(".hero-text-element", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".hero-grid-item", {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.8,
      });

      gsap.to(".floating-shape", {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // INTRO SECTION (fixed)
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // FEATURES
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );

      // GOALS HEADER
      gsap.fromTo(
        ".goal-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: goalsRef.current,
            start: "top 75%",
          },
        }
      );
    }, wrapperRef); // <--- IMPORTANT: PARENT WRAPPER

    return () => ctx.revert();
  }, []);

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetSection = document.querySelector("#intro-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const FrontendLanguages = [
    {
      name: "HTML",
      href: "#",
      description:
        "The foundation of web development, structuring content and creating semantic markup.",
      icon: "🏗️",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      level: "Beginner",
    },
    {
      name: "CSS",
      href: "#",
      description:
        "Style and design web pages with modern layouts, animations, and responsive design.",
      icon: "🎨",
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
      level: "Beginner",
    },
    {
      name: "JavaScript",
      href: "#",
      description:
        "Dynamic programming language that brings interactivity and functionality to web pages.",
      icon: "⚡",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
      level: "Intermediate",
    },
    {
      name: "React JS",
      href: "#",
      description:
        "Popular library for building user interfaces with component-based architecture.",
      icon: "⚛️",
      color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
      level: "Intermediate",
    },
  ];

  return (
    <main
      ref={wrapperRef}
      className="text-gray-800 bg-white overflow-x-hidden selection:bg-purple-100 selection:text-purple-600"
    >
      <section
        ref={heroRef}
        className="pt-5 pb-10 px-6 md:px-12 lg:px-24 min-h-screen flex lg:flex-row items-center gap-12 bg-gradient-to-b from-purple-50/50 to-white"
      >
        <div className="absolute top-0 right-0 w-full h-[90vh]">
          <Image
            fill
            src={BannerFrontend}
            alt="Frontend Dev Path"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* LEFT */}
        <div className="flex-1 space-y-8 relative z-10">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

          <h1 className="hero-text-element text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] text-white">
            Learning the path of a <br />
            <span className="relative inline-block text-blue-400">
              Frontend Dev
              <svg
                className="absolute -bottom-2 right-0 w-full h-3 text-[#525FE1]"
                viewBox="0 0 150 9"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full ml-2 mb-2 floating-shape"></span>
          </h1>

          <p className="hero-text-element text-gray-500 text-lg max-w-md leading-relaxed">
            Expand Your Knowledge And Skills Through Our Dynamic Online Learning
            Platform.
          </p>

          <div className="hero-text-element flex flex-wrap items-center gap-4">
            <Button
              onClick={handleScrollDown}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-xl mx-auto hidden md:block">
          {/* Grid Container: Clean 3x3 layout with gap */}
          <div className="grid grid-cols-3 gap-4 auto-rows-[1fr]">
            {/* --- ROW 1 --- */}
            {/* 1. Top Left Photo */}
            <div className="hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <Image
                width={400}
                height={400}
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Top Middle (Blue) - Fan Blade UP (Rounded Top-Right) */}
            <div className="hero-grid-item aspect-square bg-[#525FE1] rounded-tr-[80px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl flex items-center justify-center shadow-sm"></div>

            {/* 3. Top Right Photo */}
            <div className="hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <Image
                width={400}
                height={400}
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* --- ROW 2 --- */}
            {/* 4. Middle Left (Purple) - Fan Blade LEFT (Rounded Top-Left) */}
            <div className="hero-grid-item aspect-square bg-[#8B5CF6] rounded-tl-[80px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-sm"></div>

            {/* 5. CENTER Photo (Circle) */}
            <div className="hero-grid-item aspect-square rounded-full border-4 border-white shadow-xl overflow-hidden z-20 scale-105">
              <Image
                width={400}
                height={400}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                alt="Main Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 6. Middle Right (Red) - Fan Blade RIGHT (Rounded Bottom-Right) */}
            <div className="hero-grid-item aspect-square bg-[#FF4F4F] rounded-br-[80px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-sm"></div>

            {/* --- ROW 3 --- */}
            {/* 7. Bottom Left Photo */}
            <div className="hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <Image
                width={400}
                height={400}
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 8. Bottom Middle (Yellow) - Fan Blade DOWN (Rounded Bottom-Left) */}
            <div className="hero-grid-item aspect-square bg-[#FDC500] rounded-bl-[80px] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center shadow-sm">
            </div>

            {/* 9. Bottom Right Photo */}
            <div className="hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <Image
                width={400}
                height={400}
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Frontend Section */}
      <section
        ref={introRef}
        id="intro-section"
        className="intro-section py-20 bg-card/50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              What is{" "}
              <span className="text-blue-900">Frontend Development</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="p-5">
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    <span className="text-blue-900 font-semibold">
                      Frontend development
                    </span>{" "}
                    is the server-side of web development that focuses on
                    databases, scripting, and website architecture. It's the
                    behind-the-scenes functionality that users don't see but is
                    essential for any web application.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="text-blue-900 font-semibold">
                      Frontend developer
                    </span>{" "}
                    work with servers, databases, APIs, and application logic to
                    ensure everything on the client-side works smoothly.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex items-center justify-center">
                <CardContent>
                  <h1 className="text-2xl text-blue-900 font-bold py-8">
                    About Frontend
                  </h1>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-1 bg-primary rounded-full"></div>
                      <span className="text-lg">
                        Server-side logic and architecture
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-lg">
                        Database design and management
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-lg">
                        API development and integration
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-lg">
                        Security and authentication
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- GOALS / BENEFITS SECTION --- */}
      <section ref={goalsRef} className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16 goal-header">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achieve Your Goals With{" "}
            <span className="text-blue-800">Neukod</span>
          </h2>
          <p className="text-gray-500">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout.
          </p>
        </div>

        <div className="goal-cards-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="goal-card bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="text-[#525FE1]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Learn The Latest Skills
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Learn From Us With The Best Skills. There Is No Substitute For
              Skill To Fulfill Yourself.
            </p>
            <div className="w-8 h-1 bg-purple-200 rounded-full"></div>
          </div>

          {/* Card 2 */}
          <div className="goal-card bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="text-[#FDC500]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Get Ready For A Career
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              You Can Build Your Career By Taking Courses From Our Master
              Trainers Here.
            </p>
            <div className="w-8 h-1 bg-yellow-200 rounded-full"></div>
          </div>

          {/* Card 3 */}
          <div className="goal-card bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <Award className="text-[#FF4F4F]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Earn A Certificate
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              At The End Of The Course You Get A Certificate From Eduract, Which
              Is Indicative Of Your Skills.
            </p>
            <div className="w-8 h-1 bg-red-200 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full p-5">
        <FrontendSection />
      </section>

      <section
        ref={categoriesRef}
        id="frontend-categories"
        className="frontend-categories-section py-20 bg-card/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Frontend <span className="text-blue-800">Programming Path</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Master server-side development with these powerful Frontend
              technologies
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FrontendLanguages.map((lang, index) => (
                <Card
                  key={lang.name}
                  className="frontend-category-card hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader className="text-center items-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {lang.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{lang.name}</CardTitle>

                    <Badge
                      variant="secondary"
                      className={`${lang.color} w-fit text-center`}
                    >
                      {lang.level}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-center leading-relaxed">
                      {lang.description}
                    </CardDescription>
                    <Link href={lang.href}>
                      <Button
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                        variant="outline"
                      >
                        Start {lang.name} Course
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="py-12 bg-gray-50 border-t text-center">
        <p className="text-gray-400 text-sm">
          © 2023 Eduract. All rights reserved.
        </p>
      </footer> */}
    </main>
  );
};

export default App;

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BackendBanner from "@/app/images/banner_neukod _crop.webp";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackendCoursePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const classIntroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-button",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.7)",
        }
      );

      // ScrollTrigger animations for sections
      gsap.fromTo(
        ".intro-section",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".intro-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".class-intro-section",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".class-intro-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".backend-category-card",
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".backend-categories-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetSection = document.querySelector("#backend-categories");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const backendLanguages = [
    {
      name: "Go",
      href: "/class/backend/go",
      description:
        "Fast, statically typed language perfect for microservices and cloud applications.",
      icon: "🚀",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      level: "Intermediate",
    },
    {
      name: "Python",
      href: "/class/backend/python",
      description:
        "Versatile language ideal for web development, data science, and automation.",
      icon: "🐍",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      level: "Beginner",
    },
    {
      name: "Rust",
      href: "/python",
      description:
        "Systems programming language focused on safety, speed, and concurrency.",
      icon: "⚡",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      level: "Advanced",
    },
    {
      name: "Java",
      href: "/python",
      description:
        "Enterprise-grade language for building scalable, robust backend systems.",
      icon: "☕",
      color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
      level: "Intermediate",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5"
      >
        <div className="absolute top-0 right-0 w-full h-[90vh]">
          <Image
            alt="Backend Banner"
            src={BackendBanner}
            fill
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative mx-auto text-center">
          <div className="max-w-4xl mx-auto relative">
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white">
              Master <span className="text-blue-900">Backend Development</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl mb-8 text-white leading-relaxed">
              Build powerful, scalable server-side applications with
              industry-leading technologies. From APIs to databases, learn the
              skills that power the modern web.
            </p>
            <Link href="#backend-categories">
              <Button
                onClick={handleScrollDown}
                size="lg"
                className="bg-blue-600 text-lg px-8 py-6"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is Backend Section */}
      <section ref={introRef} className="intro-section py-10 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              What is <span className="text-blue-900">Backend Development</span>
              ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="p-5">
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    <span className="text-blue-900 font-semibold">
                      Backend development
                    </span>{" "}
                    is the server-side of web development that focuses on
                    databases, scripting, and website architecture. It's the
                    behind-the-scenes functionality that users don't see but is
                    essential for any web application.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="text-blue-900 font-semibold">
                      Backend developer
                    </span>{" "}
                    work with servers, databases, APIs, and application logic to
                    ensure everything on the client-side works smoothly.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex items-center justify-center">
                <CardContent>
                  <h1 className="text-2xl text-blue-900 font-bold py-8">
                    About Backend
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

      {/* Backend Class Introduction */}
      <section ref={classIntroRef} className="class-intro-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our <span className="text-blue-800">Backend Mastery</span> Program
            </h2>
            <Card className="p-8">
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our comprehensive backend development course is designed to
                  take you from beginner to professional. You'll learn
                  industry-standard practices, work with real-world projects,
                  and master the technologies that power today's most successful
                  applications.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      12
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Weeks Duration
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      4
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Programming Languages
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      20+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Real Projects
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Backend Programming Language Categories */}
      <section
        ref={categoriesRef}
        id="backend-categories"
        className="backend-categories-section py-20 bg-card/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Backend <span className="text-blue-800">Programming Path</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Master server-side development with these powerful backend
              technologies
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {backendLanguages.map((lang, index) => (
                <Card
                  key={lang.name}
                  className="backend-category-card hover:shadow-lg transition-all duration-300 group"
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

      {/* <section className="frontend-categories-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              <span className="text-accent">Frontend</span> Programming Path
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Create stunning user interfaces with these essential frontend technologies
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frontendLanguages.map((lang, index) => (
                <Card
                  key={lang.name}
                  className="frontend-category-card hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {lang.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{lang.name}</CardTitle>
                    <Badge variant="secondary" className={lang.color}>
                      {lang.level}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-center leading-relaxed">{lang.description}</CardDescription>
                    <Button
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 bg-transparent"
                      variant="outline"
                    >
                      Start {lang.name} Course
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

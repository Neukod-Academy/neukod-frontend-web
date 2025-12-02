"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Users, Calendar, CreditCard, UserCheck } from "lucide-react";
import BannerClass from "../../images/slide/slide_banner3.webp";
import InstructorImg from "../../images/slide/slide_banner4.webp";
import StudentImg from "../../images/course/beginner.jpg";
import TeacherImg from "../../images/class/image.png";
import Teacher1 from "../../images/class/teacherthink.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ClassroomPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const classIntroRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<
    "backend" | "frontend"
  >("backend");
  const [selectedTab, setSelectedTab] = useState<"programs" | "competitions">(
    "programs"
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax animation
      gsap.to(bannerRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Image parallax
      gsap.to(imageRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating elements animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: -20,
            rotation: index % 2 === 0 ? 5 : -5,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      // Smooth floating animation for User Experience Class element with hover effects
      const userExperienceElement = document.querySelector(
        ".user-experience-class"
      );
      if (userExperienceElement) {
        // Create the floating animation
        const floatingTween = gsap.to(userExperienceElement, {
          y: -15,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Add hover event listeners
        userExperienceElement.addEventListener("mouseenter", () => {
          floatingTween.pause();
          gsap.to(userExperienceElement, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        userExperienceElement.addEventListener("mouseleave", () => {
          floatingTween.resume();
          gsap.to(userExperienceElement, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Initial animations
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".floating-element", {
        scale: 1,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: "back.out(1.7)",
      });
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
        ".category-card",
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".categories-section",
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
  const backendLanguages = [
    {
      name: "Go",
      description:
        "Fast, statically typed language perfect for microservices and cloud applications.",
      icon: "🚀",
      color: "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300",
      level: "Intermediate",
    },
    {
      name: "Python",
      description:
        "Versatile language ideal for web development, data science, and automation.",
      icon: "🐍",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      level: "Beginner",
    },
    {
      name: "Rust",
      description:
        "Systems programming language focused on safety, speed, and concurrency.",
      icon: "⚡",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      level: "Advanced",
    },
    {
      name: "Java",
      description:
        "Enterprise-grade language for building scalable, robust backend systems.",
      icon: "☕",
      color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
      level: "Intermediate",
    },
  ];

  const frontendLanguages = [
    {
      name: "HTML",
      description:
        "The foundation of web development, structuring content and creating semantic markup.",
      icon: "🏗️",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      level: "Beginner",
    },
    {
      name: "CSS",
      description:
        "Style and design web pages with modern layouts, animations, and responsive design.",
      icon: "🎨",
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
      level: "Beginner",
    },
    {
      name: "JavaScript",
      description:
        "Dynamic programming language that brings interactivity and functionality to web pages.",
      icon: "⚡",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
      level: "Intermediate",
    },
    {
      name: "React JS",
      description:
        "Popular library for building user interfaces with component-based architecture.",
      icon: "⚛️",
      color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
      level: "Intermediate",
    },
  ];

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <main>
      <div className="min-h-screen relative">
        {/* Hero Section */}
        <div ref={heroRef} className="relative pt-[100px] pb-20">
          <div
            ref={bannerRef}
            style={{
              clipPath: "ellipse(180% 100% at 50% 0%)",
            }}
            className="absolute w-full min-h-screen  bg-gradient-to-r from-blue-200 via-rose-100 to-sky-400"
          ></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 gap-12 items-center min-h-[600px]">
              {/* Content */}
              <div className="hero-content space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Studying <span className="text-blue-600">Online</span> is
                    now
                    <br />
                    much <span className="text-blue-600">easier</span>
                  </h1>
                </div>

                <p className="text-lg text-gray-600 max-w-md">
                  Neukod is an interesting platform that will teach you in more
                  an interactive way
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                    Join for free
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 px-8 py-3 text-lg"
                  >
                    <Play className="w-5 h-5" />
                    Watch how it works
                  </Button>
                </div>
              </div>

              {/* Hero Image with Floating Elements */}
              <div className="relative">
                <div className="relative z-0">
                  <Image
                    ref={imageRef}
                    src={BannerClass}
                    alt="Student with books"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-xl"
                  />
                </div>

                {/* Floating Elements */}
                <div
                  ref={addToRefs}
                  className="floating-element absolute top-10 right-10 bg-white rounded-lg shadow-lg p-4 border-l-4 border-cyan-500"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-500" />
                    <div>
                      <div className="font-bold text-gray-900">250k</div>
                      <div className="text-sm text-gray-500">
                        Assisted Student
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  ref={addToRefs}
                  className="floating-element user-experience-class absolute bg-sky-100 bottom-32 right-0 rounded-lg shadow-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        User Experience Class
                      </div>
                      <div className="text-sm text-gray-500">
                        Today at 12:00 PM
                      </div>
                      <Button
                        size="sm"
                        className="mt-2 bg-pink-500 hover:bg-pink-600 text-white"
                      >
                        Join Now
                      </Button>
                    </div>
                  </div>
                </div>

                <div
                  ref={addToRefs}
                  className="floating-element absolute bottom-10 -left-5 bg-pink-500 text-white rounded-lg shadow-lg p-4"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">🎉</div>
                    <div>
                      <div className="font-bold">Congratulations</div>
                      <div className="text-sm opacity-90">
                        Your admission completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-lg text-gray-600 mb-8">
              Trusted by 5,000+ Companies Worldwide
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Alibaba</div>
              <div className="text-2xl font-bold text-gray-400">NETFLIX</div>
              <div className="text-2xl font-bold text-gray-400">AWS</div>
              <div className="text-2xl font-bold text-gray-400">amazon</div>
              <div className="text-2xl font-bold text-gray-400">Facebook</div>
              <div className="text-2xl font-bold text-gray-400">Google Dev</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                All-In-One{" "}
                <span className="text-blue-900">Cloud Software.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Neukod is one powerful online software suite that combines all
                the tools needed to run a successful school or office.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Online Billing,
                  <br />
                  Invoicing, & Contracts
                </h3>
                <p className="text-gray-600">
                  Simple and secure control of your organization's financial and
                  legal transactions. Send customized invoices and contracts
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Easy Scheduling &<br />
                  Attendance Tracking
                </h3>
                <p className="text-gray-600">
                  Schedule and reserve classrooms at one campus or multiple
                  campuses. Keep detailed records of student attendance
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Customer Tracking
                </h3>
                <p className="text-gray-600">
                  Automate and track emails to individuals or groups. Neukod
                  built-in system helps organize your organization
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is <span className="text-blue-900">Neukod?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Neukod is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* For Instructors Card */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={InstructorImg}
                  alt="Instructor teaching"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">FOR INSTRUCTORS</h3>
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                    >
                      Start a class today
                    </Button>
                  </div>
                </div>
              </div>

              {/* For Students Card */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={StudentImg}
                  alt="Student at computer"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">FOR STUDENTS</h3>
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                    >
                      Enter access code
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Classroom Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative z-0">
                  <div className="absolute -top-6 -left-8 w-[70px] h-[70px] bg-orange-400 rounded-full shadow-[rgba(233, 213, 255,50)_0px_0px_20px_2px]"></div>
                  <div className="absolute top-20 left-3/4 w-[100px] h-[100px] bg-sky-400 rounded-full shadow-[rgba(233, 213, 255,50)_0px_0px_20px_2px]"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Everything you can do in a physical classroom,{" "}
                    <span className="text-blue-900">
                      you can do with Neukod
                    </span>
                  </h3>

                  {/* <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
                <span className="font-semibold">Everything you can do in a physical classroom, </span>
                <span className="font-bold">you can do with Neukod</span>
              </div> */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Neukod school management software helps traditional and
                    online schools manage scheduling, attendance, payments and
                    virtual classrooms all in one secure cloud-based system.
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-blue-900 p-0 font-semibold"
                >
                  Learn more →
                </Button>
              </div>
              <div className="relative">
                <Image
                  src={Teacher1}
                  alt="Modern classroom"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Backend Class Introduction */}
        <section ref={classIntroRef} className="class-intro-section py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Our <span className="text-blue-900">Mastery</span> Program
              </h2>
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our comprehensive backend development course is designed to
                    take you from beginner to professional. You'll learn
                    industry-standard practices, work with real-world projects,
                    and master the technologies that power today's most
                    successful applications.
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

        {/* <section
          ref={categoriesRef}
          className="categories-section py-20 bg-card/30"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="flex bg-muted rounded-full p-1">
                  <button
                    onClick={() => setSelectedCategory("backend")}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === "backend"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Backend
                  </button>
                  <button
                    onClick={() => setSelectedCategory("frontend")}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === "frontend"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Frontend
                  </button>
                </div>
              </div>
              <div className="flex justify-center mb-12">
                <div className="flex gap-8">
                  <button
                    onClick={() => setSelectedTab("programs")}
                    className={`pb-2 font-semibold transition-all duration-300 ${
                      selectedTab === "programs"
                        ? "text-foreground border-b-2 border-blue-600"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Programs
                  </button>
                  <button
                    onClick={() => setSelectedTab("competitions")}
                    className={`pb-2 font-semibold transition-all duration-300 ${
                      selectedTab === "competitions"
                        ? "text-foreground border-b-2 border-blue-600"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Competitions
                  </button>
                </div>
              </div>
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold mb-4">
                  {selectedCategory === "backend"
                    ? "Backend Development"
                    : "Frontend Development"}
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(selectedCategory === "backend"
                  ? backendLanguages
                  : frontendLanguages
                ).map((lang, index) => (
                  <Card
                    key={lang.name}
                    className="category-card hover:shadow-lg transition-all duration-300 group bg-white dark:bg-card border border-border/50"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {lang.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {lang.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-center text-sm text-muted-foreground leading-relaxed mb-4">
                        {lang.description}
                      </CardDescription>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                        size="sm"
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

        {/* Our Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-900">Features</span>
              </h2>
              <p className="text-lg text-gray-600">
                This very extraordinary feature, can make learning activities
                more efficient
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <div className="relative z-50">
                  <Image
                    src={InstructorImg}
                    alt="User interface design"
                    className="w-full h-auto rounded-2xl z-90"
                  />
                </div>
                {/* Decorative elements */}
                <div className="z-0">
                  <div className="absolute inset-0 -top-4 -left-4 w-[200px] h-[200px] bg-green-400 rounded-2xl shadow-[rgba(187,247,208,50)_0px_0px_20px_2px]" />
                  <div className="absolute top-20 -right-4 w-[400px] h-[400px] bg-blue-400 rounded-2xl shadow-[rgba(191,219,254,50)_0px_0px_20px_2px]" />
                  <div className="absolute -bottom-4 -left-5 w-[100px] h-[100px] bg-orange-400 rounded-2xl shadow-[rgba(253,230,138,50)_0px_0px_20px_2px]" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  A <span className="text-blue-900">user interface</span>{" "}
                  designed
                  <br />
                  for the classroom
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    </div>
                    <p className="text-gray-600">
                      Teachers don't get lost in the grid view and have a
                      dedicated Podium space.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-blue-900 rounded"></div>
                    </div>
                    <p className="text-gray-600">
                      TA's and presenters can be moved to the front of the
                      class.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    </div>
                    <p className="text-gray-600">
                      Teachers can easily see all students and class data at one
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-blue-900">Tools</span> For Teachers
                  <br />
                  And Learners
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Class has a dynamic set of teaching tools built to be deployed
                  and used during class. Teachers can handout assignments in
                  real-time for students to complete and submit.
                </p>
                <Button
                  variant="link"
                  className="text-blue-900 p-0 font-semibold"
                >
                  See more features →
                </Button>
              </div>

              <div className="relative">
                <Image
                  src={TeacherImg}
                  alt="Teacher with educational tools"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
                {/* Decorative elements */}
                {/* <div className="absolute top-4 -right-4 w-[200px] h-[200px] bg-green-400 rounded-full shadow-[rgba(187, 247, 208,50)_0px_0px_20px_2px]"></div>
                <div className="absolute bottom-10 -left-4 w-[200px] h-[200px] bg-blue-400 rounded-full shadow-[rgba(187, 247, 208,50)_0px_0px_20px_2px]"></div>
                <div className="absolute top-1/2 -right-2 w-[50px] h-[50px] bg-orange-400 rounded-full shadow-[rgba(253, 230, 138,50)_0px_0px_20px_2px]"></div>
                <div className="absolute bottom-4 -left-12 w-[50px] h-[50px] bg-purple-400 rounded-full shadow-[rgba(233, 213, 255,50)_0px_0px_20px_2px]"></div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Users, Calendar, CreditCard, UserCheck } from "lucide-react";
import BannerClass from "../../images/slide/slide_banner3.webp";
import InstructorImg from "../../images/slide/slide_banner4.webp";
import StudentImg from "../../images/course/beginner.jpg";
import TeacherImg from "../../images/class/image.png"
import Teacher1 from "../../images/class/teacherthink.png"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ClassroomPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

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
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <main>
      <div className="min-h-screen relative bg-gradient-to-r from-indigo-100 via-rose-50 to-sky-100">
        {/* Header */}
        {/* <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Skillline</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Careers
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Login
              </a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Sign Up</Button>
            </nav>
          </div>
        </div>
      </header> */}

        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-20 pb-16 overflow-hidden">
          <div
            ref={bannerRef}
            className="absolute w-full min-h-screen bg-gradient-to-r from-orange-100 via-pink-50 to-blue-100 rounded-b-[50%]"
          ></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
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
                  Skillline is an interesting platform that will teach you in
                  more an interactive way
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
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
                  className="floating-element absolute bottom-10 -left-5 bg-orange-500 text-white rounded-lg shadow-lg p-4"
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
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-lg text-gray-600 mb-8">
              Trusted by 5,000+ Companies Worldwide
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Google</div>
              <div className="text-2xl font-bold text-gray-400">NETFLIX</div>
              <div className="text-2xl font-bold text-gray-400">airbnb</div>
              <div className="text-2xl font-bold text-gray-400">amazon</div>
              <div className="text-2xl font-bold text-gray-400">facebook</div>
              <div className="text-2xl font-bold text-gray-400">Grab</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                All-In-One{" "}
                <span className="text-orange-500">Cloud Software.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Skillline is one powerful online software suite that combines
                all the tools needed to run a successful school or office.
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
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  Automate and track emails to individuals or groups.
                  Skillline's built-in system helps organize your organization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Skillline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is <span className="text-orange-500">Skillline?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Skillline is a platform that allows educators to create online
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
                  <span className="text-orange-500">
                    you can do with Skillline
                  </span>
                </h3>
                
                {/* <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
                <span className="font-semibold">Everything you can do in a physical classroom, </span>
                <span className="font-bold">you can do with Skillline</span>
              </div> */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Skillline's school management software helps traditional and
                  online schools manage scheduling, attendance, payments and
                  virtual classrooms all in one secure cloud-based system.
                </p>
                </div>
                <Button
                  variant="link"
                  className="text-orange-500 p-0 font-semibold"
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

        {/* Our Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-orange-500">Features</span>
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
                  A <span className="text-orange-500">user interface</span>{" "}
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
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
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
                  <span className="text-orange-500">Tools</span> For Teachers
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
                  className="text-orange-500 p-0 font-semibold"
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

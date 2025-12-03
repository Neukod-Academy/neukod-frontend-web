"use client";
import React, { useEffect, useRef } from "react";
import {
  Play,
  Video,
  Users,
  Monitor,
  Award,
  Briefcase,
  Zap,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const goalsRef = useRef(null);

  useEffect(() => {
    // GSAP CONTEXT (agar tidak error saat unmount)
    const ctx = gsap.context(() => {
      /* -----------------------------
         HERO SECTION (ON LOAD)
      ------------------------------ */

      // gsap.from("nav", {
      //   y: -50,
      //   opacity: 0,
      //   duration: 1,
      //   ease: "power3.out",
      // });

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

      /* -----------------------------
         FEATURES SECTION (SCROLL)
      ------------------------------ */

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

      /* -----------------------------
         GOALS SECTION (SCROLL)
      ------------------------------ */

      gsap.fromTo(
        ".goal-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: goalsRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".goal-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".goal-cards-container",
            start: "top 80%",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert(); // cleanup GSAP
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden selection:bg-purple-100 selection:text-purple-600">
      {/* ============ NAVBAR ============ */}
      {/* <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold tracking-tight text-gray-900">Eduract</div>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          <a href="#" className="text-gray-900 hover:text-purple-600 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Class</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-purple-600 transition-colors">About Us</a>
        </div>

        <button className="bg-[#525FE1] hover:bg-[#404bc2] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-200">
          Sign Up
        </button>
      </nav> */}

      {/* ==========================================
          HERO SECTION (GRID + TEXT + ANIMATIONS)
      =========================================== */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-b from-purple-50/50 to-white"
      >
        {/* LEFT */}
        <div className="flex-1 space-y-8 relative z-10">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

          <h1 className="hero-text-element text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] text-gray-900">
            Learn Virtually <br />
            <span className="relative inline-block">
              With Us!
              <svg
                className="absolute -bottom-2 right-0 w-full h-3 text-[#525FE1]"
                viewBox="0 0 100 10"
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
            <button className="bg-[#525FE1] hover:bg-[#404bc2] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-purple-200 transition-all hover:-translate-y-1">
              Get Started
            </button>
            <button className="group flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-all">
              <div className="w-10 h-10 bg-[#FDC500] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <Play size={16} fill="currentColor" />
              </div>
              Play Video
            </button>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-xl mx-auto">
          {/* Grid Container: Clean 3x3 layout with gap */}
          <div className="grid grid-cols-3 gap-4 auto-rows-[1fr]">
            {/* --- ROW 1 --- */}
            {/* 1. Top Left Photo */}
            <div className="hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Top Middle (Blue) - Fan Blade UP (Rounded Top-Right) */}
            <div className="hero-grid-item aspect-square bg-[#525FE1] rounded-tr-[80px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl flex items-center justify-center shadow-sm">
              <div className="w-8 h-8 border-4 border-white/30 rounded-full"></div>
            </div>

            {/* 3. Top Right Photo */}
            <div className="hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <img
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
              <img
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
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 8. Bottom Middle (Yellow) - Fan Blade DOWN (Rounded Bottom-Left) */}
            <div className="hero-grid-item aspect-square bg-[#FDC500] rounded-bl-[80px] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center shadow-sm">
              <div className="w-full h-full flex items-center justify-center text-white/40">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
            </div>

            {/* 9. Bottom Right Photo */}
            <div className="hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES STRIP --- */}
      <section
        ref={featuresRef}
        className="py-16 px-6 md:px-12 lg:px-24 bg-[#F8F9FC]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card flex items-start gap-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-shadow cursor-default group">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-[#525FE1] group-hover:scale-110 transition-transform">
              <Video size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Audio & Video
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Included Audio And Video For All Course Materials.
              </p>
            </div>
          </div>

          <div className="feature-card flex items-start gap-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-shadow cursor-default group">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-[#FF4F4F] group-hover:scale-110 transition-transform">
              <Monitor size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Virtual Classroom
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Virtual Learning Know As A Computer Or Platform.
              </p>
            </div>
          </div>

          <div className="feature-card flex items-start gap-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-shadow cursor-default group">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-[#525FE1] group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Group Learning
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                A Place Via Socializing A Computer Of Mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- GOALS / BENEFITS SECTION --- */}
      <section ref={goalsRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16 goal-header">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achieve Your Goals With Eduract
          </h2>
          <p className="text-gray-500">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout.
          </p>
        </div>

        <div className="goal-cards-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="goal-card bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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
          <div className="goal-card bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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
          <div className="goal-card bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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
      {/* <footer className="py-12 bg-gray-50 border-t text-center">
        <p className="text-gray-400 text-sm">
          © 2023 Eduract. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default App;
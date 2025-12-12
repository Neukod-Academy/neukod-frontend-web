"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Layout,
  Smartphone,
  Palette,
  Code2,
  Zap,
  Globe,
  Layers,
  Cpu,
  Figma,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Heart,
  MousePointer2,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoadmapFrontend from "./roadmap";
import FrontendBanner from "@/app/images/class/frontend/frontend_banner.webp";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-full h-[90vh]">
        <Image
          fill
          src={FrontendBanner}
          alt="Frontend Dev Path"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-0 right-0 bg-white w-[500px] h-[150px] rounded-bl-[3rem] hidden md:block">
          <div className="absolute top-[150px] right-0 w-12 h-16 bg-transparent rounded-tr-[3rem] shadow-[20px_-20px_0_20px_#ffffff] pointer-events-none"></div>
          <div className="absolute top-0 right-[500px] w-12 h-16 bg-transparent rounded-tr-[3rem] shadow-[20px_-20px_0_20px_#ffffff] pointer-events-none"></div>
          <div className="text-top flex gap-10 items-start ml-10 py-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-70% to-cyan-500">4+</h3>
              <p className="text-sm text-gray-500 max-w-[120px] leading-relaxed">
                We have many different course.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-70% to-cyan-500">50+</h3>
              <p className="text-sm text-gray-500 max-w-[120px] leading-relaxed">
                50+ student happy with our class.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-70% to-cyan-500">100%</h3>
              <p className="text-sm text-gray-500 max-w-[120px] leading-relaxed">
                Claim your best offer today!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px]" />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="hero-text opacity-0 translate-y-10">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 mb-6 font-medium text-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New Module: Next.js 15 App Router
          </div> */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-600 leading-[1.1] mb-6 tracking-tight">
            Craft Pixel Perfect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-70% to-cyan-500">
              Experiences.
            </span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-lg leading-relaxed">
            Kuasai seni Frontend Engineering. Gabungkan estetika desain dengan
            logika kode React yang kompleks untuk membangun web modern yang
            interaktif.
          </p>
          <div className="flex items-center flex-wrap gap-4">
            <Button className="px-8 py-6 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-xl shadow-blue-500/20">
              Start Course{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="px-8 py-6 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300 hover:scale-105 hover:border-blue-300 transition-all duration-300 shadow-sm">
              View Roadmap
            </Button>
          </div>
        </div>

        {/* Visual Grid (Right Side) - Frontend Themed */}
        <div className="relative hero-grid opacity-0 scale-95">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              {/* Code Component Card */}
              <div className="h-64 rounded-2xl bg-white p-1 overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 group hover:border-blue-300 transition-colors">
                <div className="w-full h-full bg-slate-50 rounded-xl p-4 relative overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-slate-400">
                      Card.jsx
                    </span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    </div>
                  </div>
                  <div className="space-y-2 font-mono text-[10px]">
                    <p className="text-pink-500">
                      export default{" "}
                      <span className="text-blue-600">function</span>{" "}
                      <span className="text-yellow-600">Card</span>() {"{"}
                    </p>
                    <p className="pl-4 text-slate-600">return (</p>
                    <p className="pl-6 text-slate-600">
                      &lt;<span className="text-green-600">motion.div</span>
                    </p>
                    <p className="pl-8 text-cyan-600">
                      initial=
                      <span className="text-orange-500">
                        {"{ opacity: 0 }"}
                      </span>
                    </p>
                    <p className="pl-8 text-cyan-600">
                      animate=
                      <span className="text-orange-500">
                        {"{ opacity: 1 }"}
                      </span>
                    </p>
                    <p className="pl-6 text-slate-600">/&gt;</p>
                    <p className="pl-4 text-slate-600">);</p>
                    <p className="text-slate-600">{"}"}</p>
                  </div>
                  {/* Floating "Cursor" Overlay */}
                  <MousePointer2 className="absolute bottom-4 right-4 w-6 h-6 text-blue-600 fill-blue-600 animate-bounce" />
                </div>
              </div>

              {/* Responsive Mobile Card */}
              <div className="h-48 rounded-2xl bg-white p-6 border border-slate-200 hover:border-blue-400 transition-colors shadow-lg flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
                <Smartphone className="w-12 h-12 text-slate-800 mb-2 relative z-10" />
                <div className="text-center relative z-10">
                  <div className="font-bold text-slate-800">Mobile First</div>
                  <div className="text-xs text-slate-500">
                    Responsive Layouts
                  </div>
                </div>
                {/* Animated widths */}
                <div className="absolute bottom-0 w-full h-1 bg-blue-200">
                  <div className="h-full bg-blue-500 w-[60%] animate-[pulse_3s_infinite]"></div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* UI Palette Card */}
              <div className="h-40 rounded-2xl bg-white p-6 border border-slate-200 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Palette className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-1 rounded border border-blue-100">
                    Theming
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 shadow-sm hover:scale-110 transition-transform"></div>
                  <div className="w-6 h-6 rounded-full bg-indigo-500 shadow-sm hover:scale-110 transition-transform"></div>
                  <div className="w-6 h-6 rounded-full bg-cyan-400 shadow-sm hover:scale-110 transition-transform"></div>
                  <div className="w-6 h-6 rounded-full bg-rose-400 shadow-sm hover:scale-110 transition-transform"></div>
                </div>
              </div>

              {/* Render Preview Card */}
              <div className="h-64 rounded-2xl bg-gradient-to-bl from-blue-600 to-indigo-700 p-1 shadow-2xl shadow-blue-500/20 group overflow-hidden">
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center relative border border-white/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-2xl rotate-12 opacity-20 absolute"></div>
                    <div className="w-24 h-24 bg-white rounded-2xl -rotate-6 opacity-40 absolute"></div>
                    <div className="w-24 h-24 bg-white rounded-2xl rotate-0 shadow-xl flex items-center justify-center relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                      <Zap className="w-10 h-10 text-blue-600 fill-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 text-xs font-bold text-white/80 tracking-widest uppercase">
                    Fast Refresh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-16 info-title opacity-0">
          What is <span className="text-blue-600">Frontend Engineering?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all duration-300 info-card opacity-0 translate-y-10 group shadow-sm hover:shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              The Logic (Engineering)
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Bukan sekadar HTML/CSS. Frontend modern melibatkan manajemen state
              yang kompleks, integrasi API, optimasi performa (Core Web Vitals),
              dan arsitektur komponen yang scalable.
            </p>
            <ul className="space-y-2">
              {[
                "State Management (Redux/Zustand)",
                "Server Side Rendering (Next.js)",
                "API Integration & Caching",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-700 text-sm font-medium"
                >
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-purple-300 transition-all duration-300 info-card opacity-0 translate-y-10 group shadow-sm hover:shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              The Visuals (UI/UX)
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Menerjemahkan desain Figma menjadi kode yang hidup. Mengatur
              animasi, transisi yang halus, tipografi, dan memastikan tampilan
              responsif di semua perangkat.
            </p>
            <ul className="space-y-2">
              {[
                "Pixel Perfect Implementation",
                "Advanced CSS & Tailwind",
                "Micro-interactions & Animations",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-700 text-sm font-medium"
                >
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoalsSection = () => {
  const cards = [
    {
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      title: "Modern Stack",
      desc: "Kuasai React 19, Next.js App Router, dan Tailwind CSS. Teknologi yang dipakai startup Unicorn.",
      color: "border-blue-100 bg-blue-50/50 hover:bg-blue-50",
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      title: "Design System",
      desc: "Belajar membuat komponen yang reusable, atomic design, dan storybook dokumentasi.",
      color: "border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50",
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-600" />,
      title: "Performance",
      desc: "Optimasi LCP, CLS, dan FID. Buat website yang loading kurang dari 1 detik.",
      color: "border-cyan-100 bg-cyan-50/50 hover:bg-cyan-50",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-4 goal-title">
          Tujuan Utama:{" "}
          <span className="text-blue-600">Fullstack Frontend</span>
        </h2>
        <p className="text-slate-600 mb-16 max-w-2xl mx-auto goal-subtitle">
          Kami mencetak developer yang tidak hanya bisa coding, tapi juga
          mengerti estetika dan pengalaman pengguna.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border ${card.color} transition-all duration-300 hover:-translate-y-2 goal-card opacity-0 translate-y-10 group cursor-default shadow-sm hover:shadow-lg`}
            >
              <div className="w-14 h-14 mx-auto bg-white rounded-xl flex items-center justify-center mb-6 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyLearnSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="why-img flex-1 relative w-full max-w-lg lg:max-w-xl mx-auto hidden md:block">
          {/* Grid Container: Clean 3x3 layout with gap */}
          <div className="grid grid-cols-3 gap-4 auto-rows-[1fr]">
            {/* --- ROW 1 --- */}
            {/* 1. Top Left Photo */}
            <div className="why-item hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <Image
                width={400}
                height={400}
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Top Middle (Blue) - Fan Blade UP (Rounded Top-Right) */}
            <div className="why-item hero-grid-item aspect-square bg-[#525FE1] rounded-tr-[80px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl flex items-center justify-center shadow-sm"></div>

            {/* 3. Top Right Photo */}
            <div className="why-item hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
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
            <div className="why-item hero-grid-item aspect-square bg-[#8B5CF6] rounded-tl-[80px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-sm"></div>

            {/* 5. CENTER Photo (Circle) */}
            <div className="why-item hero-grid-item aspect-square rounded-full border-4 border-white shadow-xl overflow-hidden z-20 scale-105">
              <Image
                width={400}
                height={400}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                alt="Main Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 6. Middle Right (Red) - Fan Blade RIGHT (Rounded Bottom-Right) */}
            <div className="why-item hero-grid-item aspect-square bg-[#FF4F4F] rounded-br-[80px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-sm"></div>

            {/* --- ROW 3 --- */}
            {/* 7. Bottom Left Photo */}
            <div className="why-item hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
              <Image
                width={400}
                height={400}
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 8. Bottom Middle (Yellow) - Fan Blade DOWN (Rounded Bottom-Left) */}
            <div className="why-item hero-grid-item aspect-square bg-[#FDC500] rounded-bl-[80px] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center shadow-sm"></div>

            {/* 9. Bottom Right Photo */}
            <div className="why-item hero-grid-item aspect-square rounded-2xl overflow-hidden shadow-sm bg-gray-100">
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

        {/* Right Content Side */}
        <div className="why-text opacity-0 translate-x-10">
          {/* floating component */}
          <div className="absolute -top-20 -right-10 z-20 bg-white p-4 rounded-xl border border-slate-100 shadow-xl w-48 animate-[bounce_5s_infinite]">
            <div className="flex justify-between items-center mb-2">
              <div className="h-2 w-12 bg-slate-200 rounded"></div>
              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
            </div>
            <span>Hello World</span>
            <div className="h-16 bg-slate-100 rounded-lg mb-2"></div>
            <div className="h-2 w-24 bg-slate-200 rounded"></div>
          </div>

          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
            Kenapa Memilih <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Neukod Academy?
            </span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Di dunia digital, impresi pertama adalah segalanya. Kami mengajarkan
            Anda cara membangun antarmuka yang tidak hanya berfungsi, tetapi
            juga memukau.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Real-world Projects",
              "Code Reviews Expert",
              "Figma to Code Workflow",
              "Portfolio Building",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
            Gabung Komunitas <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const PathSection = () => {
  const paths = [
    {
      title: "React Ecosystem",
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50",
      border: "border-blue-100",
      hover: "hover:border-blue-300",
    },
    {
      title: "TypeScript",
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      hover: "hover:border-indigo-300",
    },
    {
      title: "Tailwind CSS",
      icon: <Palette className="w-8 h-8 text-cyan-500" />,
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      hover: "hover:border-cyan-300",
    },
    {
      title: "Framer Motion",
      icon: <Zap className="w-8 h-8 text-pink-500" />,
      bg: "bg-pink-50",
      border: "border-pink-100",
      hover: "hover:border-pink-300",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 path-header opacity-0">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Tech Stack <span className="text-blue-600">Terbaik</span>
          </h2>
          <p className="text-slate-500">
            Kurikulum yang disesuaikan dengan kebutuhan industri saat ini.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className={`group relative ${path.bg} p-8 rounded-2xl border ${path.border} ${path.hover} transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden path-card opacity-0 translate-y-10 shadow-sm hover:shadow-md`}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`p-4 bg-white rounded-xl mb-6 shadow-sm`}>
                  {path.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {path.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6">Essential Mastery</p>
                <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const tl = gsap.timeline();
    tl.to(".hero-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }).to(
      ".hero-grid",
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    );

    // Scroll Triggers (Reusable Logic from previous themes)

    gsap.to(".info-title", {
      scrollTrigger: { trigger: ".info-title", start: "top 80%" },
      opacity: 1,
      y: 0,
      duration: 0.8,
    });

    gsap.utils.toArray<HTMLElement>(".info-card").forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.2,
      });
    });
    gsap.fromTo(
      ".text-top",
      {
        opacity: 0,
        y: -100,
      },
      {
        scrollTrigger: { trigger: ".text-top", start: "top 70%" },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    gsap.to(".goal-title", {
      scrollTrigger: { trigger: ".goal-title", start: "top 80%" },
      opacity: 1,
      y: 0,
      duration: 0.6,
    });

    gsap.utils.toArray<HTMLElement>(".goal-card").forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: { trigger: ".goal-card", start: "top 85%" },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "power2.out",
      });
    });

    gsap.from(".why-item", {
      opacity: 0,
      scale: 0.6,
      rotate: () => gsap.utils.random(-40, 40),
      x: () => gsap.utils.random(-40, 40),
      y: () => gsap.utils.random(-40, 40),
      duration: 1.4,
      ease: "power4.out",
      stagger: {
        each: 0.15,
        from: "edges",
      },
      scrollTrigger: { trigger: ".why-img", start: "top 70%" },
    });

    gsap.to(".why-text", {
      scrollTrigger: { trigger: ".why-text", start: "top 70%" },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.to(".path-header", {
      scrollTrigger: { trigger: ".path-header", start: "top 80%" },
      opacity: 1,
      y: 0,
      duration: 0.8,
    });

    gsap.utils.toArray<HTMLElement>(".path-card").forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: { trigger: ".path-card", start: "top 90%" },
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <div
      ref={mainRef}
      className="bg-white min-h-screen text-slate-800 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-x-hidden"
    >
      <Hero />
      <InfoSection />
      <GoalsSection />
      <WhyLearnSection />
      <RoadmapFrontend />
      <PathSection />
    </div>
  );
};

export default App;

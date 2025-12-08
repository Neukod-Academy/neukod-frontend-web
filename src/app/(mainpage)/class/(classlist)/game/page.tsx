"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Gamepad2,
  Code2,
  Box,
  Layers,
  Trophy,
  Target,
  Zap,
  Sword,
  Cpu,
  MonitorPlay,
  Ghost,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import GameBanner from "@/app/images/class/game/gamedev_banner.webp";
import PProfile from "@/app/images/class/game/pak_vincent.png"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//     gsap.registerPlugin(ScrollTrigger);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         <div className="flex items-center gap-2 group cursor-pointer">
//           <div className="p-2 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors">
//             <Gamepad2 className="w-6 h-6 text-black" />
//           </div>
//           <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
//             NEUKOD<span className="text-black">.GG</span>
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">
//           {['Quests', 'Skill Trees', 'Career Mode', 'Guild'].map((item) => (
//             <a key={item} href="#" className="text-slate-300 hover:text-purple-400 font-medium transition-colors">
//               {item}
//             </a>
//           ))}
//           <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 ease-out">
//             Start Game
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 border-b border-purple-500/20 p-6 flex flex-col gap-4">
//            {['Quests', 'Skill Trees', 'Career Mode', 'Guild'].map((item) => (
//             <a key={item} href="#" className="text-slate-300 hover:text-purple-400 text-lg">
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[95vh]">
        <Image
          src={GameBanner}
          alt="Game Dev Banner"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="hero-text opacity-0 translate-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            New Server: Unreal Engine 5 Course Live
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            Master the art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Game Dev.
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            From zero to hero. Learn C++, C#, Unity, and Unreal Engine through
            building actual AAA-quality projects. No grinding required.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:text-white/80 rounded-xl font-bold hover:bg-purple-50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              Start Journey{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-xl font-bold hover:bg-slate-800 hover:border-purple-500/50 transition-all duration-300">
              View Demo Reel
            </button>
          </div>
        </div>

        {/* Visual Grid (Right Side) */}
        <div className="relative hero-grid opacity-0 scale-95">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              <div className="group h-64 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-1 overflow-hidden shadow-2xl shadow-purple-900/20 group">
                <div className="w-full h-full bg-slate-900/90 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <Code2 className="w-16 h-16 text-purple-500/50 group-hover:text-purple-200 group-hover:scale-125 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-black font-mono text-sm">
                    &lt;PlayerController /&gt;
                  </div>
                </div>
              </div>
              <div className="h-48 rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center">
                    <Ghost className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-black font-bold">AI Behavior</div>
                    <div className="text-slate-500 text-xs">
                      Enemy State Machine
                    </div>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 h-2 rounded-full mb-2 overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[75%]"></div>
                </div>
                <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[45%]"></div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-40 rounded-2xl bg-slate-800 p-6 border border-slate-700 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-pink-500/10 rounded-lg">
                    <Box className="w-6 h-6 text-pink-400" />
                  </div>
                  <span className="text-green-400 text-xs font-mono bg-green-900/20 px-2 py-1 rounded">
                    ACTIVE
                  </span>
                </div>
                <div className="text-slate-300 font-medium">
                  3D Asset Pipeline
                </div>
              </div>

              <div className="h-64 rounded-2xl bg-gradient-to-bl from-cyan-600 to-blue-700 p-1 shadow-2xl shadow-cyan-900/20 group overflow-hidden">
                <div className="w-full h-full bg-slate-900/90 rounded-xl flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="w-24 h-24 border-2 border-purple-500/30 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
                  </div>
                  <MonitorPlay className="w-16 h-16 text-black relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 info-title opacity-0">
          What is <span className="text-blue-800">Game Development?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="p-8 rounded-3xl border border-slate-800 hover:border-blue-800/60 hover:shadow-lg transition-all duration-300 info-card opacity-0 translate-y-10">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-blue-800">The Engine (Back-end)</span>
            </h3>
            <p className="text-black leading-relaxed mb-6">
              Focuses on the logic, physics, and architecture behind the scenes.
              This includes server-side multiplayer code, database management
              for player stats, and optimization algorithms to keep the FPS
              high.
            </p>
            <ul className="space-y-2">
              {[
                "Physics Calculations",
                "Multiplayer Networking",
                "Save Data Systems",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-black text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-slate-800 hover:border-blue-800 hover:shadow-lg transition-all duration-300 info-card opacity-0 translate-y-10">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-3">
              <div className="p-2 bg-pink-600/20 rounded-lg">
                <Layers className="w-6 h-6 text-pink-400" />
              </div>
              <span className="text-blue-800">The Gameplay (Front-end)</span>
            </h3>
            <p className="text-black leading-relaxed mb-6">
              The "feel" of the game. Designers and gameplay programmers work
              here to implement mechanics, UI/UX, particle effects, and
              animation blending. This is what the player sees and interacts
              with directly.
            </p>
            <ul className="space-y-2">
              {[
                "Character Mechanics",
                "UI/UX Implementation",
                "Animation States",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-black text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />{" "}
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
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Learn Modern Tech",
      desc: "Master Unity 6, Unreal Engine 5, and Godot 4. Use the latest lighting and physics systems.",
      color: "border-yellow-500/20 bg-yellow-500/5",
    },
    {
      icon: <Sword className="w-6 h-6 text-red-400" />,
      title: "Build Your Portfolio",
      desc: "Don't just watch videos. Build 5 playable games including an RPG, FPS, and Platformer.",
      color: "border-red-500/20 bg-red-500/5",
    },
    {
      icon: <Trophy className="w-6 h-6 text-purple-400" />,
      title: "Get Certified",
      desc: "Complete the Gauntlet challenges to earn verified certificates for your LinkedIn profile.",
      color: "border-purple-500/20 bg-purple-500/5",
    },
  ];

  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-4 goal-title">
          Achieve Your <span className="text-blue-800">Main Quest</span>
        </h2>
        <p className="text-black mb-16 max-w-2xl mx-auto goal-subtitle">
          Our curriculum is designed to take you from "Hello World" to
          "Published on Steam" in record time.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border ${card.color} hover:bg-blue-400 transition-all duration-300 hover:-translate-y-2 goal-card opacity-0 translate-y-10 group cursor-default`}
            >
              <div className="w-14 h-14 mx-auto bg-slate-900 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {card.title}
              </h3>
              <p className="text-black text-sm leading-relaxed">
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image Side */}
        <div className="relative why-img opacity-0 -translate-x-10">
          <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-slate-700/50 shadow-2xl">
            <div className="bg-blue-400 h-[500px] w-full flex items-center justify-center relative">
              {/* Placeholder for "Instructor" - Stylized Avatar */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-800/50 to-slate-900"></div>
              <div className="relative z-10 w-48 h-48 rounded-full border-4 border-white/10 overflow-hidden bg-slate-100/20 flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.3)]">
                <Image
                  src={PProfile}
                  fill
                  alt="Instructor"
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 animate-bounce delay-700">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-black font-bold text-xs">
                    Senior Dev
                  </span>
                </div>
              </div>
              <div className="absolute bottom-20 left-10 bg-slate-900/90 p-4 rounded-xl border border-purple-500/50 flex items-center gap-3 shadow-xl">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Target className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="font-bold text-sm">Accuracy</div>
                  <div className="text-purple-400 text-xs">
                    98% Code Coverage
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dashed border-slate-700 rounded-3xl -z-10" />
        </div>

        {/* Right Content Side */}
        <div className="why-text opacity-0 translate-x-10">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose the <br />
            <span className="text-transparent bg-clip-text bg-blue-800">
              Neukod Guild?
            </span>
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            We don't just teach syntax. We teach you how to think like a Game
            Designer and solve problems like a Senior Engineer.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "World Class Mentors",
              "Flexible Skill Tree",
              "AAA Asset Library",
              "Discord Community",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-400 hover:bg-gradient-to-r hover:from-blue-300 from-50% hover:to-purple-200 text-black/80 hover:text-black/60 font-bold rounded-lg shadow-[0_4px_20px_rgba(147,51,234,0.3)] hover:shadow-[0_4px_25px_rgba(147,51,234,0.5)] transition-all transform-all hover:-translate-y-1 duration-300">
            Join the Guild
          </button>
        </div>
      </div>
    </section>
  );
};

const PathSection = () => {
  const paths = [
    {
      title: "Unity Engine",
      icon: <Box className="w-8 h-8 text-black" />,
      color: "from-slate-800 to-slate-900",
      accent: "group-hover:text-black",
      border: "hover:border-white",
    },
    {
      title: "Unreal 5",
      icon: <MonitorPlay className="w-8 h-8 text-blue-400" />,
      color: "from-slate-800 to-slate-900",
      accent: "group-hover:text-blue-400",
      border: "hover:border-blue-500",
    },
    {
      title: "C# Scripting",
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      color: "from-slate-800 to-slate-900",
      accent: "group-hover:text-purple-400",
      border: "hover:border-purple-500",
    },
    {
      title: "Blender 3D",
      icon: <Layers className="w-8 h-8 text-orange-400" />,
      color: "from-slate-800 to-slate-900",
      accent: "group-hover:text-orange-400",
      border: "hover:border-orange-500",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 path-header opacity-0">
          <h2 className="text-3xl font-bold text-black mb-4">
            Programming <span className="text-blue-500">Skill Tree</span>
          </h2>
          <p className="text-slate-400">Select your specialization class.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-b ${path.color} p-8 rounded-2xl border border-slate-800 ${path.border} transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden path-card opacity-0 translate-y-10`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`p-4 bg-slate-800 rounded-xl mb-6 shadow-lg ${path.accent} transition-colors`}
                >
                  {path.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {path.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6">Beginner to Pro</p>
                <button className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-slate-900 transition-colors">
                  Start Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const Footer = () => {
//   return (
//     <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
//         <div className="col-span-1 md:col-span-1">
//           <div className="flex items-center gap-2 mb-6">
//             <Gamepad2 className="w-6 h-6 text-purple-500" />
//             <span className="text-xl font-bold text-black">NEUKOD</span>
//           </div>
//           <p className="text-slate-500 text-sm leading-relaxed">
//             The premier destination for aspiring game developers. Built by gamers, for gamers.
//           </p>
//         </div>

//         {[
//           { header: "Course", links: ["Unreal Engine", "Unity", "C# Mastery", "Blender"] },
//           { header: "Career", links: ["Job Board", "Portfolio Review", "Mock Interviews"] },
//           { header: "Support", links: ["Discord", "Help Center", "Report Bug"] }
//         ].map((col, idx) => (
//           <div key={idx}>
//             <h4 className="text-black font-bold mb-6">{col.header}</h4>
//             <ul className="space-y-3">
//               {col.links.map(link => (
//                 <li key={link}>
//                   <a href="#" className="text-slate-500 hover:text-purple-400 text-sm transition-colors">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="text-center border-t border-slate-900 pt-8">
//         <p className="text-slate-600 text-sm">© 2024 Neukod.GG. All rights reserved. GG WP.</p>
//       </div>
//     </footer>
//   );
// };

const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
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

    // Scroll Triggers

    // Info Section
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

    // Goals Section
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

    // Why Section
    gsap.to(".why-img", {
      scrollTrigger: { trigger: ".why-img", start: "top 70%" },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(".why-text", {
      scrollTrigger: { trigger: ".why-text", start: "top 70%" },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Path Section
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
  });

  return (
    <div
      ref={mainRef}
      className="min-h-screen text-slate-200 selection:bg-purple-500 selection:text-black font-sans overflow-x-hidden"
    >
      <Hero />
      <InfoSection />
      <GoalsSection />
      <WhyLearnSection />
      <PathSection />
    </div>
  );
};

export default App;

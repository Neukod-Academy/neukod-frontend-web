"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Terminal,
  Database,
  Server,
  Cloud,
  Shield,
  Code2,
  Globe,
  Cpu,
  Network,
  Lock,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Activity,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoadmapSection from "./roadmap";
import Image from "next/image";
import BannerBackend from "@/app/images/class/backend/hero_backend.webp";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [bars, setBars] = useState<number[][]>([]);

  useEffect(() => {
    const generated = [1, 2, 3].map(() =>
      [1, 2, 3, 4, 5].map(() => (Math.random() > 0.5 ? 1 : 0))
    );
    setBars(generated);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[90vh]">
        <Image
          src={BannerBackend}
          alt="Backend Class"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 right-0 bg-white w-[500px] h-[150px] rounded-bl-[3rem] hidden md:block">
          <div className="absolute top-[150px] right-0 w-12 h-16 bg-transparent rounded-tr-[3rem] shadow-[20px_-20px_0_20px_#ffffff] pointer-events-none"></div>
          <div className="absolute top-0 right-[500px] w-12 h-16 bg-transparent rounded-tr-[3rem] shadow-[20px_-20px_0_20px_#ffffff] pointer-events-none"></div>
          <div className="text-top flex gap-10 items-start ml-10 py-5">
            <div className="flex flex-col gap-2 ">
              <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">4+</h3>
              <p className="text-sm text-gray-500 max-w-[120px] leading-relaxed">
                We have many different course.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">50+</h3>
              <p className="text-sm text-gray-500 max-w-[120px] leading-relaxed">
                50+ student happy with our class.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">100%</h3>
              <p className="text-sm text-gray-500 max-w-[120px] leading-relaxed">
                Claim your best offer today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="hero-text opacity-0 translate-y-10">
          <h1 className="text-5xl lg:text-7xl text-white font-extrabold leading-[1.1] mb-6">
            Architect the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Backbone.
            </span>
          </h1>
          <p className="text-slate-200 text-lg mb-8 max-w-lg leading-relaxed">
            Stop building fragile apps. Learn to architect scalable
            microservices, manage distributed databases, and deploy to the cloud
            with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="px-8 py-4 bg-emerald-500 text-slate-950 rounded-xl font-bold hover:bg-emerald-400 hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Start Learning{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl font-bold hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300 font-mono">
              View Roadmap
            </Button>
          </div>
        </div>

        {/* Visual Grid (Right Side) - Backend Themed */}
        <div className="relative hero-grid opacity-0 scale-95">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              {/* Terminal Card */}
              <div className="h-64 rounded-2xl bg-slate-900 border border-slate-700 p-1 overflow-hidden shadow-2xl shadow-emerald-900/10 group hover:border-emerald-500/50 transition-colors">
                <div className="w-full h-full bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-300 relative overflow-hidden">
                  <div className="flex items-center gap-1.5 mb-3 border-b border-slate-800 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-slate-500">bash — 80x24</span>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <span className="text-emerald-500">user@server:~$</span>{" "}
                      docker-compose up -d
                    </p>
                    <p className="text-blue-400">[+] Running 3/3</p>
                    <p>
                      {" "}
                      ⠿ Network app_net{" "}
                      <span className="text-green-500 float-right">
                        Created
                      </span>
                    </p>
                    <p>
                      {" "}
                      ⠿ Container db-redis{" "}
                      <span className="text-green-500 float-right">
                        Started
                      </span>
                    </p>
                    <p>
                      {" "}
                      ⠿ Container api-core{" "}
                      <span className="text-green-500 float-right">
                        Started
                      </span>
                    </p>
                    <p>
                      <span className="text-emerald-500">user@server:~$</span> _
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Server Stats Card */}
              <div className="h-48 rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:border-emerald-500/50 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">System Load</div>
                    <div className="text-slate-500 text-xs">
                      US-EAST-1 Region
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>CPU Usage</span>
                      <span className="text-emerald-400">42%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[42%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Memory (RAM)</span>
                      <span className="text-yellow-400">78%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full w-[78%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* API Status Card */}
              <div className="h-40 rounded-2xl bg-slate-800 p-6 border border-slate-700 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Cloud className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-emerald-400 text-xs font-mono bg-emerald-900/20 px-2 py-1 rounded border border-emerald-500/20">
                    200 OK
                  </span>
                </div>
                <div>
                  <div className="text-slate-300 font-bold">API Gateway</div>
                  <div className="text-slate-500 text-xs">latency: 24ms</div>
                </div>
              </div>

              {/* Database Visualization */}
              <div className="h-64 rounded-2xl bg-gradient-to-bl from-cyan-900 to-slate-900 p-1 shadow-2xl shadow-cyan-900/10 group overflow-hidden border border-slate-700/50">
                <div className="w-full h-full bg-slate-900/90 rounded-xl flex items-center justify-center relative">
                  {/* Abstract Server Rack Animation */}
                  <div className="flex gap-2">
                    {bars.map((col, i) => (
                      <div
                        key={i}
                        className="w-6 h-24 bg-slate-800 rounded-sm border border-slate-700 flex flex-col justify-evenly items-center py-1"
                      >
                        {col.map((val, j) => (
                          <div
                            key={j}
                            className={`w-3 h-1 rounded-full ${
                              val === 1
                                ? "bg-emerald-500 animate-pulse"
                                : "bg-slate-600"
                            }`}
                          ></div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* <Database className="w-16 h-16 text-white absolute z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] opacity-20" /> */}
                  <div className="absolute bottom-4 text-xs font-mono text-cyan-400">
                    DB_VIEW
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 info-title opacity-0">
          What is <span className="text-emerald-400">Backend Engineering?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 info-card opacity-0 translate-y-10 group">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="p-2 bg-emerald-600/20 rounded-lg">
                <Server className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300" />
              </div>
              The Logic (Server-Side)
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              The brain of the application. You design the algorithms, handle
              business logic, and ensure security. It's about making systems
              efficient, secure, and fast.
            </p>
            <ul className="space-y-2">
              {[
                "Authentication & Security (OAuth/JWT)",
                "API Architecture (REST/GraphQL)",
                "Microservices Communication",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 info-card opacity-0 translate-y-10 group">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Database className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </div>
              The Data (Persistence)
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Data is the new oil. You will learn how to structure, store, and
              retrieve data efficiently at scale using both SQL and NoSQL
              technologies.
            </p>
            <ul className="space-y-2">
              {[
                "Database Normalization",
                "Caching Strategies (Redis)",
                "Data Replication & Sharding",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{" "}
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
      icon: <Network className="w-6 h-6 text-cyan-400" />,
      title: "Scalable Systems",
      desc: "Learn to build systems that handle millions of requests per second using Load Balancers and Queues.",
      color: "border-2 border-cyan-500/70 bg-slate-900/90",
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: "Security First",
      desc: "Master cryptography, secure headers, and prevent common vulnerabilities like SQL Injection and XSS.",
      color: "border-2 border-emerald-500/70 bg-slate-900/90",
    },
    {
      icon: <Cloud className="w-6 h-6 text-indigo-400" />,
      title: "Cloud Native",
      desc: "Deploy like a pro using Docker, Kubernetes, and AWS Lambda. Go serverless or manage your own clusters.",
      color: "border-2 border-indigo-500/70 bg-slate-900/90",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 goal-title">
          Your Mission:{" "}
          <span className="text-emerald-400">High Availability</span>
        </h2>
        <p className="text-slate-400 mb-16 max-w-2xl mx-auto goal-subtitle">
          We don't just teach code. We teach you how to build software that
          survives the real world.
        </p>

        <div className="group grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border ${card.color} hover:bg-slate-900/70 transition-all duration-300 hover:-translate-y-2 goal-card opacity-0 translate-y-10 group cursor-default`}
            >
              <div className="w-14 h-14 mx-auto bg-slate-900 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ring-1 ring-white/5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image Side - Server Room Aesthetic */}
        <div className="relative why-img opacity-0 -translate-x-10 hover:scale-110">
          <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-slate-700/50 shadow-2xl">
            <div className="bg-slate-800 h-[500px] w-full flex items-center justify-center relative">
              {/* Abstract "System Architect" visual */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>

              {/* Floating Code Snippet Card */}
              <div className="absolute top-16 right-10 z-20 bg-slate-900/90 p-4 rounded-lg border border-slate-600 shadow-xl backdrop-blur-sm w-48">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-2/3 bg-slate-700 rounded" />
                  <div className="h-1.5 w-full bg-slate-700 rounded" />
                  <div className="h-1.5 w-1/2 bg-emerald-600 rounded" />
                </div>
              </div>

              {/* Central Icon */}
              <div className="relative z-10 w-48 h-48 rounded-full border-4 border-emerald-500/20 overflow-hidden bg-slate-900 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.15)]">
                <Globe className="w-20 h-20 text-emerald-500 animate-pulse" />
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-20 left-10 bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30 flex items-center gap-3 shadow-xl backdrop-blur-md">
                <div className="p-2 bg-emerald-600/20 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Deployment</div>
                  <div className="text-emerald-400 text-xs">
                    Production: Stable
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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Join the elite <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              System Architects.
            </span>
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Frontend changes every year. Backend fundamentals last a lifetime.
            Build the infrastructure that powers the modern web.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "System Design Interviews",
              "Production Grade Code",
              "DevOps Integration",
              "1-on-1 Code Review",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-400 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold rounded-lg shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-1">
            Initialize Career
          </button>
        </div>
      </div>
    </section>
  );
};

const PathSection = () => {
  const paths = [
    {
      title: "Node.js & TS",
      icon: <Code2 className="w-8 h-8 text-white" />,
      color: "from-slate-900/90 to-slate-900/60",
      accent: "hover:text-green-400",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Go (Golang)",
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      color: "from-slate-900/90 to-slate-900/60",
      accent: "hover:text-cyan-400",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Rust Lang",
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      color: "from-slate-900/90 to-slate-900/60",
      accent: "hover:text-orange-400",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "DevOps & K8s",
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      color: "from-slate-900/90 to-slate-900/60",
      accent: "hover:text-blue-400",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 path-header opacity-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Backend Class <span className="text-emerald-400">Roadmap</span>
          </h2>
          <p className="text-slate-400">
            Choose your weapon of mass construction.
          </p>
        </div>

        <div className="group grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className={`
                  relative 
                  bg-gradient-to-b ${path.color} 
                  p-8 rounded-2xl border
                  transform hover:scale-105
                  transition-all duration-300 
                  hover:shadow-xl
                  cursor-pointer 
                  path-card will-change-transform
                `}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`
                      p-4 bg-slate-900/60 rounded-xl 
                      mb-6 shadow-lg 
                      ${path.accent} 
                      transition-colors
                    `}
                >
                  {path.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {path.title}
                </h3>

                <p className="text-slate-300 text-sm mb-6">
                  {path.desc}
                </p>

                <Button
                  className="
                      px-4 py-2 rounded-lg 
                      bg-slate-800 text-slate-300 
                      text-xs font-bold uppercase tracking-wider 
                      transition-colors
                      hover:bg-emerald-500 
                      hover:text-slate-950
                    "
                >
                  Select Stack
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BackendPage = () => {
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
      gsap.fromTo(".path-card",
        {scale:0.8 , y:0, opacity:0 }, 
        {
        scale: 1 ,
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.1,
        scrollTrigger: { 
          trigger: ".path-card", 
          start: "top 90%" },
        
      });
    });
  });

  return (
    <main>
      <div
        ref={mainRef}
        className="min-h-screen text-slate-200 selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden"
      >
        <Hero />
        <InfoSection />
        <GoalsSection />
        <WhyLearnSection />
        <RoadmapSection />
        <PathSection />
      </div>
    </main>
  );
};

export default BackendPage;

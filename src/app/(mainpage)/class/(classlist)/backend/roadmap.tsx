import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Database,
  Server,
  Code2,
  Cpu,
  Cloud,
  X,
  ChevronRight,
  GitBranch,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
interface roadmapDataProps {
  id: number;
  level: string;
  title: string;
  icon: JSX.Element;
  desc: string;
  details: string[];
}
const roadmapData: roadmapDataProps[] = [
  {
    id: 1,
    level: "Beginner",
    title: "Logika Dasar & Algoritma",
    icon: <Terminal className="w-6 h-6" />,
    desc: "Fondasi utama sebelum menulis kode kompleks.",
    details: [
      "Variabel, Tipe Data, & Operator",
      "Control Flow (If/Else, Switch, Loops)",
      "Struktur Data Dasar (Array, Object/Map)",
      "Algoritma Dasar (Sorting, Searching)",
      "Pemecahan Masalah (Problem Solving)",
    ],
  },
  {
    id: 2,
    level: "Beginner",
    title: "Bahasa Pemrograman & Version Control",
    icon: <Code2 className="w-6 h-6" />,
    desc: "Pilih satu bahasa (JS/TS, Python, atau Go) dan kuasai Git.",
    details: [
      "Syntax Deep Dive (ES6+ untuk JS)",
      "Fungsi & Modularisasi Code",
      "Asynchronous Programming (Async/Await)",
      "Git Basic (Clone, Commit, Push, Pull)",
      "GitHub/GitLab Workflow dasar",
    ],
  },
  {
    id: 3,
    level: "Beginner",
    title: "Web Server & Database Dasar",
    icon: <Database className="w-6 h-6" />,
    desc: "Memahami cara kerja internet dan penyimpanan data.",
    details: [
      "HTTP/HTTPS Protocols, Methods, Status Codes",
      "RESTful API Concept",
      "Relational Database (MySQL/PostgreSQL)",
      "Basic SQL (SELECT, INSERT, UPDATE, JOIN)",
      "CRUD Operations sederhana",
    ],
  },
  {
    id: 4,
    level: "Intermediate",
    title: "Advanced Backend Concepts",
    icon: <Server className="w-6 h-6" />,
    desc: "Meningkatkan performa, keamanan, dan arsitektur aplikasi.",
    details: [
      "Authentication & Authorization (JWT, OAuth2)",
      "Caching Strategies (Redis)",
      "ORM (Prisma, TypeORM, GORM)",
      "NoSQL Databases (MongoDB)",
      "WebSockets untuk Real-time communication",
    ],
  },
  {
    id: 5,
    level: "Intermediate",
    title: "Testing & Deployment",
    icon: <GitBranch className="w-6 h-6" />,
    desc: "Menjamin kualitas kode dan mengirimkannya ke production.",
    details: [
      "Unit Testing (Jest/Mocha)",
      "Integration Testing",
      "CI/CD Pipelines (GitHub Actions)",
      "Containerization (Docker)",
      "Basic Linux Command Line",
    ],
  },
  {
    id: 6,
    level: "Expert",
    title: "Scalability & System Design",
    icon: <Cpu className="w-6 h-6" />,
    desc: "Membangun sistem yang menangani jutaan request.",
    details: [
      "Microservices Architecture",
      "Message Brokers (RabbitMQ, Kafka)",
      "Load Balancing & Reverse Proxy (Nginx)",
      "System Design Patterns",
      "GraphQL vs gRPC",
    ],
  },
  {
    id: 7,
    level: "Expert",
    title: "Cloud & Security",
    icon: <Cloud className="w-6 h-6" />,
    desc: "Infrastruktur skala besar dan keamanan tingkat lanjut.",
    details: [
      "AWS / GCP / Azure Services",
      "Kubernetes (K8s) Orchestration",
      "Serverless Architecture",
      "OWASP Top 10 Security",
      "Observability (Logging, Monitoring, Tracing)",
    ],
  },
];
interface DetailModalProps {
  item: any;
  onClose: () => void;
}
const DetailModal = ({ item, onClose }: DetailModalProps) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    tl.fromTo(
      contentRef.current,
      { scale: 0.5, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.2"
    );
  });

  const handleClose = () => {
    // Animasi Keluar
    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(contentRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 20,
      duration: 0.3,
    });
    tl.to(overlayRef.current, { 
      opacity: 0, 
      duration: 0.2,
      ease: "powr1.out" 
    }, "-=0.1");
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        ref={overlayRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
      ></div>

      <div
        ref={contentRef}
        className="relative w-full max-w-lg border border-cyan-500/50 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden z-10"
      >
        {/* Header Modal */}
        <div className="flex items-center justify-between p-6 bg-slate-800/50 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${
                item.level === "Beginner"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : item.level === "Intermediate"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-purple-500/20 text-purple-400"
              }`}
            >
              {item.icon}
            </div>
            <div>
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  item.level === "Beginner"
                    ? "text-emerald-400"
                    : item.level === "Intermediate"
                    ? "text-blue-400"
                    : "text-purple-400"
                }`}
              >
                {item.level} Phase
              </span>
              <h3 className="text-xl font-bold text-white font-mono">
                {item.title}
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-slate-800 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body Modal */}
        <div className="p-6">
          <p className="text-slate-300 mb-6 font-light leading-relaxed">
            {item.desc}
          </p>

          <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-widest border-b border-cyan-500/30 pb-2 inline-block">
            Modul Pembelajaran
          </h4>
          <ul className="space-y-3">
            {item.details.map((detail: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-slate-200 group"
              >
                <ChevronRight className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="font-mono text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Modal */}
        <div className="p-4 bg-slate-950/50 text-center border-t border-cyan-500/20">
          <p className="text-xs text-slate-500 font-mono">
            SYSTEM_ID: B-END-{item.id} // SECURE_CONNECTION_ESTABLISHED
          </p>
        </div>
      </div>
    </div>
  );
};

// --- ROADMAP CARD COMPONENT ---
interface RoadmapCardProps {
  item: any;
  index: number;
  onSelect: (item: any) => void;
}
const RoadmapCard = ({ item, index, onSelect }: RoadmapCardProps) => {
  const cardRef = useRef(null);
  const dotRef = useRef(null);

  const isEven = index % 2 === 0;
  const isBeginner = item.level === "Beginner";
  const isExpert = item.level === "Expert";

  // Styles
  const borderColor = isBeginner
    ? "border-emerald-500/30"
    : isExpert
    ? "border-purple-500/30"
    : "border-blue-500/30";
  const glowText = isBeginner
    ? "text-emerald-400"
    : isExpert
    ? "text-purple-400"
    : "text-blue-400";
  const dotColor = isBeginner
    ? "bg-emerald-500"
    : isExpert
    ? "bg-purple-500"
    : "bg-blue-500";
  const dotBorder = isBeginner
    ? "border-emerald-500"
    : isExpert
    ? "border-purple-500"
    : "border-blue-500";

  // GSAP Hover Handlers
  const handleMouseEnter = () => {
    if (!window.gsap || !cardRef.current) return;

    window.gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      boxShadow: `0 20px 40px -10px ${
        isBeginner
          ? "rgba(16, 185, 129, 0.2)"
          : isExpert
          ? "rgba(168, 85, 247, 0.2)"
          : "rgba(59, 130, 246, 0.2)"
      }`,
      borderColor: isBeginner
        ? "rgb(52, 211, 153)"
        : isExpert
        ? "rgb(192, 132, 252)"
        : "rgb(96, 165, 250)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!window.gsap || !cardRef.current) return;

    window.gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "none",
      borderColor: isBeginner
        ? "rgba(16, 185, 129, 0.3)"
        : isExpert
        ? "rgba(168, 85, 247, 0.3)"
        : "rgba(59, 130, 246, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      className={`roadmap-item relative flex items-center md:justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row mb-16 md:mb-32 opacity-0`}
    >
      {/* Timeline Dot */}
      <div
        ref={dotRef}
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 items-center justify-center z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${dotBorder}`}
      >
        <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
      </div>

      <div className="hidden md:block w-5/12"></div>

      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        {/* Mobile Dot */}
        <div
          className={`md:hidden absolute left-[13px] top-8 w-4 h-4 rounded-full border-2 z-20 ${dotBorder}`}
        ></div>

        <Card
          ref={cardRef}
          onClick={() => onSelect(item)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`
            group relative bg-slate-900/80 hover:scale-110 transition-all duration-500 backdrop-blur-md border ${borderColor} px-2 py-4 rounded-2xl cursor-pointer 
            transform-gpu
          `}
        >
          <CardContent>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-current opacity-30 group-hover:opacity-100 transition-opacity rounded-tr-lg text-slate-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-current opacity-30 group-hover:opacity-100 transition-opacity rounded-bl-lg text-slate-500"></div>

            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-lg bg-slate-800 group-hover:scale-105 transition-all duration-200 ${glowText}`}
              >
                {item.icon}
              </div>
              <span
                className={`text-xs font-mono px-2 py-1 rounded border ${borderColor} bg-slate-800/50 ${glowText}`}
              >
                {item.level}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-300 text-sm mb-2">{item.desc}</p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center text-xs font-mono text-slate-500 group-hover:text-white transition-colors">
              <Button className="bg-transparent group-hover:text-white hover:scale-105 transition-all duration-200">
                VIEW MODULES
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const RoadmapSection = () => {
  const [selectedItem, setSelectedItem] = useState<roadmapDataProps | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger); // FIX 1

    const ctx = gsap.context(() => {
      // FIX 2
      // Header Animation
      gsap.from(".header-element", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Line Drawing Animation
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".roadmap-container",
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Card Stagger Animations
      const cards = gsap.utils.toArray<HTMLElement>(".roadmap-item");
      cards.forEach((card: HTMLElement, index: number) => {
        const isEven = index % 2 === 0;
        const xStart = isEven ? -100 : 100;

        gsap.fromTo(
          card,
          { opacity: 0, x: xStart, y: 50 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-slate-200 font-sans pb-20 overflow-x-hidden"
    >
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-400/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* <div className="header-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SYSTEM ONLINE V.15.0 // GSAP ACTIVATED
            </div> */}

          <h1 className="header-element text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Backend{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-purple-500">
              Developer
            </span>{" "}
            Roadmap
          </h1>

          <p className="header-element text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            lacus convallis, lacinia erat a, congue mi. In sed mauris lacinia,
            facilisis nibh et, tincidunt ante. Vivamus condimentum mollis
            scelerisque.
          </p>
        </div>

        {/* Roadmap Container */}
        <div className="roadmap-container relative">
          {/* Vertical Line (Central Spine) */}
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-400 to-purple-500 origin-top md:-translate-x-1/2 rounded-full"></div>

          <div className="flex flex-col relative">
            {roadmapData.map((item, index) => (
              <RoadmapCard
                key={item.id}
                item={item}
                index={index}
                onSelect={setSelectedItem}
              />
            ))}
          </div>

          {/* End of Line Decoration */}
          <div className="absolute left-4 md:left-1/2 -bottom-10 -translate-x-1/2 flex flex-col items-center opacity-50">
            {/* <div className="w-1 h-5 bg-gradient-to-b from-purple-800 from-50% to-purple-400"></div> */}
            <div className="text-slate-600 font-mono text-xs mt-2">
              END OF LINE
            </div>
          </div>
        </div>
      </div>

      {/* Render Modal if item selected */}
      {selectedItem && (
        <DetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default RoadmapSection;

import React, { useState, useEffect, useRef } from 'react';
import { 
  Layout, 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Zap, 
  Box, 
  X, 
  ChevronRight, 
  Layers 
} from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- DATA ROADMAP FRONTEND ---
const roadmapData = [
  {
    id: 1,
    level: "Beginner",
    title: "Internet & Dasar Web",
    icon: <Globe className="w-6 h-6" />,
    desc: "Memahami bagaimana web bekerja adalah langkah pertama.",
    details: [
      "Cara kerja Internet (DNS, Domain, Hosting)",
      "HTTP/HTTPS, Browser & Mesin Render",
      "HTML5 Semantic & Struktur Dokumen",
      "CSS3 Dasar (Box Model, Flexbox, Grid)",
      "Web Accessibility (WAI-ARIA)"
    ]
  },
  {
    id: 2,
    level: "Beginner",
    title: "JavaScript & Version Control",
    icon: <Code className="w-6 h-6" />,
    desc: "Bahasa pemrograman utama web dan manajemen kode.",
    details: [
      "Syntax Dasar, Variabel, Tipe Data",
      "DOM Manipulation & Events",
      "ES6+ Features (Arrow Functions, Destructuring)",
      "Async JavaScript (Promises, Async/Await)",
      "Git Basic (Clone, Branch, Merge, Pull Request)"
    ]
  },
  {
    id: 3,
    level: "Intermediate",
    title: "Modern CSS & Frameworks",
    icon: <Palette className="w-6 h-6" />,
    desc: "Membuat tampilan cantik dengan lebih cepat dan efisien.",
    details: [
      "CSS Preprocessors (Sass/SCSS)",
      "Tailwind CSS (Utility-first approach)",
      "CSS Modules & Styled Components",
      "Responsive Design & Media Queries",
      "Animations & Transitions (CSS/Framer Motion)"
    ]
  },
  {
    id: 4,
    level: "Intermediate",
    title: "JavaScript Frameworks (React)",
    icon: <Layout className="w-6 h-6" />,
    desc: "Membangun antarmuka pengguna yang interaktif dan berbasis komponen.",
    details: [
      "React Basics (JSX, Components, Props)",
      "Hooks (useState, useEffect, custom hooks)",
      "State Management (Redux Toolkit / Zustand)",
      "Routing (React Router)",
      "API Integration (Fetch / Axios / React Query)"
    ]
  },
  {
    id: 5,
    level: "Expert",
    title: "Meta Frameworks & SSR",
    icon: <Layers className="w-6 h-6" />,
    desc: "Meningkatkan performa dan SEO dengan rendering di server.",
    details: [
      "Next.js (App Router, Server Components)",
      "Server Side Rendering (SSR) vs Static (SSG)",
      "API Routes & Server Actions",
      "Middleware & Authentication (NextAuth)",
      "Optimization (Images, Fonts, Scripts)"
    ]
  },
  {
    id: 6,
    level: "Expert",
    title: "Type Safety & Testing",
    icon: <Box className="w-6 h-6" />,
    desc: "Menulis kode yang lebih aman dan bebas bug.",
    details: [
      "TypeScript (Interfaces, Types, Generics)",
      "Unit Testing (Jest / Vitest)",
      "Integration Testing (React Testing Library)",
      "E2E Testing (Cypress / Playwright)",
      "Debugging & Performance Profiling"
    ]
  },
  {
    id: 7,
    level: "Expert",
    title: "PWA & Modern Web APIs",
    icon: <Smartphone className="w-6 h-6" />,
    desc: "Membawa pengalaman aplikasi native ke dalam browser.",
    details: [
      "Progressive Web Apps (Manifest, Service Workers)",
      "Local Storage, Session Storage, Cookies",
      "WebSockets for Real-time",
      "Geolocation & Camera APIs",
      "Web Assembly (Wasm) Basics"
    ]
  }
];

// --- MODAL COMPONENT ---
interface DetailModalProps {
    item: any,
    onClose: () => void;
}

const DetailModal = ({ item, onClose } : DetailModalProps) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Animasi Masuk (Pop Up)
    const tl = gsap.timeline();
    
    tl.fromTo(overlayRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3 }
    )
    tl.fromTo(contentRef.current, 
      { scale: 0.5, opacity: 0, y: 50 }, 
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.2"
    );

  }, []);

  const handleClose = () => {

    // Animasi Keluar
    const tl = gsap.timeline({
      onComplete: onClose
    });

    tl.to(contentRef.current, { scale: 0.8, opacity: 0, y: 20, duration: 0.3 })
      tl.to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
  };

  return (
    <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        ref={overlayRef}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
      ></div>
      
      <div 
        ref={contentRef}
        className="relative w-full max-w-lg bg-white border-2 border-blue-500 rounded-2xl shadow-2xl overflow-hidden z-10"
      >
        {/* Header Modal - Blue Theme */}
        <div className="flex items-center justify-between p-6 bg-blue-600 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/20 text-white backdrop-blur-sm">
              {item.icon}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                {item.level} Level
              </span>
              <h3 className="text-xl font-bold font-sans">{item.title}</h3>
            </div>
          </div>
          <button 
            onClick={handleClose} 
            className="p-2 text-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body Modal */}
        <div className="p-6 bg-white">
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">{item.desc}</p>
          
          <h4 className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-widest border-b-2 border-blue-100 pb-2 inline-block">
            Materi Pembelajaran
          </h4>
          <ul className="space-y-3">
            {item.details.map((detail: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 group">
                <div className="mt-1 p-1 rounded-full bg-blue-100 text-blue-600">
                   <Zap className="w-3 h-3" />
                </div>
                <span className="font-medium text-sm group-hover:text-blue-700 transition-colors">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Modal */}
        <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400 font-mono">
            MODULE_ID: FE-{item.id} // STATUS: READY
          </p>
        </div>
      </div>
    </div>
  );
};

// --- ROADMAP CARD COMPONENT ---
interface RoadmapCardProps {
    item: any,
    index: number,
    onSelect: (item: any) => void;
}

const RoadmapCard = ({ item, index, onSelect} : RoadmapCardProps) => {
  const cardRef = useRef(null);
  
  const isEven = index % 2 === 0;

  // Colors based on level for badges
  const badgeColor = item.level === 'Beginner' ? 'bg-emerald-100 text-emerald-700' :
                     item.level === 'Intermediate' ? 'bg-sky-100 text-sky-700' :
                     'bg-indigo-100 text-indigo-700';

  // GSAP Hover Handlers
  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)', // Blue shadow
      rotation: isEven ? 1 : -1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div className={`roadmap-item relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row mb-16 md:mb-32 opacity-0`}>
      
      {/* Timeline Dot (Center) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-500 items-center justify-center z-20 shadow-lg">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
      </div>

      <div className="hidden md:block w-5/12"></div>

      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        
        {/* Mobile Dot */}
        <div className="md:hidden absolute left-[13px] top-8 w-5 h-5 rounded-full border-4 border-blue-500 z-20 bg-white"></div>

        <div 
          ref={cardRef}
          onClick={() => onSelect(item)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`
            group relative p-6 rounded-2xl cursor-pointer shadow-xl
            transform-gpu border-2 border-blue-300/50 overflow-hidden
            bg-gradient-to-br from-blue-400 to-blue-600
          `}
        >
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-300 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/20 shadow-inner">
                {item.icon}
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${badgeColor} shadow-sm border border-white/20`}>
                {item.level}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-blue-50 text-sm mb-5 font-medium opacity-90 leading-relaxed">
              {item.desc}
            </p>

            <div className="flex items-center text-xs font-bold text-blue-600 bg-white w-fit px-3 py-2 rounded-lg group-hover:bg-blue-50 transition-all shadow-sm">
              <span>LIHAT DETAIL</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const RoadmapFrontend = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [gsapReady, setGsapReady] = useState(false);
  const containerRef = useRef(null);

  // 2. Setup Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setGsapReady(true);
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".header-element", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });

      // Line Drawing Animation
      gsap.fromTo(".timeline-line", 
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: ".roadmap-container",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
          }
        }
      );

      // Card Animations
      const cards = document.querySelectorAll('.roadmap-item');
      cards.forEach((card, i) => {
        const isEven = i % 2 === 0;
        const xStart = isEven ? -100 : 100;
        
        gsap.fromTo(card, 
          { opacity: 0, x: xStart, y: 50 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20 overflow-x-hidden">
      
      {/* Background Grid Pattern (Light) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30" 
           style={{ 
             backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }}>
      </div>
      
      {/* Top Gradient Blob */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="header-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest mb-6 border border-blue-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            FRONTEND PATH V.3.0
          </div>
          
          {/* TITLE WARNA BLUE-800 */}
          <h1 className="header-element text-4xl md:text-6xl font-black text-blue-800 mb-6 tracking-tight">
            FRONTEND <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">DEVELOPER</span> ROADMAP
          </h1>
          
          <p className="header-element text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Panduan lengkap dari HTML dasar hingga membangun aplikasi web modern yang kompleks dan performa tinggi.
          </p>
        </div>

        {/* Roadmap Container */}
        <div className="roadmap-container relative">
          
          {/* Vertical Line (Spine) - Blue */}
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-1.5 bg-blue-200 origin-top md:-translate-x-1/2 rounded-full"></div>

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
          
          {/* End of Level Decoration */}
          <div className="absolute left-4 md:left-1/2 -bottom-16 -translate-x-1/2 flex flex-col items-center">
             <div className="w-1.5 h-16 bg-gradient-to-b from-blue-200 to-transparent"></div>
             <div className="text-blue-400 font-bold text-xs mt-2 uppercase tracking-widest">Journey Continues...</div>
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

export default RoadmapFrontend;
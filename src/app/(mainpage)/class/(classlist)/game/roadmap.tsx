import React, { useState, useEffect, useRef } from 'react';
import { 
  Gamepad2, 
  Calculator, 
  Box, 
  Layers, 
  Zap, 
  Wifi, 
  Cpu, 
  X, 
  ChevronRight, 
  MonitorPlay 
} from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- DATA ROADMAP GAME DEV ---
const roadmapData = [
  {
    id: 1,
    level: "Beginner",
    title: "Dasar Pemrograman & Logika Game",
    icon: <Calculator className="w-6 h-6" />,
    desc: "Fondasi logika dan matematika yang krusial untuk game.",
    details: [
      "Bahasa: C# (Unity) atau C++ (Unreal)",
      "OOP: Class, Inheritance, Polymorphism",
      "Matematika Vektor (Dot/Cross Product)",
      "Trigonometri Dasar & Koordinat (2D/3D)",
      "Game Loop Concept (Update, FixedUpdate)"
    ]
  },
  {
    id: 2,
    level: "Beginner",
    title: "Pengenalan Game Engine",
    icon: <Box className="w-6 h-6" />,
    desc: "Memahami tools dan workflow dalam membuat scene pertama.",
    details: [
      "Unity / Unreal / Godot Interface",
      "Scene Management & Hierarki Objek",
      "Prefab & Blueprint System",
      "Input System (Keyboard, Mouse, Gamepad)",
      "Basic Physics (Rigidbody, Collider, Gravity)"
    ]
  },
  {
    id: 3,
    level: "Intermediate",
    title: "Gameplay Mechanics & Design",
    icon: <Gamepad2 className="w-6 h-6" />,
    desc: "Membuat game terasa menyenangkan dan interaktif.",
    details: [
      "Character Controllers (Movement, Jump)",
      "Collision Detection & Triggers",
      "Animation Controllers & State Machines",
      "UI/UX (Health bar, Menu, Inventory)",
      "Audio System (SFX & BGM)"
    ]
  },
  {
    id: 4,
    level: "Intermediate",
    title: "Design Patterns & Architecture",
    icon: <Layers className="w-6 h-6" />,
    desc: "Menulis kode yang bersih, modular, dan mudah di-maintain.",
    details: [
      "Singleton Pattern (GameManager)",
      "Observer Pattern (Event System)",
      "Object Pooling (Optimasi Spawn)",
      "Factory Pattern",
      "Scriptable Objects (Data Management)"
    ]
  },
  {
    id: 5,
    level: "Expert",
    title: "Graphics & Shaders",
    icon: <MonitorPlay className="w-6 h-6" />,
    desc: "Menciptakan visual yang memukau dan efek khusus.",
    details: [
      "Shader Graph / HLSL / GLSL",
      "Particle Systems (VFX)",
      "Lighting & Post-Processing",
      "Render Pipelines (URP/HDRP)",
      "Material Optimization"
    ]
  },
  {
    id: 6,
    level: "Expert",
    title: "AI & Pathfinding",
    icon: <Cpu className="w-6 h-6" />,
    desc: "Membuat NPC cerdas yang bisa berinteraksi dengan pemain.",
    details: [
      "NavMesh & A* Pathfinding",
      "Finite State Machines (FSM)",
      "Behavior Trees",
      "Steering Behaviors",
      "Procedural Generation Basics"
    ]
  },
  {
    id: 7,
    level: "Expert",
    title: "Multiplayer & Networking",
    icon: <Wifi className="w-6 h-6" />,
    desc: "Menghubungkan pemain di seluruh dunia secara real-time.",
    details: [
      "Client-Server Architecture",
      "Latency, Lag Compensation, Interpolation",
      "Replication & State Synchronization",
      "Backend Services (PlayFab, Firebase)",
      "Netcode for GameObjects / Mirror / Photon"
    ]
  }
];

// --- MODAL COMPONENT (GSAP ANIMATED) ---
interface DetailModalProps {
    item: any;
    onClose: () => void;
}

const DetailModal = ({ item, onClose,}: DetailModalProps) => {
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
    .fromTo(contentRef.current, 
      { scale: 0.5, opacity: 0, y: 50 }, 
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.2"
    );

  });

  const handleClose = () => {
    // Animasi Keluar
    const tl = gsap.timeline({
      onComplete: onClose
    });

    tl.to(contentRef.current, { 
        scale: 0.8, 
        opacity: 0, 
        y: 20, 
        duration: 0.3 
    })
      tl.to(overlayRef.current, { 
        opacity: 0, 
        duration: 0.2 
    }, "-=0.1");
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
        className="relative w-full max-w-lg bg-white border-2 border-purple-800 rounded-2xl shadow-2xl overflow-hidden z-10"
      >
        {/* Header Modal - Purple Theme */}
        <div className="flex items-center justify-between p-6 bg-purple-600 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/20 text-white backdrop-blur-sm">
              {item.icon}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                {item.level} Level
              </span>
              <h3 className="text-xl font-bold font-sans">{item.title}</h3>
            </div>
          </div>
          <button 
            onClick={handleClose} 
            className="p-2 text-purple-100 hover:text-white hover:bg-purple-500 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body Modal */}
        <div className="p-6 bg-white">
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">{item.desc}</p>
          
          <h4 className="text-sm font-bold text-purple-600 mb-4 uppercase tracking-widest border-b-2 border-purple-100 pb-2 inline-block">
            Quest Log / Materi
          </h4>
          <ul className="space-y-3">
            {item.details.map((detail: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 group">
                <div className="mt-1 p-1 rounded-full bg-purple-100 text-purple-600">
                   <Zap className="w-3 h-3" />
                </div>
                <span className="font-medium text-sm group-hover:text-purple-700 transition-colors">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Modal */}
        <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400 font-mono">
            QUEST_ID: GD-{item.id} // STATUS: UNLOCKED
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
  
  const isEven = index % 2 === 0;

  // Colors based on level for badges
  const badgeColor = item.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                     item.level === 'Intermediate' ? 'bg-orange-100 text-orange-700' :
                     'bg-red-100 text-red-700';

  // GSAP Hover Handlers
  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.25)', // Purple shadow
      rotation: isEven ? 1 : -1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {

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
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-purple-600 items-center justify-center z-20 shadow-lg">
          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      </div>

      <div className="hidden md:block w-5/12"></div>

      <div className="w-full md:w-5/12 pl-12 md:pl-0">
        
        {/* Mobile Dot */}
        <div className="md:hidden absolute left-[13px] top-8 w-5 h-5 rounded-full border-4 border-purple-400 z-20 bg-white"></div>

        <div 
          ref={cardRef}
          onClick={() => onSelect(item)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`
            group relative bg-purple-600/80 p-6 rounded-2xl cursor-pointer shadow-xl
            transform-gpu border-2 border-purple-700/50 overflow-hidden
          `}
        >
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/20 shadow-inner">
                {item.icon}
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${badgeColor} shadow-sm`}>
                {item.level}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
              {item.title}
            </h3>
            <p className="text-purple-100 text-sm mb-5 font-medium opacity-90">
              {item.desc}
            </p>

            <div className="flex items-center text-xs font-bold text-white bg-black/20 w-fit px-3 py-2 rounded-lg group-hover:bg-white group-hover:text-purple-600 transition-all">
              <span>START QUEST</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const RoadmapGameDev = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [gsapReady, setGsapReady] = useState(false);
  const containerRef = useRef(null);

  // 2. Setup Animations
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger); 

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
    <div ref={containerRef} className="min-h-screen bg-white text-slate-800 font-sans pb-20 overflow-x-hidden">
      
      {/* Background Grid Pattern (Light) */}
      
      
      {/* Top Gradient Blob */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-100/50 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* <div className="header-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-widest mb-6 border border-purple-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            GAME DEV PATH V.2.0
          </div> */}
          
          <h1 className="header-element text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            GAME <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-400">DEVELOPER</span> ROADMAP
          </h1>
          
          <p className="header-element text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            lacus convallis, lacinia erat a, congue mi. In sed mauris lacinia,
            facilisis nibh et, tincidunt ante. Vivamus condimentum mollis
            scelerisque.
          </p>
        </div>

        {/* Roadmap Container */}
        <div className="roadmap-container relative">
          
          {/* Vertical Line (Spine) - Purple */}
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-1.5 bg-purple-200 origin-top md:-translate-x-1/2 rounded-full"></div>

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
             <div className="w-1.5 h-16 bg-gradient-to-b from-purple-200 to-transparent"></div>
             <div className="text-purple-400 font-bold text-xs mt-2 uppercase tracking-widest">END OF LINE</div>
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

export default RoadmapGameDev;
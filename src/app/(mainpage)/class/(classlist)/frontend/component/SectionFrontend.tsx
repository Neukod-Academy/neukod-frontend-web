"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface CheckIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const Check: React.FC<CheckIconProps> = ({
  size = 24,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// --- Component ---

const FrontendSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  // We initialize the array ref to store multiple elements
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Helper to add elements to the ref array
  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // GSAP Context ensures animations are cleaned up properly when component unmounts
    const ctx = gsap.context(() => {
      // 1. Image Area Entrance
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 2. Floating Cards Animation
      if (cardsRef.current.length > 0) {
        cardsRef.current.forEach((card, i) => {
          // Entrance
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.5 + i * 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
              },
            }
          );

          // Continuous Float
          gsap.to(card, {
            y: -10,
            duration: 2 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5, // Start floating after entrance finishes
          });
        });
      }

      // 3. Text Content Entrance
      if (textRef.current) {
        // We select the direct children of the text container
        const textElements = textRef.current.children;
        gsap.fromTo(
          textElements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, containerRef); // Scope to container

    return () => ctx.revert(); // Cleanup
  }, []);

  // Button Interaction Handlers
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        backgroundColor: "#4c4186",
        duration: 0.3,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        backgroundColor: "#5D50A2",
        duration: 0.3,
        ease: "power1.out",
      });
    }
  };

  const features = ["World-class", "Flexible", "Affordable", "Job-relevant"];

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetSection = document.querySelector("#frontend-categories");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center py-20 bg-white overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT COLUMN: Image & Shapes */}
          <div
            className="relative w-full lg:w-1/2 flex justify-center"
            ref={imageRef}
          >
            {/* Decorative Background Shapes */}
            <div className="relative w-[350px] h-[400px] sm:w-[400px] sm:h-[450px]">
              {/* Purple Shape (Back Left) */}
              <div className="absolute bottom-0 left-0 w-3/4 h-[85%] bg-[#5D50A2] rounded-tl-[3rem] rounded-bl-[3rem] -z-10 transform -translate-x-4 translate-y-4"></div>

              {/* Green Shape (Back Right) */}
              <div className="absolute top-0 right-0 w-3/4 h-[90%] bg-[#6FCF97] rounded-tr-[3rem] rounded-br-[3rem] -z-20 transform translate-x-4 -translate-y-4"></div>

              {/* Main Image */}
              <div className="w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl relative z-10 bg-gray-200">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Man holding phone"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Card 1 (Top) */}
              <div
                ref={addToCardsRef}
                className="absolute top-12 -right-8 sm:-right-16 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-20 w-48 border border-gray-50"
              >
                <div className="flex gap-3 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>

              {/* Floating Card 2 (Bottom) */}
              <div
                ref={addToCardsRef}
                className="absolute bottom-20 -right-4 sm:-right-12 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 w-48 border border-gray-50"
              >
                <div className="flex gap-3 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#5D50A2] flex-shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full lg:w-1/2" ref={textRef}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2B4A] mb-6 leading-tight">
              Why We Learn <br />
              From <span className="text-blue-800">Neukod</span> Frontend course
              ?
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
              Neukod is a Global training provider based across the INA that
              specialises in accredited and bespoke training courses. We crush
              the barriers to getting a degree.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6FCF97] flex items-center justify-center text-white">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span className="text-[#2D2B4A] font-medium text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleScrollDown}
              className="bg-[#5D50A2] text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/30 transform transition-transform"
            >
              View Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export for the preview environment
export default FrontendSection;

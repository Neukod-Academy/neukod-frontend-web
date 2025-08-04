"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap"
import Testi1 from "../../../images/career-track/testimoni/testi1.jpeg";
import Testi2 from "../../../images/career-track/testimoni/testi2.jpeg";
import Testi3 from "../../../images/career-track/testimoni/testi3.jpeg";
import Testi4 from "../../../images/career-track/testimoni/testi4.jpeg";
import Testi5 from "../../../images/career-track/testimoni/testi5.jpeg";

// Sample testimonial data - replace with your actual student testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: Testi1,
    quote:
      "This course completely transformed my understanding of web development. The instructor's teaching style made complex concepts easy to grasp.",
    course: "Full Stack Development",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: Testi2,
    quote:
      "I went from zero coding knowledge to building my own applications. The hands-on projects were incredibly valuable for my learning journey.",
    course: "JavaScript Fundamentals",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: Testi3,
    quote:
      "The course structure was perfect for working professionals. I could learn at my own pace while getting real-world experience.",
    course: "React Development",
  },
  {
    id: 4,
    name: "David Thompson",
    image: Testi4,
    quote:
      "Outstanding content and support from the community. This course helped me transition into a tech career successfully.",
    course: "Python for Beginners",
  },
  {
    id: 5,
    name: "Lisa Park",
    image: Testi5,
    quote:
      "The practical approach and real-world projects made all the difference. I'm now confident in my development skills.",
    course: "UI/UX Design",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>();

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // GSAP Animation function - much cleaner!
  const animateTransition = (newIndex: number, direction: "next" | "prev") => {
    if (isAnimating || !imageRef.current || !contentRef.current) return;

    setIsAnimating(true);
    const exitX = direction === "next" ? -100 : 100;
    const enterX = direction === "next" ? 100 : -100;

    // Kill any existing timeline
    timelineRef.current?.kill();

    // Create new GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      },
    });

    // Exit animation
    tl.to([imageRef.current, contentRef.current], {
      x: exitX,
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      stagger: 0.2,
    })

      // Update content in the middle of animation
      .call(() => setDisplayIndex(newIndex))

      // Set starting position for entrance
      .set([imageRef.current, contentRef.current], {
        x: enterX,
        scale: 0.8,
        opacity: 0,
      })

      // Entrance animation
      .to([imageRef.current, contentRef.current], {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
        stagger: 0.1,
      },"+=0.4");

    timelineRef.current = tl;
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    animateTransition(newIndex, "next");
  };

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    animateTransition(newIndex, "prev");
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    const direction = index > currentIndex ? "next" : "prev";
    animateTransition(index, direction);
  };

  // Cleanup GSAP timeline on unmount
  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  const currentTestimonial = testimonials[displayIndex];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Our Students Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from students who have transformed their careers through our
          courses
        </p>
      </div>

      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />

        <div className="relative z-10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <div ref={imageRef} className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20" />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full opacity-20" />
              </div>
            </div>

            {/* Content Section */}
            <div ref={contentRef} className="text-center md:text-left">
              <Quote className="w-12 h-12 text-blue-500 mb-6 mx-auto md:mx-0" />

              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentTestimonial.name}
                </h3>
                <p className="text-blue-600 font-medium">
                  {currentTestimonial.course}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stylish Navigation Buttons */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <button
            className="group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            onClick={handlePrev}
            disabled={isAnimating}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 group-active:animate-ping" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <ChevronLeft className="w-6 h-6 text-white group-hover:translate-x-[-2px] transition-transform duration-200" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
          </button>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
          <button
            className="group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            onClick={handleNext}
            disabled={isAnimating}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 group-active:animate-ping" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-[2px] transition-transform duration-200" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`relative overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125"
            }`}
            onClick={() => handleDotClick(index)}
            disabled={isAnimating}
          >
            {index === currentIndex && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};
export default TestimonialSection;

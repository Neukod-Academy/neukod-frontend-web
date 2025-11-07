"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Users,
  Code,
  MessageSquare,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";
import PythonImage from "@/app/images/class/backend/python-class.jpg";
import { AnimatedLink } from "@/app/components/AnimatedLink";

const PythonClass = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Timeline for animations
    const tl = gsap.timeline();

    // Hero image fade in and slide from left
    if (heroImageRef.current) {
      gsap.set(heroImageRef.current, { opacity: 0, x: -50 });
      tl.to(heroImageRef.current, { opacity: 1, x: 0, duration: 0.8 }, 0);
    }

    // Title fade in and slide from left
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2);
    }

    // Button scale and fade in
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 });
      tl.to(buttonRef.current, { opacity: 1, scale: 1, duration: 0.6 }, 0.4);
    }

    // Feature cards stagger animation
    if (featureCardsRef.current) {
      const cards = featureCardsRef.current.querySelectorAll(".feature-card");
      gsap.set(cards, { opacity: 0, y: 20 });
      tl.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.6);
    }

    // Testimonials cards animation
    if (testimonialsRef.current) {
      const testimonials =
        testimonialsRef.current.querySelectorAll(".testimonial-card");
      gsap.set(testimonials, { opacity: 0, scale: 0.9 });
      tl.to(
        testimonials,
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15 },
        1.2
      );
    }

    // FAQ items animation
    if (faqItemsRef.current) {
      const faqItems = faqItemsRef.current.querySelectorAll(".faq-item");
      gsap.set(faqItems, { opacity: 0, x: -20 });
      tl.to(faqItems, { opacity: 1, x: 0, duration: 0.5, stagger: 0.08 }, 1.6);
    }

    // Hover animation for buttons
    const buttons = containerRef.current.querySelectorAll(".gradient-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div
              ref={heroImageRef}
              className="flex justify-center md:justify-start"
            >
              <Image
                src={PythonImage}
                alt="Course Python preview"
                className="w-[500px] h-[400px] max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium">4.7</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Python Basic Course Path
                </span>
              </div>

              {/* Title */}
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight"
              >
                Learn Python basic programming
              </h1>

              {/* Course Meta */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Entry Level</span>
                  <span className="text-gray-600">⏱ 11 hour study</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={16} />
                  <span>1.000+ Registered student</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur neque nisi, faucibus id luctus eu, congue ac lorem.
                Etiam id justo eu felis blandit pulvinar. Duis ut consequat leo,
                bibendum ornare libero. Proin ultrices accumsan diam, id
                suscipit nisi sagittis non.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  ref={buttonRef}
                  className="gradient-btn px-8 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  Learn Now
                </button>
                <button className="px-8 py-3 text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-blue-800">
            What you get
          </h2>

          <div
            ref={featureCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Award,
                title: "Certificate",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque nisi, faucibus id luctus eu, congue ac lorem.",
              },
              {
                icon: Code,
                title: "Code Review",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque nisi, faucibus id luctus eu, congue ac lorem.",
              },
              {
                icon: MessageSquare,
                title: "Discussion Forum",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque nisi, faucibus id luctus eu, congue ac lorem.",
              },
              {
                icon: BookOpen,
                title: "Module",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque nisi, faucibus id luctus eu, congue ac lorem.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <feature.icon size={32} className="text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              neque nisi, faucibus id luctus eu, congue ac lorem.
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">
                What will be studied :
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur neque nisi, faucibus id luctus eu, congue ac lorem.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur neque nisi, faucibus id luctus eu, congue ac lorem.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur neque nisi, faucibus id luctus eu, congue ac lorem.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">
              Preparation for Studying :
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium">Prosesor</p>
                <p>Intel Celeron (Rekomendasi Core i5 ++ Ghz)</p>
              </div>
              <div>
                <p className="font-medium">Tools yang Dibutuhkan</p>
                <p>Web Browser (Google Chrome or Mozilla Firefox)</p>
              </div>
              <div>
                <p className="font-medium">Methodologies</p>
                <p>Online - Self-paced Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Student testimonials
          </h2>

          <div
            ref={testimonialsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                name: "Muhammad Zaldun Ilhamdilah Adi",
                role: "Universitas STIKI Malang",
                content:
                  "Saya sangat puas dengan kelas dasar web ini. Kursus ini memberikan pengatasi komprehensif tentang hal-hal penting dalam pemrograman.",
                rating: 5,
              },
              {
                name: "Suhardi Rismawati Selanson",
                role: "Belajar Dasar Pemrograman",
                content:
                  "Saya sangat terima kasih kepada dua yang memberikan kursus tentang dasar ini. Saya sangat terserap kepada dua untuk mengisi pengetahuannya di kelas in.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="testimonial-card bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Have a question about this class ?
          </h2>

          <div ref={faqItemsRef} className="space-y-4">
            {[
              "Question 1 - Lorem Ipsum?",
              "Question 2 - Lorem Ipsum?",
              "Question 3 - Lorem Ipsum?",
            ].map((question, idx) => (
              <div
                key={idx}
                className="faq-item bg-white p-6 rounded-lg shadow-md border border-gray-200 group"
              >
                <div className="flex justify-between items-start">
                  <AnimatedLink href="">{question}</AnimatedLink>
                  <ArrowRight
                    key={idx}
                    size={25}
                    className="text-blue-500 group-hover:text-blue-600 group-hover:-rotate-45 transition-transform delay-100 duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default PythonClass;

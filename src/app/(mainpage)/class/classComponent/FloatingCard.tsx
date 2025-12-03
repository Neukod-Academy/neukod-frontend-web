"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Layout, Gamepad2, Menu, X, LucideIcon } from 'lucide-react';


interface FloatingHeaderCardProps {
  title: string,
  description: string,
  color: string,
  buttonColor: string,
  icon: LucideIcon,
}

const FloatingHeaderCard = ({
  title,
  description,
  color,
  buttonColor,
  icon: Icon,
} : FloatingHeaderCardProps) => {
  // Card-specific variants for hover effects
  const headerVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, bounce: 0.4 }, // Bouncy entrance like GSAP back.out
    },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      className="relative mt-12 w-full max-w-sm mx-auto"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="bg-white rounded-2xl shadow-xl pb-8 pt-0 px-6 h-full flex flex-col transition-shadow hover:shadow-2xl duration-300">
        {/* Floating Header Block */}
        <div className="relative -mt-12 mb-6 group cursor-pointer">
          <motion.div
            variants={headerVariants}
            className={`h-48 w-full rounded-2xl ${color} shadow-lg flex items-center justify-center text-white relative z-10`}
          >
            <Icon size={64} strokeWidth={1.5} />
          </motion.div>
          {/* Decorative shadow layer behind */}
          <div
            className={`absolute top-4 left-4 right-4 bottom-[-10px] ${color} opacity-40 blur-lg rounded-2xl -z-0`}
          ></div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="font-sans-custom font-bold text-2xl text-slate-800 mb-3">
            {title}
          </h3>
          <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
            {description}
          </p>

          <button
            className={`w-full py-3 rounded-lg font-bold text-sm tracking-wide text-white uppercase shadow-md transition-transform active:scale-95 ${buttonColor}`}
          >
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCards = () => {
  // Stagger the entrance of the cards when scrolling into view
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="px-4 pb-24 max-w-7xl mx-auto">
      <motion.div
        className="grid md:grid-cols-3 gap-8 md:gap-6 pt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Trigger when 100px into view
      >
        {/* Card 1: Backend Class */}
        <FloatingHeaderCard
          title="Backend Class"
          description="Master server-side logic, databases, and API architecture. Build robust systems that power modern applications."
          color="bg-emerald-500"
          buttonColor="bg-emerald-500 hover:bg-emerald-600"
          icon={Database}
        />

        {/* Card 2: Frontend Class */}
        <FloatingHeaderCard
          title="Frontend Class"
          description="Create beautiful, responsive user interfaces. Learn React, Tailwind CSS, and modern state management techniques."
          color="bg-blue-500"
          buttonColor="bg-blue-500 hover:bg-blue-600"
          icon={Layout}
        />

        {/* Card 3: Game Development */}
        <FloatingHeaderCard
          title="Game Development"
          description="Bring virtual worlds to life. Learn physics engines, graphics rendering, and game logic using industry standard tools."
          color="bg-purple-500"
          buttonColor="bg-purple-500 hover:bg-purple-600"
          icon={Gamepad2}
        />
      </motion.div>
    </section>
  );
};

const FloatingCard = () => {
  return (
    <div className="h-fit bg-gray-50 font-sans-custom selection:bg-blue-200">
      <main>
        <FeatureCards />
      </main>
    </div>
  );
};

export default FloatingCard;

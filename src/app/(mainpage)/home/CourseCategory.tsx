"use client";

import React, { useState } from "react";
import { ArrowUpRight, Code, Smartphone, Palette, BarChart, Globe, Database } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// --- MOCK DATA (Pengganti @/app/utils/constant) ---
const categories = [
  {
    title: "Web Development",
    description: "Master modern web technologies like React, Next.js, and Node.js.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Mobile App Dev",
    description: "Build native iOS and Android applications using Flutter and Swift.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful and intuitive user interfaces for web and mobile.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Data Science",
    description: "Analyze data and build machine learning models with Python.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: "Digital Marketing",
    description: "Learn SEO, SEM, and social media strategies to grow businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Cloud Computing",
    description: "Deploy scalable applications using AWS, Azure, and Google Cloud.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "#",
    icon: <Database className="w-6 h-6" />
  },
];

// --- COMPONENTS ---

const Button = ({ children, className, ...props }: any) => (
  <button 
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const CourseCategory = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Varian Animasi Container (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Varian Animasi Item (Scroll Trigger equivalent)
  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
         <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[100px]" 
         />
         <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[100px]" 
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20 space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 border border-blue-200">
            Explore Categories
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Find Your Path in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Technology & Design
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover comprehensive learning paths curated by industry experts. Choose a category below to start your journey.
          </p>
        </motion.div>

        {/* Grid Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-slate-900/0 transition-colors duration-500" />
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                  <div className="text-blue-600">
                    {category.icon}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col relative h-[220px]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Interactive Button */}
                  <a href={category.link} className="relative z-20">
                    <motion.div
                      className="h-12 bg-slate-900 rounded-full text-white flex items-center justify-center overflow-hidden cursor-pointer shadow-lg"
                      initial={{ width: "48px" }}
                      animate={{
                        width: hoveredIndex === index ? "120px" : "48px",
                        backgroundColor: hoveredIndex === index ? "#2563EB" : "#0F172A",
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex items-center justify-center w-full px-4">
                        <ArrowUpRight
                          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                            hoveredIndex === index ? "rotate-45" : ""
                          }`}
                        />
                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.span
                              className="ml-2 text-sm font-semibold whitespace-nowrap"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              Join Now
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </a>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Progress Line Decoration */}
                <div className="mt-auto w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 1, ease: "circOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center mx-auto mt-20"
        >
          <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 rounded-full text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300">
            <span className="mr-2">View All Categories</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCategory;
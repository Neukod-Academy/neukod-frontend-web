"use client";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}
export const AnimatedLink = ({ href, children }: AnimatedLinkProps) => (
  <motion.a
    href={href}
    className="relative inline-block text-slate-900 transition-colors hover:text-blue-700"
    whileHover="hover"
  >
    {children}
    <motion.span
      className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-500 origin-left"
      initial={{ scaleX: 0 }}
      variants={{
        hover: {
          scaleX: 1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        },
      }}
    />
  </motion.a>
);

export const AnimateText = ({ href, children }: AnimatedLinkProps) => (
  <motion.a href={href} className="inline-block"       
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.6 },
  }}
  whileTap={{ scale: 0.9 }}>
    <motion.span
      className="font-bold text-sm md:text-base text-transparent bg-clip-text"
      style={{
        backgroundImage:
          "linear-gradient(to right, #c084fc, #f472b6, #3b82f6, #c084fc)",
        backgroundSize: "200% auto",
      }}
      animate={{ backgroundPosition: "200% center" }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  </motion.a>
);

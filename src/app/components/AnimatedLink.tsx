"use client";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}
export const AnimatedLink = ({ href, children }: AnimatedLinkProps) => (
  <motion.a
    href={href}
    className="relative inline-block text-gray-800 font-medium transition-colors hover:text-blue-700"
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

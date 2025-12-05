"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import NeukodLogo from "@/app/images/logo_neukod.png";

const AnimatedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    className="relative inline-block text-gray-600 text-sm transition-colors hover:text-blue-500"
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

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/">
                <Image
                  alt="Neukod Logo"
                  src={NeukodLogo}
                  className="w-1/2 h-1/2"
                />
              </Link>
              {/* <span className="text-lg font-bold text-gray-900">Neukod edu</span> */}
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Neukod website for education purpose.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <Github size={18} />
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Course</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="/courses">About Our Course</AnimatedLink>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
                  New
                </span>
              </li>
              {/* <li>
                <AnimatedLink href="">Explore our Course</AnimatedLink>
              </li> */}
            </ul>

            <h3 className="font-semibold text-gray-900 mt-8 mb-4">Class</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="/class">Classroom</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/class/backend">Backend</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/class/frontend">Frontend</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#">Game</AnimatedLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Career</h3>
            <ul className="space-y-3">
              {/* <li>
                <AnimatedLink href="#">Join Us!</AnimatedLink>
              </li> */}
              <li>
                <AnimatedLink href="/career">View Career</AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Right Columns */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Partner Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Partner with us
              </h3>
              <ul className="space-y-3">
                <li>
                  <AnimatedLink href="#">Sini cik</AnimatedLink>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <AnimatedLink href="/contact">Contact</AnimatedLink>
                </li>
                <li>
                  <AnimatedLink href="#">Join discord</AnimatedLink>
                </li>
              </ul>

              <div className="mt-8 font-semibold">
                <AnimatedLink href="/#newsletter-section">Subscribe Neukod ❤️</AnimatedLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-gray-600">
            © 2025 Neukod - Education Corp Inc.
          </p>
          <div className="flex gap-6">
            <AnimatedLink href="#">Privacy Policy</AnimatedLink>
            <AnimatedLink href="#">Terms</AnimatedLink>
            <AnimatedLink href="#">Code of conduct</AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

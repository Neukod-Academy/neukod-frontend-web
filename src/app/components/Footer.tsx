"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import NeukodLogo from "@/app/images/logo_neukod.png";
import { AnimatedLink, AnimateText } from "@/app/components/AnimatedLink";



export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/">
                <Image
                  alt="Neukod Logo"
                  src={NeukodLogo}
                  className="w-[150px] h-[60px] md:w-1/2 md:h-1/2 lg:w-3/4 lg:h-3/4"
                />
              </Link>
              {/* <span className="text-lg font-bold text-gray-900">Neukod edu</span> */}
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Neukod website for education purpose.
            </p>
            <div className="flex gap-4 mb-6">
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                <Github size={20} />
              </Link>

              <Link
                href="#"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-4">Course</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="/courses">
                  <span className="text-sm md:text-base">About Our Course</span>
                </AnimatedLink>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-lg">
                  New
                </span>
              </li>
              {/* <li>
                <AnimatedLink href="">Explore our Course</AnimatedLink>
              </li> */}
            </ul>
            <h3 className="font-semibold text-blue-800 mt-8 mb-4">Class</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="/class">
                  <span className="text-sm md:text-base">Classroom</span>
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/class/backend">
                  <span className="text-sm md:text-base">Backend </span>
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/class/frontend">
                  <span className="text-sm md:text-base">Frontend</span>
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#">
                  <span className="text-sm md:text-base">Game</span>
                </AnimatedLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-800 mb-4">Career</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="/career">
                  <span className="text-sm md:text-base">View Career</span>
                </AnimatedLink>
              </li>
            </ul>
            <h3 className="font-semibold text-blue-800 mt-8 mb-4">
              Partner with us
            </h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="#">
                  <span className="text-sm md:text-base">Sini cik</span>
                </AnimatedLink>
              </li>
            </ul>
            <h3 className="font-semibold text-blue-800 mt-8 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="/contact">
                  <span className="text-sm md:text-base">Contact</span>
                </AnimatedLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block w-[1px] bg-gray-200 mx-10 self-stretch"></div>
          {/* Right Columns */}
          <div className="flex gap-4 font-semibold">
            <ul className="space-y-10">
              <li>
                <AnimatedLink href="/#newsletter-section">
                  <span className="text-sm md:text-base">
                    Subscribe Neukod ❤️
                  </span>
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#">
                  <span className="text-sm md:text-base">
                    Join Neukod Discord
                  </span>
                </AnimatedLink>
              </li>
              <li>
                  <AnimateText href="#">Start Trial</AnimateText>
              </li>
            </ul>
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

"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AnimatedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    className="relative inline-block text-gray-600 hover:text-gray-900 transition-colors "
    whileHover="hover"
  >
    {children}
    <motion.span
      className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-900 origin-left"
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
    <footer className="w-full mx-auto px-4 py-12 md:py-16 border-t-2 border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="font-semibold text-lg md:text-2xl text-blue-800">
            NEUKOD.EDU | INDEPENDENT.
          </h2>
          <h3 className="font-medium text-base md:text-lg">E-LEARNING</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Address: Jl. Kyai H. Raden Asnawi No.126, Gendang Sewu,
            Bakalankrapyak, Kec. Kaliwungu, Kabupaten Kudus, Jawa Tengah 59332
            Hours: Open ⋅ Closes 5.00 pm Phone: (0291) 433255 Province: Central
            Java
          </p>
          <div className="relative space-y-2">
            <p className="font-medium text-gray-600 text-base md:text-lg">CONTACT US :</p>
            <AnimatedLink href="mailto:info@neukod.com">
              <span className="hover:text-blue-800">
              info@neukod.com
              </span>
            </AnimatedLink>
            <br />
            <AnimatedLink href="mailto:info@neukod.com">
              <span className="hover:text-blue-800">
              +62-858-5181-6241
              </span>
            </AnimatedLink>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-lg md:text-2xl text-blue-800">
            QUICK LINKS
          </h2>
          <nav className="space-y-3">
            {[
              "FAQs",
              "Pricing",
              "Locations",
              "About us",
              "Refund Policy",
              "Terms of Service",
              "Accessibility",
            ].map((link) => (
              <div key={link}>
                <AnimatedLink href="#">{link}</AnimatedLink>
              </div>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h2 className="font-semibold text-lg md:text-2xl text-blue-800">
            STAY IN TOUCH
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full max-w-2xl"
            />
            <Button type="submit" className="w-full max-w-2xl bg-redFlag">
              SUBSCRIBE
            </Button>
          </form>
          <div className="relative">
            <h1 className="font-medium text-gray-600 text-base md:text-lg">
              SOCIAL MEDIA :
            </h1>
          </div>
          <div className="flex space-x-4 group">
            <Link href="#" className="hover:scale-110 duration-200 transform">
              <Facebook className="h-5 w-5 md:h-8 md:w-8 text-black hover:text-blue-800" />
            </Link>
            <Link href="#" className="hover:scale-110 duration-200 transform">
              <Instagram className="h-5 w-5 md:h-8 md:w-8 text-black hover:text-blue-800" />
            </Link>
            <Link href="#" className="hover:scale-110 duration-200 transform">
              <Twitter className="h-5 w-5 md:h-8 md:w-8 text-black hover:text-blue-800" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-500">
          <span>© NEUKOD.EDU</span>
          <span className="hidden md:inline">|</span>
          <AnimatedLink href="#">TERMS OF SERVICE</AnimatedLink>
          <span className="hidden md:inline">|</span>
          <AnimatedLink href="#">PRIVACY POLICY</AnimatedLink>
        </div>
      </div>
    </footer>
  );
}

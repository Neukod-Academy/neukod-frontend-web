"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import FormSwitch from "../common/FormSwitch";
import NeuLogo from "../../public/images/Putih.png";

// Placeholder for language options - replace with your actual data
const languageOptions = [
  { value: "en", label: "EN" },
  { value: "id", label: "ID" },
  // Add more options as needed
];

function NavItems() {
  return (
    <div className="flex space-x-6">
      <Link
        href="/landing_page/about"
        className="text-base md:text-lg lg:text-xl font-medium transition-colors hover:text-primary text-white"
      >
        Course
      </Link>
      <Link
        href="/landing_page/contact"
        className="text-base md:text-lg lg:text-xl font-medium transition-colors hover:text-primary text-white"
      >
        Contact Us
      </Link>
    </div>
  );
}

function LanguageSelector() {
  return (
    <div className="grid gap-3 p-4 md:grid-cols-1">
      <Select>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {languageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        className="px-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-blackOut p-4">
          <NavItems />
          <div className="mt-4">
            <LanguageSelector />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-gradient-to-b from-blackOut/90 to-blackOut/40 backdrop-filter backdrop-blur-md">
      <div className="container flex h-12 md:h-14 lg:h-16 max-w-screen items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={NeuLogo} alt="Logo" width={64} height={64} />
          <span className="hidden font-bold sm:inline-block text-white">
            NEUKOD ACADEMY
          </span>
        </Link>

        <div className="hidden lg:flex items-center justify-center flex-1">
          <NavItems />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-redFlag" variant="default">
                Apply Now!
              </Button>
            </DialogTrigger>
            <DialogHeader>
              <DialogTitle className="invisible"></DialogTitle>
            </DialogHeader>
            <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] lg:max-w-[1000px]">
              <FormSwitch />
            </DialogContent>
          </Dialog>
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
}

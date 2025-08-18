"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import NeuLogo from "../images/logo_neukod.png";
import Logo from "../images/courses/alamak-logo.webp";

// Mock data - replace with your actual data
const courseCategories = [
  {
    title: "React Courses",
    href: "/courses",
    description:
      "Master modern React development with hands-on projects and real-world applications.",
  },
  {
    title: "Minecraft Courses",
    href: "/courses",
    description:
      "Learn programming through Minecraft modding and game development.",
  },
  {
    title: "Data Science",
    href: "/courses",
    description:
      "Dive into data analysis, machine learning, and statistical modeling.",
  },
  {
    title: "Web Development",
    href: "/courses",
    description: "Build full-stack applications with modern web technologies.",
  },
];

const classes = [
  {
    title: "About Neukod Class",
    href: "/class",
    description: "Perfect for those starting their coding journey",
  },
  {
    title: "Backend Class",
    href: "/class/backend",
    description: "Build upon your existing knowledge",
  },
  {
    title: "Frontend Class",
    href: "/class/frontend",
    description: "Master complex programming concepts",
  },
  {
    title: "Game Development",
    href: "/",
    description: "Industry-level skills and practices",
  },
];

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "id", label: "Bahasa", flag: "🇮🇩" },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none group-hover:text-blue-600 transition-colors">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-gray-600">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </>
  );
});
ListItem.displayName = "ListItem";

function DesktopNavigation() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-black hover:text-blue-600 hover:bg-blue-50 focus:bg-blue-100 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-blue-50 transition-all duration-200">
            Courses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[240px_1fr]">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-all duration-300"
                    href="/courses"
                  >
                    <Image
                      src={Logo}
                      alt="courses content"
                      className="w-full h-full object-cover"
                    />
                    <div className="mb-2 mt-4 text-lg font-bold text-white">
                      Discover Courses
                    </div>
                    <p className="text-sm text-blue-100">
                      Explore our comprehensive learning paths designed to take
                      you from beginner to expert.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
              <div className="grid gap-1">
                {courseCategories.map((course) => (
                  <ListItem
                    key={course.title}
                    title={course.title}
                    href={course.href}
                  >
                    {course.description}
                  </ListItem>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-black hover:text-blue-600 hover:bg-blue-50 focus:bg-blue-100 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-blue-50 transition-all duration-200">
            Classes
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {classes.map((classItem) => (
                <ListItem
                  key={classItem.title}
                  title={classItem.title}
                  href={classItem.href}
                >
                  {classItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/career" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Career
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 hover:bg-blue-50 transition-colors"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {selectedLang.code.toUpperCase()}
          </span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-fit">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setSelectedLang(lang)}
            className="gap-3 cursor-pointer"
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden hover:bg-blue-50"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="mt-6 space-y-4 overflow-y-scroll max-h-screen">
          <SheetHeader>
            <SheetTitle className="text-left text-xl">Menu</SheetTitle>
          </SheetHeader>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Courses
            </h3>
            <div className="space-y-2">
              {courseCategories.map((course) => (
                <Link
                  key={course.title}
                  href={course.href}
                  className="block rounded-lg p-3 text-sm hover:bg-blue-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium">{course.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {course.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Classes
            </h3>
            <div className="space-y-2">
              {classes.map((classItem) => (
                <Link
                  key={classItem.title}
                  href={classItem.href}
                  className="block rounded-lg p-3 text-sm hover:bg-blue-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium">{classItem.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {classItem.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="block rounded-lg p-3 text-sm font-medium hover:bg-blue-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          <div className="pt-4 border-t">
            <LanguageSelector />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function TrialDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
          Start Free Trial
        </Button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle className="sr-only"></DialogTitle>
      </DialogHeader>
      <DialogContent className="sm:max-w-[500px]">
        <div className="text-center space-y-4 p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Start Your Learning Journey
          </h2>
          <p className="text-muted-foreground">
            Get access to all our courses and start learning today. No credit
            card required.
          </p>
          <div className="space-y-3 pt-4">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Sign Up with Email
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              Continue with Google
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src={NeuLogo}
              alt="Neukod Logo"
              className="w-[70px] h-9 md:w-24 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>
            <TrialDialog />
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
}

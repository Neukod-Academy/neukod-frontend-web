"use client";

import React, { useEffect } from "react";
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

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import FormSwitch from "./FormSwitch";
import NeuLogo from "../images/Putih.png";
import { cn } from "@/lib/utils";

// Placeholder for language options - replace with your actual data
const languageOptions = [
  { value: "en", label: "EN" },
  { value: "id", label: "ID" },
  // Add more options as needed
];
const navItem: { title: string; href: string; description: string }[] = [
  {
    title: "Class 1",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Class 2",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Class 3",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Class 4",
    href: "#",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Class 5",
    href: "#",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Class 6",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function NavItems() {
  return (
    <div className="flex space-x-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Class</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Course</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {navItem.map((navItem) => (
                  <ListItem
                    key={navItem.title}
                    title={navItem.title}
                    href={navItem.href}
                  >
                    {navItem.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function LanguageSelector() {
  return (
    <div className="grid md:grid-cols-1">
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
        <div className="absolute grid grid-cols-2 top-full left-0 right-0 bg-blackOut p-5 gap-0">
          <div className="flex items-start">
            <NavItems />
          </div>
          <div className="place-items-end">
            <LanguageSelector />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  // React.useEffect(() => {
  //   if (isOpen) document.body.classList.add('overflow-hidden');
  //   else document.body.classList.remove('overflow-hidden');
  // }, [isOpen]);
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
                Start Trial
              </Button>
            </DialogTrigger>
            <DialogHeader>
              <DialogTitle className="invisible"></DialogTitle>
            </DialogHeader>
            <DialogContent className="w-full max-w-[1000px]">
              <FormSwitch />
            </DialogContent>
          </Dialog>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

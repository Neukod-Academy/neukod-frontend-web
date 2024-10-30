"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";
import Logo from "../../assets/logo.png";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languageOptions = [
  { value: "EN", label: "EN" },
  { value: "ID", label: "ID" },
];

const Navbar = (props: any) => {
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/30 backdrop-blur-md shadow-sm dark:bg-neutral-800/30">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                {...props}
                src={Logo}
                alt="Logo Profile"
                x="20%"
                y="20%"
                width="100"
                height="50"
                viewBox="0 0 50 100"
              />
            </Link>
            <nav className="hidden md:flex gap-4">
              <Link
                href="/landing_page/about"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Course
              </Link>
              <Link
                href="/landing_page/contact"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Contact Us
              </Link>
              <div className="grid gap-3 p-4 md:grid-cols-1">
                <Select>
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder="EN"/>
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
            </nav>
            <div className="flex items-center gap-4">
              <Button
                size="md"
                className="bg-daisyWhite px-2 py-2 text-black hover:bg-gray-200"
              >
                Sign in
              </Button>
              <Button
                size="md"
                className="bg-redFlag px-2 py-2 text-white hover:bg-red-800"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

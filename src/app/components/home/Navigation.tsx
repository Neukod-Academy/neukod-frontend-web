"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/Putih.png"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FormSwitch from "../common/FormSwitch"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
import { useState } from "react";

const languageOptions = [
  { value: "EN", label: "EN" },
  { value: "ID", label: "ID" },
];


const Navbar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-blackOut to-blackOut/70 backdrop-blur-md shadow-sm dark:bg-neutral-800/30">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                {...props}
                src={Logo2}
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
                className="font-medium flex items-center text-sm transition-colors text-white hover:underline"
                prefetch={false}
              >
                Course
              </Link>
              <Link
                href="/landing_page/contact"
                className="font-medium flex items-center text-sm transition-colors text-white hover:underline"
                prefetch={false}
              >
                Contact Us
              </Link>
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
            </nav>
            <div className="flex items-center gap-4">

              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="bg-redFlag px-2 py-2 text-white hover:bg-red-800"
                  >
                    Apply Now!
                  </Button>
                </DialogTrigger>
                <DialogHeader>
                  <DialogTitle className="invisible"></DialogTitle>
                </DialogHeader>
                <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] lg:max-w-[1000px] my-auto p-1 bg-white/30 border-none rounded-lg">
                  <FormSwitch />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

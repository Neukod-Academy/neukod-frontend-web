"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Banner from "./images/banner.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormSwitch from "../components/common/FormSwitch";
import React from "react";

export default function Component() {
  const TextEffect = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from(".text-fade", {
          yPercent: "100",
          opacity: 0,
          duration: 1.3,
          delay: 0.3,
        });
      }),
      TextEffect;
    return () => ctx.revert();
  });

   const [isOpen, setIsOpen] = React.useState(false);
   isOpen?document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  return (
    <div
      ref={TextEffect}
      className="relative w-auto h-auto md:h-[70vh] max-h-[900px] overflow-hidden mt-0 py-5"
    >
      <Image
        src={Banner}
        alt="Students studying together"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-fade max-w-3xl">
            <p className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white my-8 md:my-10 text-pretty">
              Build a{" "}
              <span className="text-blue-800 font-bold underline">
                Better You
              </span>
            </p>
            <p className="text-white text-base md:text-lg lg:text-xl mt-10 mb-6 max-w-2xl">
              Education is the cornerstone of a brighter future, opening doors
              to enhanced career prospects and personal growth. In today's
              fast-paced world, staying ahead means continuously developing
              skills and expertise, particularly in emerging technologies. By
              embracing education, students of all ages can unlock their
              potential, gaining the knowledge and tools necessary to excel.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-redFlag text-white hover:bg-red-800"
                >
                  Start Learn Now
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
        </div>
      </div>
    </div>
  );
}

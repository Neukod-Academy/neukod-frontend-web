"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import Dump from "../common/Dump"

const AboutUs = () => {
    gsap.registerPlugin(ScrollTrigger);
    const content = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!content.current) {
            console.error("Content element not found!");
            return;
        }

        // Initialize SplitType on the content element
        const split = new SplitType(content.current, {
            types: "lines",
            tagName: "p", // Ensure this matches the tag structure you want
        });

        // Verify that the lines have been split
        console.log("Split lines:", split.lines);

        // GSAP animation targeting the split lines
        gsap.from(content.current.querySelectorAll("p"), { // Use the correct tag
            yPercent: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: content.current,
                scrub: true,
                start: "top 70%", // Adjusted for better visibility
                end: "top 20%",
                markers: false,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="grid grid-cols-2 p-12">
            <div ref={content} className="relative">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
            </div>

            <div className="relative">
                <Dump />
            </div>
        </div>
    );
};
export default AboutUs;

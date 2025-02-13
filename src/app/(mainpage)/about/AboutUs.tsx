"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import Kiwir from '../../images/courses/kiwir.png';
import Image from "next/image";

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
        gsap.from(".anim", { // Use the correct tag
            yPercent: 50,
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: content.current,
                scrub: true,
                start: "top 90%", // Adjusted for better visibility
                end: "top 50%"
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-5">
            <div ref={content} className="anim text-left max-w-3xl mb-8 lg:mb-10 mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-blue-800 font-extrabold mb-4">About Us</h1>
                <hr className="flex w-48 h-1 my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-gray-700" />
                <p className="text-sm md:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
            </div>

            <div ref={content}className="anim flex-1">
            <Image
                src={Kiwir}
                alt="Image 1"
                className="w-full h-1/2 md:h-full min-w-[200px] max-w-[1200px] rounded" />
            </div>
        </div>
    );
};
export default AboutUs;

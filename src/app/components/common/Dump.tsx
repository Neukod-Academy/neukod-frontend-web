"use client";

import Image from "next/image";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Kiwir from '../../assets/courses/kiwir.png';

const FadeInSlideUp = () => {
    const imagesRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Iterate through each image and create a scroll trigger animation
        gsap.from(".image", {
            yPercent: 50,         // Start from 50px below
            opacity: 0,    // Start with 0 opacity
            duration: 1,   // Animation duration
            ease: "power1.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: imagesRef.current,
                scrub: true,
                start: "top 80%", // Adjusted for better visibility
                end: "top 40%",
            }
        });

        // Cleanup ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={imagesRef} className="image flex flex-col items-center justify-center p-2">
            {/* Example images - replace with your actual image paths */}
            <Image
                src={Kiwir}
                alt="Image 1"
                className="w-full h-full rounded-md" />
        </div>
    );
};

export default FadeInSlideUp;

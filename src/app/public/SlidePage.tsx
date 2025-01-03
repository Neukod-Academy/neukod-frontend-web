"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import Slide1 from "../assets/slide/teacher_vector.webp"
import Slide2 from "../assets/slide/asian_girl.webp"
import Slide3 from "../assets/slide/asian_girl2.webp"
import Slide4 from "../assets/slide/graduate.webp"
import Slide5 from "../assets/slide/teacher.webp"
import Image, { StaticImageData } from "next/image"

interface Section {
    id: string
    title: string
    subtitle: string
    image: StaticImageData
    alt: string
}

const sections: Section[] = [
    {
        id: "01",
        title: "Start your journey",
        subtitle: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        image: Slide1,
        alt: "best teacher"
    },
    {
        id: "02",
        title: "Study what you want",
        subtitle: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        image: Slide2,
        alt: "Happy learning"
    },
    {
        id: "03",
        title: "Grow your career",
        subtitle: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        image: Slide3,
        alt: "Choose your path"
    },
    {
        id: "04",
        title: "Certified classroom",
        subtitle: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        image: Slide4,
        alt: "Finish your study"
    },
    {
        id: "05",
        title: "Meet classmate online",
        subtitle: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        image: Slide5,
        alt: "Ask anytime anywhere"
    },
]

export default function SlidePage() {
    const [activeIndex, setActiveIndex] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".section", {
                xPercent: (i) => i * 100,
            })
        })

        return () => ctx.revert()
    }, [])

    const handleNextSection = () => {
        const nextIndex = activeIndex >= sections.length - 1 ? 0 : activeIndex + 1;

        const ctx = gsap.context(() => {
            // Animate sections
            gsap.to(".section", {
                xPercent: (i) => {
                    const offset = nextIndex === 0 ? 0 : -nextIndex;
                    return (i + offset) * 100;
                },
                duration: 1,
                ease: "power2.inOut",
            });

            // Fix title animation by using unique refs for each section
            gsap.to(`#title-${activeIndex}`, {
                yPercent: -20,
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
                onComplete: () => {
                    setActiveIndex(nextIndex);
                    gsap.fromTo(
                        `#title-${nextIndex}`,
                        { yPercent: 30, opacity: 0 },
                        { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
                    );
                },
            });
        });

        return () => ctx.revert();
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div ref={sliderRef} className="relative h-full">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className={cn(
                            "section absolute left-0 top-0 h-full w-full select-none",
                            index === activeIndex ? "z-10" : "z-0"
                        )}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                        <Image
                            src={section.image}
                            alt={section.alt}
                            layout="contain"
                            className="h-full w-full object-cover"
                        />
                        <div
                            id={`title-${index}`}
                            className="absolute left-12 top-1/2 -translate-y-1/2 transform"
                            style={{ opacity: index === activeIndex ? 1 : 0 }}
                        >
                            <div className="flex items-end gap-4">
                                {/* <span className="text-lg font-medium text-white/60">
                                    {section.id}
                                </span> */}
                                <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white">{section.title}</h2>
                            </div>
                            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/80">{section.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handleNextSection}
                className="absolute right-8 top-[90%] md:top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-white/20 p-3 md:p-4 backdrop-blur-md transition-colors hover:bg-white/40"
            >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </button>
            <div className="absolute bottom-8 left-12 z-20 flex gap-4">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="group hidden md:block px-2">
                        <h2
                            className={cn(
                                "md:text-sm lg:text-lg font-bold text-white duration-200 group-hover:text-white/70",
                                index === activeIndex ? "text-redFlag scale-110 group-hover:text-redFlag/80" : "text-white/50"
                            )}>{section.id} &nbsp; {section.title}</h2>
                        <button
                            key={section.id}
                            className={cn(
                                "h-2 w-full rounded-full transition-colors group-hover:bg-white/70",
                                index === activeIndex ? "bg-redFlag group-hover:bg-redFlag/80" : "bg-white/50"
                            )}
                            onClick={() => {
                                const ctx = gsap.context(() => {
                                    gsap.to(".section", {
                                        xPercent: (i) => (i - index) * 100,
                                        duration: 1,
                                        ease: "power2.inOut",
                                    })
                                    setActiveIndex(index)
                                })
                                return () => ctx.revert()
                            }}
                        />
                    </div>

                ))}
            </div>
        </div>
    )
}


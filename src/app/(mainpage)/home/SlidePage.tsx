"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import Slide1 from "../../images/slide/teacher_vector.webp"
import Slide2 from "../../images/slide/asian_girl.webp"
import Slide3 from "../../images/slide/asian_girl2.webp"
import Slide4 from "../../images/slide/graduate.webp"
import Slide5 from "../../images/slide/teacher.webp"
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

const SLIDE_DURATION = 5000 // 8 seconds per slide
const PAUSE_DURATION = 1000 // 3 seconds pause after manual click

export default function SlidePage() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const sliderRef = useRef<HTMLDivElement>(null)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const pauseTimerRef = useRef<NodeJS.Timeout | null>(null)
    const progressAnimationRef = useRef<gsap.core.Tween | null>(null)

    // Clear all timers
    const clearTimers = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = null
        }
        if (pauseTimerRef.current) {
            clearTimeout(pauseTimerRef.current)
            pauseTimerRef.current = null
        }
        if (progressAnimationRef.current) {
            progressAnimationRef.current.kill()
            progressAnimationRef.current = null
        }
    }, [])

    // Start progress animation
    const startProgressAnimation = useCallback(() => {
        if (isPaused) return

        progressAnimationRef.current = gsap.fromTo(
            {},
            { progress: progress },
            {
                progress: 100,
                duration: (SLIDE_DURATION * (100 - progress)) / 100000, // Convert to seconds
                ease: "none",
                onUpdate: function () {
                    setProgress(this.targets()[0].progress)
                },
                onComplete: () => {
                    handleNextSection(false) // Auto advance
                },
            },
        )
    }, [progress, isPaused])

    // Handle slide transition
    const handleNextSection = useCallback(
        (isManual = true) => {
            const nextIndex = activeIndex >= sections.length - 1 ? 0 : activeIndex + 1

            clearTimers()

            const ctx = gsap.context(() => {
                // Animate sections
                gsap.to(".section", {
                    xPercent: (i) => {
                        const offset = nextIndex === 0 ? 0 : -nextIndex
                        return (i + offset) * 100
                    },
                    duration: 1,
                    ease: "power2.inOut",
                })

                // Animate title
                gsap.to(`#title-${activeIndex}`, {
                    yPercent: -20,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.inOut",
                    onComplete: () => {
                        setActiveIndex(nextIndex)
                        setProgress(0)

                        gsap.fromTo(
                            `#title-${nextIndex}`,
                            { yPercent: 30, opacity: 0 },
                            { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                        )

                        // Handle timer logic
                        if (isManual) {
                            setIsPaused(true)
                            pauseTimerRef.current = setTimeout(() => {
                                setIsPaused(false)
                            }, PAUSE_DURATION)
                        }
                    },
                })
            })

            return () => ctx.revert()
        },
        [activeIndex, clearTimers],
    )

    // Handle direct slide navigation
    const handleSlideNavigation = useCallback(
        (index: number) => {
            if (index === activeIndex) return

            clearTimers()

            const ctx = gsap.context(() => {
                gsap.to(".section", {
                    xPercent: (i) => (i - index) * 100,
                    duration: 1,
                    ease: "power2.inOut",
                })

                gsap.to(`#title-${activeIndex}`, {
                    yPercent: -20,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.inOut",
                    onComplete: () => {
                        setActiveIndex(index)
                        setProgress(0)
                        setIsPaused(true)

                        gsap.fromTo(
                            `#title-${index}`,
                            { yPercent: 30, opacity: 0 },
                            { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                        )

                        pauseTimerRef.current = setTimeout(() => {
                            setIsPaused(false)
                        }, PAUSE_DURATION)
                    },
                })
            })

            return () => ctx.revert()
        },
        [activeIndex, clearTimers],
    )

    // Initialize GSAP
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".section", {
                xPercent: (i) => i * 100,
            })
        })

        return () => ctx.revert()
    }, [])

    // Handle timer and progress
    useEffect(() => {
        if (!isPaused) {
            startProgressAnimation()   
        }
        return () => {
            clearTimers()
        }
    }, [activeIndex, isPaused, startProgressAnimation, clearTimers])

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            clearTimers()
        }
    }, [clearTimers])

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div ref={sliderRef} className="relative h-full">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className={cn(
                            "section absolute left-0 top-0 h-full w-full select-none",
                            index === activeIndex ? "z-10" : "z-0",
                        )}
                    >
                        <div className="absolute inset-0 z-20 bg-black/40" />
                        <Image
                            fill
                            src={section.image || "/placeholder.svg"}
                            alt={section.alt}
                            className="h-full w-full object-cover"
                        />
                        <div
                            id={`title-${index}`}
                            className="absolute left-12 top-1/2 -translate-y-1/2 transform z-40"
                            style={{ opacity: index === activeIndex ? 1 : 0 }}
                        >
                            <div className="flex items-end gap-4">
                                <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white">{section.title}</h2>
                            </div>
                            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/80">{section.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => handleNextSection(true)}
                className="absolute right-8 top-[90%] md:top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-white/20 p-3 md:p-4 backdrop-blur-md transition-colors hover:bg-white/40"
            >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </button>

            {/* Navigation with Progress Bars */}
            <div className="absolute bottom-8 left-12 z-20 flex gap-4">
                {sections.map((section, index) => (
                    <div key={section.id} className="group hidden md:block px-2">
                        <h2
                            className={cn(
                                "md:text-sm lg:text-lg font-bold text-white duration-200 group-hover:text-white/70",
                                index === activeIndex ? "text-red-500 scale-110 group-hover:text-red-500/80" : "text-white/50",
                            )}
                        >
                            {section.id} &nbsp; {section.title}
                        </h2>
                        <div className="relative">
                            <button
                                className={cn(
                                    "relative overflow-hidden h-2 w-full rounded-full transition-colors group-hover:bg-white/70",
                                    index === activeIndex ? "bg-red-500/30 group-hover:bg-red-500/50" : "bg-white/50",
                                )}
                                onClick={() => handleSlideNavigation(index)}
                            >
                                {/* Progress Bar Fill */}
                                {index === activeIndex && (
                                    <div
                                        className="absolute top-0 left-0 h-2 bg-red-500 rounded-full transition-all duration-100 ease-linear"
                                        style={{ width: `${progress}%` }}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Timer Status Indicator (Optional) */}
            {isPaused && (
                <div className="absolute top-8 right-8 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md">
                    Timer Paused
                </div>
            )}
            {!isPaused && (
                <div className="absolute top-8 right-8 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md">
                    Timer Start
                </div>
            )}
        </div>
    )
}


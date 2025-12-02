"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import Slide1 from "../../images/slide/slide_banner1.webp"
import Slide2 from "../../images/slide/slide_banner2.webp"
import Slide3 from "../../images/slide/slide_banner3.webp"
import Slide4 from "../../images/slide/slide_banner4.webp"
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

const SLIDE_DURATION = 8000 // 8 seconds per slide
const PAUSE_DURATION = 2000 // 3 seconds pause after manual click

export default function SlidePage() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const sliderRef = useRef<HTMLDivElement>(null)
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
    const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const startTimeRef = useRef<number>(Date.now())
    const activeIndexRef = useRef(activeIndex) // Keep track of current index

    // Update ref when activeIndex changes
    useEffect(() => {
        activeIndexRef.current = activeIndex
    }, [activeIndex])

    // Clear all timers
    const clearAllTimers = useCallback(() => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = null
        }
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current)
            pauseTimeoutRef.current = null
        }
    }, [])

    // Advance to next slide
    const advanceSlide = useCallback(() => {
        const currentIndex = activeIndexRef.current
        const nextIndex = currentIndex >= sections.length - 1 ? 0 : currentIndex + 1

        setIsTransitioning(true)
        clearAllTimers()

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
            gsap.to(`#title-${currentIndex}`, {
                yPercent: -20,
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
                onComplete: () => {
                    setActiveIndex(nextIndex)
                    setProgress(0)
                    setIsTransitioning(false)

                    gsap.fromTo(
                        `#title-${nextIndex}`,
                        { yPercent: 30, opacity: 0 },
                        { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                    )

                    // Start timer for next slide after a brief delay
                    setTimeout(() => {
                        startTimer()
                    }, 200)
                },
            })
        })

        return () => ctx.revert()
    }, [clearAllTimers])

    // Start the progress timer
    const startTimer = useCallback(() => {
        if (isTransitioning) return

        clearAllTimers()
        setProgress(0)
        startTimeRef.current = Date.now()

        progressIntervalRef.current = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current
            const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)

            setProgress(newProgress)

            if (newProgress >= 100) {
                clearInterval(progressIntervalRef.current!)
                progressIntervalRef.current = null
                advanceSlide() // Use the separate advance function
            }
        }, 50) // Update every 50ms for smooth animation
    }, [isTransitioning, clearAllTimers, advanceSlide])

    // Handle manual next button click
    const handleManualNext = useCallback(() => {
        if (isTransitioning) return

        const currentIndex = activeIndexRef.current
        const nextIndex = currentIndex >= sections.length - 1 ? 0 : currentIndex + 1

        setIsTransitioning(true)
        clearAllTimers()

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
            gsap.to(`#title-${currentIndex}`, {
                yPercent: -20,
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
                onComplete: () => {
                    setActiveIndex(nextIndex)
                    setProgress(0)
                    setIsTransitioning(false)

                    gsap.fromTo(
                        `#title-${nextIndex}`,
                        { yPercent: 30, opacity: 0 },
                        { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                    )

                    // Pause timer after manual click
                    setIsPaused(true)
                    pauseTimeoutRef.current = setTimeout(() => {
                        setIsPaused(false)
                        startTimer() // Restart timer after pause
                    }, PAUSE_DURATION)
                },
            })
        })

        return () => ctx.revert()
    }, [isTransitioning, clearAllTimers, startTimer])

    // Handle direct slide navigation
    const handleSlideNavigation = useCallback(
        (index: number) => {
            if (index === activeIndex || isTransitioning) return

            setIsTransitioning(true)
            clearAllTimers()

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
                        setIsTransitioning(false)

                        gsap.fromTo(
                            `#title-${index}`,
                            { yPercent: 30, opacity: 0 },
                            { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                        )

                        setIsPaused(true)
                        pauseTimeoutRef.current = setTimeout(() => {
                            setIsPaused(false)
                            startTimer() // Restart timer after pause
                        }, PAUSE_DURATION)
                    },
                })
            })

            return () => ctx.revert()
        },
        [activeIndex, isTransitioning, clearAllTimers, startTimer],
    )
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".section", {
                xPercent: (i) => i * 100,
            })
        })

        return () => ctx.revert()
    }, [])

    // Start initial timer
    useEffect(() => {
        const timer = setTimeout(() => {
            startTimer()
        }, 1000) // Start after 1 second

        return () => {
            clearTimeout(timer)
            clearAllTimers()
        }
    }, [startTimer, clearAllTimers])

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            clearAllTimers()
        }
    }, [clearAllTimers])

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
                            quality={70}
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
                onClick={handleManualNext}
                disabled={isTransitioning}
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
            {/* <div className="absolute top-8 right-8 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md">
                {isPaused ? "Timer Paused" : "Timer Running"}
            </div> */}
            {/* Debug info (remove in production) */}
            <div className="absolute top-8 left-8 z-20 bg-black/50 text-white px-3 py-1 rounded text-xs">
                Progress: {Math.round(progress)}% | Active: {activeIndex + 1}/{sections.length} | Paused:{" "}
                {isPaused ? "Yes" : "No"}
            </div>
        </div>
    )
}


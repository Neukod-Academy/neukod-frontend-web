"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Teacher1 from "../../images/top-teacher/teacher-1.jpg"
import Teacher2 from "../../images/top-teacher/teacher-2.jpg"
import Teacher3 from "../../images/top-teacher/teacher-3.jpg"
import Teacher4 from "../../images/top-teacher/teacher-4.jpg"


// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const teachers = [
    {
        id: 1,
        name: "Dimar",
        subject: "Backend Teacher",
        image: Teacher3,
        description: "Dimar is someone who is interested in technology and has 5 years of experience in IT..",
        subjectColor: "border-blue-600 text-blue-600",
    },
    {
        id: 2,
        name: "Yopua",
        subject: "MATH",
        image: Teacher2,
        description: "Yopua is very good at math, she is very good at solving problems using math formulas.",
        subjectColor: "border-purple-600 text-purple-600",
    },
    {
        id: 3,
        name: "Biji",
        subject: "Weed",
        image: Teacher1,
        description:
            "Biji has been a marijuana dealer since elementary school",
        subjectColor: "border-blue-600 text-blue-600",
    },
    {
        id: 4,
        name: "Hytam",
        subject: "CRIME",
        image: Teacher4,
        description: "She's black",
        subjectColor: "border-purple-600 text-purple-600",
    },
]

export default function LeadTeachers() {
    const sectionRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const cardsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!titleRef.current || !cardsRef.current) return
            // Set initial states - elements start from the right and are invisible
            gsap.set(titleRef.current, {
                x: 100,
                opacity: 0,
            })

            gsap.set(cardsRef.current, {
                x: 150,
                opacity: 0,
            })

            // Create timeline for the title animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
            })

            tl.to(titleRef.current, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
              })

            // Create staggered animation for the cards
            tl.to(cardsRef.current, {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.2, // Delay between each card animation
            })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    const addToRefs = (el: HTMLDivElement | null, index: number) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current[index] = el
        }
    }

    return (
        <section ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-blue-900 mb-12">
                Lead Teachers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teachers.map((teacher, index) => (
                    <div
                        key={teacher.id}
                        ref={(el) => addToRefs(el, index)}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="aspect-square overflow-hidden">
                            <Image
                                src={teacher.image}
                                alt={teacher.name}
                                placeholder="blur"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-6">
                            <div className="mb-4">
                                <span
                                    className={`inline-block px-3 py-1 text-xs font-semibold border rounded-full ${teacher.subjectColor} bg-white`}
                                >
                                    {teacher.subject}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-blue-900 mb-3">{teacher.name}</h3>

                            <p className="text-gray-600 text-sm leading-relaxed">{teacher.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

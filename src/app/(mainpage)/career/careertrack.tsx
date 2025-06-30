"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import CareerImg from "../../images/career-track/career-main.jpg"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CareerSection() {
  const missionBoxRef = useRef<HTMLDivElement>(null)
  const missionTextRef = useRef<HTMLDivElement>(null)
  const careerImageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!missionBoxRef.current || !missionTextRef.current) return

    // Set initial state - hidden
    gsap.set([missionBoxRef.current, missionTextRef.current], {
      opacity: 0,
      y: 30,
    })
    gsap.set(careerImageRef.current,{
        opacity: 0,
        x: -50,
    })
    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: missionBoxRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: careerImageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Animate mission box first, then text
    tl.to(missionBoxRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }).to(
      missionTextRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )
    tl2.to(careerImageRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with Mission overlay */}
          <div className="relative">
            <div ref={careerImageRef} className="relative h-[600px] w-full overflow-hidden rounded-lg px-5 lg:right-10 right-0">
              <Image
                src={CareerImg}
                alt="Student working with technology"
                placeholder="blur"
                quality={50}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
</div>
              {/* Mission Box Overlay */}
              <div ref={missionBoxRef} className="absolute bottom-8 right-0 bg-gray-200 p-8 rounded-lg shadow-lg max-w-[300px]">
              <div className="absolute top-0 right-0 w-full h-[5px] bg-gradient-to-tr from-blue-900 to-purple-900"></div>
                <div ref={missionTextRef}>
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Our Mission</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our mission is to enhance students' career prospects through accessible, technology-driven learning
                    experiences that foster both technical and professional growth.
                  </p>
                </div>
              </div>
            
          </div>

          {/* Right side - Content */}
          <div ref={missionTextRef} className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
                Career Development for the Next Generation of Tech Professionals
              </h1>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Pennant Education, we're dedicated to delivering high-quality, industry-focused education across a
                  range of technology fields.
                </p>

                <p>
                  Our comprehensive programs cover essential areas like software development, cybersecurity, and game
                  development, equipping you with the practical skills and knowledge needed to excel in today's
                  competitive job market.
                </p>

                <p>
                  By focusing on hands-on learning and real-world applications, we ensure that our graduates are
                  well-prepared to meet the demands of modern technology industries.
                </p>
              </div>
            </div>

            {/* Educational Philosophy Section */}
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-lg text-white">
              <div className="border-2 border-white inline-block px-4 py-2 mb-6">
                <h3 className="font-bold text-sm tracking-wider">EDUCATIONAL PHILOSOPHY</h3>
              </div>

              <p className="leading-relaxed">
                At Pennant Education, we value flexible, immersive learning experiences that emphasize hands-on
                practice. We prioritize career-oriented education, making sure you gain skills that are relevant in
                today's rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

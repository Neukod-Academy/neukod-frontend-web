"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const CourseTextAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const sloganRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLSpanElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const words = ["the new journey.", "your potential.", "new things.", "with Neukod."]
    let wordIndex = 0
    let interval: NodeJS.Timeout

    const initializeAnimations = () => {
      requestAnimationFrame(() => {
        gsap.set(".slogan h1, .slogan p", { opacity: 1 })

        gsap.killTweensOf(".slogan h1, .slogan p")

        gsap.from(".slogan h1", {
          y: -50,
          opacity: 0,
          duration: 1.2,
          delay: 0.5,
          stagger: 0.3,
          ease: "power3.out",
        })
        gsap.from(".slogan p", {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.5,
          stagger: 0.3,
          ease: "power3.out",
        })

        if (wordRef.current) {
          gsap.set(wordRef.current, { opacity: 1, rotationX: 0 })
        }

        // Optional: Add a subtle parallax effect that keeps text visible
        gsap.to("#homeIntro .content .slogan", {
          y: -20,
          scrollTrigger: {
            trigger: "#homeIntro",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1,
          },
        })

        // Word rotation animation function
        function updateText() {
          const element = wordRef.current
          if (!element) return

          const currentWord = words[wordIndex]
          wordIndex = (wordIndex + 1) % words.length
          const nextWord = words[wordIndex]

          gsap.to(element, {
            rotationX: 90,
            opacity: 0,
            duration: 1,
            onComplete: () => {
              element.textContent = nextWord
              gsap.fromTo(
                element,
                {
                  rotationX: -90,
                  opacity: 0,
                },
                {
                  rotationX: 0,
                  opacity: 1,
                  duration: 0.5,
                },
              )
            },
          })
        }

        // Start word rotation
        interval = setInterval(updateText, 1500)
      })
    }

    const timeoutId = setTimeout(initializeAnimations, 100)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
      if (interval) {
        clearInterval(interval)
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf(".slogan h1, .slogan p, #homeIntro .content .slogan")
      if (wordRef.current) {
        gsap.killTweensOf(wordRef.current)
      }
    }
  }, [isClient])

  if (!isClient) {
    return (
      <div className="relative">
        <section id="homeIntro" className="relative items-center justify-center">
          <div className="content max-w-4xl mx-auto px-6">
            <div className="slogan text-left opacity-0">
              <h1 className="rb-5 mb-5 text-4xl md:text-6xl font-bold md:mb-6 text-blue-900">
                Unlock Your Potential with Our Expertise.
              </h1>
              <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-blue-900">
                Explore{" "}
                <span className="word text-pink-100 inline-block" style={{ transformStyle: "preserve-3d" }}>
                  your passion.
                </span>
              </h1>
              <p className="mb-6 md:mb-8 md:text-md">
                Partnering with us means gaining access to top-tier IT services tailored to your needs. Our consultancy
                empowers your business to thrive in a digital landscape.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 z-40">
                <div>
                  <p className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Expert Guidance</p>
                  <p>Leverage our expertise to navigate complex IT challenges with confidence.</p>
                </div>
                <div>
                  <p className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Tailored Solutions</p>
                  <p>Customized strategies designed to meet your unique business requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="relative">
      <section id="homeIntro" ref={sectionRef} className="relative items-center justify-center">
        <div className="content max-w-4xl mx-auto px-6">
          <div ref={sloganRef} className="slogan text-left">
            <h1 className="rb-5 mb-5 text-4xl md:text-6xl font-bold md:mb-6 text-blue-900">
              Unlock Your Potential with Our Expertise.
            </h1>
            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-blue-900">
              Explore{" "}
              <span ref={wordRef} className="word text-pink-100 inline-block" style={{ transformStyle: "preserve-3d" }}>
                your passion.
              </span>
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Partnering with us means gaining access to top-tier IT services tailored to your needs. Our consultancy
              empowers your business to thrive in a digital landscape.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 z-40">
              <div>
                <p className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Expert Guidance</p>
                <p>Leverage our expertise to navigate complex IT challenges with confidence.</p>
              </div>
              <div>
                <p className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Tailored Solutions</p>
                <p>Customized strategies designed to meet your unique business requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseTextAnimation

"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NewsletterBanner from "@/app/images/newsletter/newsletter.jpg"

const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")

  // Register GSAP plugin
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
  }

  const sectionRef = useRef<HTMLElement>(null)
  const leftSideRef = useRef<HTMLDivElement>(null)
  const rightSideRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", { firstName, email })
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    const section = sectionRef.current
    const leftSide = leftSideRef.current
    const rightSide = rightSideRef.current
    const title = titleRef.current
    const form = formRef.current

    if (!section || !leftSide || !rightSide || !title || !form) return

    // Set initial states
    gsap.set([leftSide, rightSide], {
      y: 100,
      opacity: 0
    })

    gsap.set([title, form], {
      y: 50,
      opacity: 0
    })

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "bottom 20%",
        markers: false,
        once: true, // Animation happens only once
      }
    })

    // Animate elements
    tl.to(leftSide, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    })
    .to(rightSide, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .to(title, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.7")
    .to(form, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="newsletter-section" ref={sectionRef} className="w-full py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Left side - Image and branding */}
            <div ref={leftSideRef} className="relative bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 flex flex-col justify-center items-center">
              <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-blue-400/90 via-purple-500/90 to-cyan-400/90"></div>
              
              {/* <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-60"></div>
                  <div className="absolute top-16 left-8 w-4 h-4 bg-white rounded-full opacity-80"></div>
                  <div className="absolute bottom-20 right-12 w-6 h-6 bg-white/70 rounded-full"></div>
                  <div className="absolute top-32 right-4 w-3 h-3 bg-cyan-200 rounded-full"></div>
                </div>
              </div> */}
              <Image 
                alt="Subscribe now"
                src={NewsletterBanner}
                className="w-full h-full object-cover"
                />
              
              {/* Brand text overlay */}
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-white text-2xl font-bold tracking-wider">
                  NEUKOD
                  <span className="block text-lg font-normal opacity-90">WEEKLY DIGEST</span>
                </h3>
              </div>
            </div>

            {/* Right side - Form */}
            <div ref={rightSideRef} className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                <div className="mb-8">
                  <h2 ref={titleRef} className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    🚀 Join the Innovation Wave!
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Get exclusive insights, cutting-edge tips, and handpicked articles from our community of innovators delivered straight to your inbox.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">Subscribe Now</span>
                    
                    {/* Sparkle animation overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-100"></div>
                      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200"></div>
                      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-300"></div>
                      <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400"></div>
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </Button>
                </form>

                <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                  By subscribing to our newsletter you agree to our{" "}
                  <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection;
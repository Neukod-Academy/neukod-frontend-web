"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Component() {
  const dot1Ref = useRef<HTMLDivElement>(null)
  const dot2Ref = useRef<HTMLDivElement>(null)
  const dot3Ref = useRef<HTMLDivElement>(null)
  const dot4Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animation for first dot (scale from 0 to 1)
    if (dot1Ref.current) {
      gsap.fromTo(
        dot1Ref.current,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.6,
          repeat: -1,
          ease: "power2.out",
        },
      )
    }

    // Animation for second dot (translate right)
    if (dot2Ref.current) {
      gsap.fromTo(
        dot2Ref.current,
        { x: 0 },
        {
          x: 24,
          duration: 0.6,
          repeat: -1,
          ease: "power2.out",
        },
      )
    }

    // Animation for third dot (translate right)
    if (dot3Ref.current) {
      gsap.fromTo(
        dot3Ref.current,
        { x: 0 },
        {
          x: 24,
          duration: 0.6,
          repeat: -1,
          ease: "power2.out",
        },
      )
    }

    // Animation for fourth dot (scale from 1 to 0)
    if (dot4Ref.current) {
      gsap.fromTo(
        dot4Ref.current,
        { scale: 1 },
        {
          scale: 0,
          duration: 0.6,
          repeat: -1,
          ease: "power2.out",
        },
      )
    }

    // Cleanup function
    return () => {
      gsap.killTweensOf([dot1Ref.current, dot2Ref.current, dot3Ref.current, dot4Ref.current])
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="relative w-20 h-20">
        <div ref={dot1Ref} className="absolute top-[33px] left-2 w-[13px] h-[13px] rounded-full bg-[#c517f0]"></div>
        <div ref={dot2Ref} className="absolute top-[33px] left-2 w-[13px] h-[13px] rounded-full bg-[#c517f0]"></div>
        <div ref={dot3Ref} className="absolute top-[33px] left-8 w-[13px] h-[13px] rounded-full bg-[#c517f0]"></div>
        <div ref={dot4Ref} className="absolute top-[33px] left-14 w-[13px] h-[13px] rounded-full bg-[#c517f0]"></div>
      </div>
    </div>
  )
}

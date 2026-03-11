"use client"
import gsap from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react"

const StaggeredText = () => {

  const tl = useRef<gsap.core.Timeline | null>(null)

  useGSAP(() => {
    const upperTextSplit=new SplitText(".upper-text", {type:"chars"})
    const lowerTextSplit=new SplitText(".lower-text", {type:"chars"})
    tl.current = gsap.timeline({ paused: true })

    tl.current
    .to(upperTextSplit.chars, {
      yPercent: -200,
      duration: 0.8,
      ease: "expo.in",
      stagger:0.05
    })
    .fromTo(lowerTextSplit.chars, {
        yPercent:100,
    } ,{
        yPercent: -100,
        duration:0.8, 
        ease: "expo.in",
        stagger:0.05,
        opacity:1
    }, "<")

  })

  return (
    <div className="min-h-screen bg-black">

      <div
        onMouseEnter={() => tl.current?.play()}
        onMouseLeave={() => tl.current?.reverse()}
        className="text-7xl font-black bg-red-500 cursor-pointer px-6 py-4 w-full overflow-hidden relative"
      >
        <span className="upper-text">
          ABOUT US
        </span>
        <br />
        <span className="lower-text text-black absolute">
        ABOUT US
        </span>
      </div>

    </div>
  )
}

export default StaggeredText;
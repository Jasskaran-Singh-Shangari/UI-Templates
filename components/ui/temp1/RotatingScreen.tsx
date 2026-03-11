"use client"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

interface RotatingScreenProps{
    src?: string
}

const RotatingScreen = ({src}: RotatingScreenProps) => {

    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target: ref,
        offset:["start end","end center"]
    });

    const popContent=useSpring(useTransform(scrollYProgress,[0, 0.3], ["70deg", "0deg"]), {
        stiffness: 200,
    })

  return (
    <motion.div
    style={{
        rotateX: popContent
      }}  
    ref={ref} className="w-full flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
      <Image
      className="rounded-2xl border border-neutral-300" src="/images/dashboard.webp" alt="Dashboard" width={800} height={500} />
    </motion.div>
  )
}

export default RotatingScreen

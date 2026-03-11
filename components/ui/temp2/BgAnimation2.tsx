"use client"
import { motion } from "motion/react";

const BgAnimation2 = () => {
  return (
    <div className="w-full max-w-lg">
      <motion.div
      animate={{
        x:200,
        y: 200
      }} 
      transition={{
        duration:3,
        repeat: Infinity,
        repeatType:"reverse",
        ease: "easeInOut"
      }}
      className="w-50 h-50 bg-purple-300 rounded-full absolute mix-blend-multiply top-10 left-20 blur-lg" />
      <motion.div 
      animate={{
        // x:200,
        scale:1.2,
        y:200,
      }}
      transition={{
        duration:3,
        repeat: Infinity,
        repeatType:"reverse",
        ease: "easeInOut"
      }}
      className="w-50 h-50 bg-red-300 rounded-full absolute mix-blend-multiply top-20 blur-lg" />
      <motion.div 
      animate={{
        scale:1.5,
        x:300,
      }}
      transition={{
        duration:3,
        repeat: Infinity,
        repeatType:"reverse",
        ease: "easeInOut"
      }}
      className="w-50 h-50 bg-amber-300 rounded-full absolute mix-blend-multiply -left-8 blur-lg" />
    </div>
  )
}

export default BgAnimation2

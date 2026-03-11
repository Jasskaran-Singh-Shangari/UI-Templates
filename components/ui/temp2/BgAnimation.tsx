"use client"
import { motion } from 'motion/react'

const BgAnimation = () => {
  return (
        <div className="w-full max-w-lg h-full absolute right-0 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 font-bold space-y-5">
          <div className="text-6xl bg-white w-100 h-20 rounded-2xl p-5 flex items-center gap-2">
            <span className="w-70 h-5 bg-neutral-700 rounded-md"></span>
            <span className="flex-1 h-5 bg-pink-500 rounded-md"></span>
          </div>
          <div className="bg-white w-100 h-20 rounded-2xl p-5 flex items-center gap-2">
            <span className="w-30 h-5 bg-neutral-700 rounded-md"></span>
            <span className="flex-1 h-5 bg-amber-500 rounded-md"></span>
          </div>
          <div className="text-6xl bg-white w-100 h-20 rounded-2xl p-5 flex items-center gap-2">
            <span className="w-50 h-5 bg-neutral-700 rounded-md"></span>
            <span className="flex-1 h-5 bg-blue-500 rounded-md"></span>
          </div>
        </div>
        <motion.div 
        animate={{
          scale: 1.2,
          y:100
        }}
        transition={{
          duration:2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
        className="w-72 h-72 bg-purple-300 rounded-full absolute blur-xl" />
        <motion.div
        animate={{
          scale:0.8,
          x:100
        }}
        transition={{
          duration:2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 1
        }}
        className="w-72 h-72 bg-amber-200 rounded-full absolute  blur-xl mix-blend-multiply" />
        <motion.div 
        animate={{
          y:-100
        }}
        transition={{
          duration:3,
          delay:2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="w-72 h-72 bg-pink-300 rounded-full absolute mix-blend-multiply blur-xl" />
      </div>
  )
}

export default BgAnimation

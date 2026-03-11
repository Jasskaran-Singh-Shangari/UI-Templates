"use client"
import { motion, useAnimate } from "motion/react";

const AnimationSequences = () => {

    const [scope, animate]=useAnimate()

    const startAnimating=async()=>{

        animate(".text", {
            // display: "none",
            opacity: 0
        }, {
            duration:0.1
        });
        await animate("button", {
            width: "5rem",
            borderRadius: "1000px"
        }, {
            duration:0.3
        });
        await animate("button", {
            opacity:1,
            scale:[1, 0.8, 1.2, 1],
            backgroundColor: "var(--color-green-500)"
        }, {
            duration:0.8,
        })
        animate(".check-icon", {
            opacity:1
        }, {
            duration:0.2
        });
        animate(".check-icon path", {
            pathLength: 1
        }, {
            duration: 0.3
        })
    }
  return (
    <div ref={scope} className="relative w-60 h-20 flex items-center justify-center">
        <motion.button
        onClick={()=> startAnimating()}
        style={{
            width:"30rem",
        }}
        className="h-20 rounded-2xl bg-purple-500 text-white font-medium cursor-pointer">
            <span className="text"
            >Purchase Now ($169)</span>
        </motion.button>
        <motion.svg
        style={{
            opacity:0
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFFFFF"
        strokeWidth={3}
        className="absolute inset-0 pointer-events-none m-auto z-50 w-8 h-8 check-icon"
        >
            <motion.path
            initial={{
                pathLength: 0
            }}
            transition={{
                duration:0.3,
                type:"tween",
                ease:"easeInOut"
            }}
            strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></motion.path>
        </motion.svg>
    </div>  
  )
}

export default AnimationSequences;

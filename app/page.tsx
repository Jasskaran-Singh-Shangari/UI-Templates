"use client"
import { motion, stagger, useAnimate } from "motion/react"
import { useEffect } from "react";

export default function Home() {

  const welcome="Welcome to my repository where I will be keeping a lot of Template that I made by taking references from here and there. These templates might help me in the future, but right now I am using them to release my creative juices. So if these do become helpful to the future me, then Thank Me from there and Welcome."

  const [scope, animate]=useAnimate();

  useEffect(()=>{
    startAnimation()
  }, [])

  const startAnimation=()=>{
    animate("span", {
      opacity:1,
      y:0,
      filter: "blur(0px)"
    }, {
      duration: 1,
      ease:"easeInOut",
      delay: stagger(0.05)
    })
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black flex items-center justify-center">
      <div ref={scope} className="max-w-4xl">
      {welcome.split(" ").map((word, idx)=>(
          <motion.span
          style={{
            opacity:0,
            y:10,
            filter: "blur(10px)",
            fontFamily: "Jost"
          }} 
          className="text-4xl inline-block bg-gradient-to-b from-gray-200 via-gray-400 to-gray-100 bg-clip-text text-transparent"
          key={idx}> {word} &nbsp; </motion.span>
        ))
      }
      </div>
    </div>
  );
}

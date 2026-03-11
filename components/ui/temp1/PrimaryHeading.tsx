"use client"
import { motion, stagger, useAnimate } from "motion/react"
import { useEffect } from "react";

interface PrimaryHeadingProps{
    heading: string;
    subHeading?: string;
    className?:string;
}

const PrimaryHeading = ({heading, subHeading}: PrimaryHeadingProps) => {

    // ANIMATION
    const [scope, animate]=useAnimate();

    useEffect(()=>{
        startAnimation()
    }, [])

    const startAnimation=async()=>{
        await animate("span", {
            y:0,
            filter: "blur(0px)",
            opacity:1
        }, {
            duration:1,
            delay: stagger(0.02)
        })
    }

  return (
    <div ref={scope} className='w-full flex flex-col items-center justify-center text-neutral-800 gap-5'>
        <div className='max-w-5xl text-center'>
            {heading.split(" ").map((word, idx)=>(
                <motion.span className="text-6xl font-bold" 
                style={{
                    opacity:0,
                    y:10,
                    filter: "blur(10px)"
                }}
                key={idx}> {word} &nbsp; </motion.span>
            ))}
        </div>
        <div className="text-xl max-w-3xl text-center">
            {subHeading?.split(" ").map((subH, idx)=>(
                <motion.span
                style={{
                    y:10,
                    opacity:0,
                    filter:"blur(10px)"
                }}
                key={idx}> {subH} </motion.span>
            ))}
        </div>
    </div>
  )
}

export default PrimaryHeading;

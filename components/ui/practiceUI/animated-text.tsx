"use client"
import { motion, stagger, useAnimate } from "motion/react"
import { useEffect } from "react";

export default function AnimatedText() {

    const text="Welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***."

    const [scope, animate] = useAnimate();


    useEffect(()=>{
        startAnimating();
    }, []);

    const startAnimating=()=>{
        animate("span", {
            opacity: 1,
            filter: "blur(0px)",
            y:0
        }, {
            duration: 1,
            ease:"easeInOut",
            delay: stagger(0.05)
        })
    }

    
    return (
        <div ref={scope} className="max-w-4xl text-white mx-auto text-4xl font-bold" >
            {text.split(" ").map((word, idx)=>(
                <motion.span className="inline-block"
                style={{
                    opacity:0,
                    filter: "blur(10px)",
                    y:10
                }} key={idx}>
                    {word} &nbsp; 
                </motion.span>
            ))}

        </div>
    );
}
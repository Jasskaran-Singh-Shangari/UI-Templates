"use client"
import { animate, KeyframeOptions, motion, useIsomorphicLayoutEffect } from "motion/react";
import { useRef } from "react";

interface AnimatedCounterProps{
    from:number | string;
    to:number | string;
    animationOptions?: KeyframeOptions
}

const AnimatedCounter=({from, to, animationOptions}: AnimatedCounterProps)=>{

    const ref=useRef<HTMLSpanElement>(null);

    useIsomorphicLayoutEffect(()=>{
        const element=ref.current;
        if(!element) return;

        element.textContent=String(from);

        const controls=animate(from, to, {
            duration:0.5,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value){
                if(typeof value === "string") return;
                element.textContent=value.toFixed(0);
            }
        })
        return ()=>{
                controls.stop()
            }

    }, [ref, from, to])

    return (
        <span ref={ref} />
    )
}

export default AnimatedCounter;
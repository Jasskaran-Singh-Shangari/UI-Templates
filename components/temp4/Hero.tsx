"use client"
import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Navbar from "@/components/ui/temp4/Navbar";
import MagneticButton from "@/components/ui/temp4/MagneticButton";

const Hero = () => {

    const text="Welcome to the 去你的 space. An empathetic space where each member can give 去你的 to anyone. Whether you want to share your story or immerse in our vibrant community. You're welcome here."

    useGSAP(()=>{
        const titleSplit=new SplitText(".title", {type: "chars"})
        const maskTimeline=gsap.timeline();
        const revealTimeline=gsap.timeline();

        // TEXT REVEAL TIMELINE
        revealTimeline
        .fromTo(titleSplit.chars, {
            yPercent:200,
            
        }, {
            yPercent:0,
            duration:0.7,
            stagger:0.08,
            ease:"expo.out"
        })

        // MASK OPEN TIMELINE
        maskTimeline
        .to(titleSplit.chars[0], { xPercent:-200, duration:1, ease:"expo.inOut",delay:1.5})
        .to(titleSplit.chars[2], { xPercent:200, duration:1, ease:"expo.inOut"}, "<")
        .fromTo(".mask", {opacity:0, width:"0%", height:"0%", skewX:-70}, {opacity:1, width:"100%", height:"100%", duration:1.5, ease: "expo.out", skewX:0},"-=0.5")
        .to(".sub-title",{opacity:1, duration:1, ease:"expo.out"}, "<")
        .from(".space", {yPercent:-100, ease:"expo.out", duration:1, opacity:0}, "<")
        .from("button", {opacity:0, duration:1, ease:"power1.in"}, "<")
        })


    return (
        <div className="min-h-screen relative">
            <div className="hero relative z-10 h-screen flex flex-col items-center justify-center gap-5 bg-black">
                <div className="overflow-hidden w-full flex items-center justify-center">
                    <span
                    style={{
                        fontFamily:"Playfair Display"
                    }} 
                    className="title text-9xl w-full flex items-center justify-center font-semibold">
                        去你的
                    </span>
                </div>
                <span
                style={{
                    fontFamily:"Jost"
                }} 
                className="sub-title text-xl w-full max-w-2xl text-center opacity-0">
                    {text.toUpperCase()}
                </span>
                <video src="/videos/flow.mp4" autoPlay muted loop className="mask absolute -z-10 -translate-x-1/2 -translate-y-1/2 w-10 h-10 top-1/2 left-1/2 object-cover" />
                <MagneticButton text="Start exploring" />
            </div>
        </div>
    );
}

export default Hero;


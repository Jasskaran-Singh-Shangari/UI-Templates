"use client"
import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Navbar from "@/components/ui/temp4/Navbar";
import MagneticButton from "@/components/ui/temp4/MagneticButton";
import { useRef } from "react";
import { X } from "lucide-react";

const Hero = () => {

    const text="Welcome to the 去你的 space. An empathetic space where each member can give 去你的 to anyone. Whether you want to share your story or immerse in our vibrant community. You're welcome here."

    const exploreTimeline=useRef<gsap.core.Timeline | null>(null);

    useGSAP(()=>{
        const titleSplit=new SplitText(".title", {type: "chars"})
        const maskTimeline=gsap.timeline();
        const revealTimeline=gsap.timeline();
        exploreTimeline.current=gsap.timeline({paused: true});
        const subSplit=new SplitText(".sub-title", {type:"lines"});

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

        gsap.set(".content-expereince", {
            opacity:0,
            filter:"blur(10px)",
            yPercent:100
        })

        // START EXPLORING TIMELINE

        exploreTimeline.current
        .to(titleSplit.chars, {
            yPercent:-200,
            duration:1,
            ease:"expo.in",
            stagger:{
                each:0.05,
                from: "center"
            }
        })
        .to(subSplit.lines, {
            yPercent:-500,
            opacity:0,
            ease:"expo.in",
            stagger:0.05
        }, "-=0.5")
        .to(".explore-button",{
            yPercent: "500",
            opacity:0,
            filter:"blur(10px)",
            duration:1
        }, "<")
        .to(".content-expereince", {
            yPercent:0,
            opacity:1,
            filter:"blur(0px)"
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
        <div className="min-h-screen relative overflow-hidden">
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
                <MagneticButton className="explore-button" onclick={()=>{exploreTimeline.current?.play()}} text="Start exploring" />
            </div>
            <div className="content-expereince absolute inset-0 bg-transparent z-20 flex flex-col items-center justify-center opacity-0">

               <MagneticButton icon={X} onclick={()=> {exploreTimeline.current?.reverse()}} className="bg-white p-5 rounded-full" />
                    
               
                
                <span
                style={{
                    fontFamily: "Playfair Display"
                }} 
                className="text-4xl heading">
                    Explore your passion with us
                </span>

                <p
                style={{
                    fontFamily: "Jost"
                }} 
                className="content text-xl text-center max-w-xl leading-relaxed p-10">
                    Discover new opportunities, unlock your potential, and dive into experiences that ignite your curiosity. Whether you're looking to learn, create, or grow, 
                we provide the platform to help you pursue what truly inspires you.
                </p>
                
                
            </div>
        </div>
    );
}

export default Hero;


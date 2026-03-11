"use client"
import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";


const Experience = () => {

    
    useGSAP(()=>{
        const revealTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:"#experience",
                start:"top center"
            }
        })
        .from(".heading span" ,{
            xPercent: -200,
            stagger:0.08,
            duration:2,
            ease:"expo.out", 
        })
        .from(".motivation p", {
            opacity:0,
            duration:1,
            ease:"power1.in"
        },"<")
        .to(".reveal", {
            scaleY:0,
            duration:1,
            ease:"expo.out"
        }, "<")
    })

  return (
    <div id="experience" className='h-screen bg-white p-10'>
      <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 w-full h-full">
        <div className="text-orange-500 text-8xl font-black col-span-1 flex flex-col items-center justify-center heading">
            <span>去</span>
            <span>你</span>
            <span>你</span>
        </div>

        <span className="col-span-3 text-black flex items-center justify-end [writing-mode:vertical-rl] motivation">
            <p className="font-bold text-black h-[90%]"> 生活或许艰难，但这并不意味着你没有理由苟活。不要放弃，继续奋斗。总有一天，你的机会会到来，你会胜利，你会收获你一直追寻的果实。但对于那些一心复仇的人，我们只有一句“去你的”，让他们生不如死</p>
        </span>

        <div className="col-span-5 flex items-center justify-center w-full bg-green-500 overflow-hidden rounded-2xl relative">
            <video
                className="object-cover"
                src="/videos/experience.mp4"
                autoPlay
                muted
                loop
            />
            <div className="absolute inset-0 bg-white z-10 reveal origin-bottom" />
        </div>

        <div className="col-span-3 flex flex-col items-center justify-evenly">
            <span
            style={{
            fontFamily: "Bebas Neue"
            }} 
            className="text-black font-bold text-4xl text-center p-3 parallax1">
                GIVING 去你你 TO PEOPLE HAS BECOME MORE SATISFYING.
            </span>
            <span
            style={{
                fontFamily: "Text Me One"
            }} 
            className="text-neutral-500 parallax2">
                Welcome to 去你你 (SPACE)
            </span>
        </div>
      </div>
    </div>
  )
}

export default Experience

"use client"
import gsap from "@/lib/gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import { ArrowUpRight, Ellipsis, X } from "lucide-react";
import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

const Navbar = () => {
    const navTimeline = useRef<gsap.core.Timeline | null>(null);
    const [navOpen, setNavOpen]=useState(false);

    // NAV TIMELINE 
    useGSAP(()=>{
        gsap.set(".full-nav", {
        height: "0%",
        opacity: 0,
        overflow: "hidden"
        });
        
        navTimeline.current = gsap.timeline({ paused: true });

        const menuSplit=new SplitText("ul li, ul li a", {type: "words"})
        const tagSplit=new SplitText(".tag", {type: "words"})

        navTimeline.current
        .to(".full-nav", {
            height: "85vh",
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
        })
        .from("hr", {width:"0%", duration:1, ease:"ease.out"})
        .from(".line", {width:"0%", duration:1, ease:"ease.out"}, "<")
        .from(menuSplit.words, {yPercent: -100, stagger:0.06, duration:0.5, ease: "expo.out"}, "-=0.5")
        .from(tagSplit.words, {yPercent:-100, stagger:0.02,duration:0.5,ease:"expo.out"},"<")
        .from(".fade-in", {opacity:0},"<")
        .to(".open-up", {scaleY:0}, "<")

        const navTween=gsap.timeline({
            scrollTrigger:{
                trigger:".nav",
                start:"bottom top",
                scrub:1
            }
        });

        navTween
        .fromTo(".nav", {
            backgroundColor:"transparent"
        }, {
            backgroundColor:"#000000/50",
            backdropFilter:"blur(10px)",
            duration:0.5,
            ease:"power1.inOut"
        })

        })
    
    // NAV OPENING AND CLOSING ANIMATION
    const openNavbar = () => {
        navTimeline.current?.play();
    };
    const closeNavbar = () => {
        navTimeline.current?.reverse();
    };
    

  return (
    <div className="fixed top-0 z-20 w-full p-5 nav">
                <nav className="flex items-center justify-between">
                    <div className="cursor-pointer space">
                        <a href="/temp4" className="text-lg">
                            去你的 (Space)
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <button className="underline font-semibold">EN</button>
                        <button>FR</button>
                        <button>DE</button>
                        <span className="cursor-pointer rounded-full"
                        onClick={()=>{
                            openNavbar()
                            setNavOpen(true)
                            }}>
                            <MagneticButton icon={Ellipsis} />
                        </span>
                    </div>
                </nav>
                        <div className="full-nav h-[85vh] w-full absolute inset-x-0 top-0 bg-white">
                            {/* NAVIGATION */}
                            <nav className="flex items-center justify-between p-5 text-black">
                                <div className="cursor-pointer space">
                                    <Link href="/temp4" className="text-lg">
                                        去你的 (Space)
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center gap-5">
                                    <button className="underline font-semibold">EN</button>
                                    <button>FR</button>
                                    <button>DE</button>
                                    <span className="cursor-pointer rounded-full"
                                    onClick={()=>{
                                        closeNavbar()
                                        setNavOpen(false)
                                        }}>
                                        <MagneticButton icon={X} />
                                    </span>
                                </div>
                            </nav>
                            <hr className="text-black" />
                            <div 
                            style={{
                                fontFamily:"Jost"
                            }}
                            className="menu flex items-start justify-between p-5">
                                <span className="text-neutral-600 text-sm tag overflow-hidden">THE EXPERIENCE</span>
                                <div className="flex flex-col text-left w-[50%] text-black">
                                    <ul className="group">
                                        <li className="text-3xl cursor-pointer overflow-hidden relative transition-transform hover:translate-x-5">去你的 (Space)
                                            <span className="line absolute left-0 bottom-0 w-full h-px bg-neutral-400" />
                                        </li>
                                        <li className="text-3xl cursor-pointer overflow-hidden relative transition-transform hover:translate-x-5">
                                            Share your Story
                                            <span className="line absolute left-0 bottom-0 w-full h-px bg-neutral-400" />
                                        </li>
                                        <li className="text-3xl cursor-pointer overflow-hidden relative transition-transform hover:translate-x-5">
                                            <a href="#experience"
                                            onClick={closeNavbar}
                                            className="w-full" >
                                            About the Experience</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="text-black" />
                            <div
                            style={{
                                fontFamily: "Jost"
                            }}
                            className="menu flex items-start justify-between p-5">
                                <span className="tag text-neutral-600 text-sm overflow-hidden">THE ZONE</span>
                                <div className="divide-y divide-black flex flex-col text-left w-[50%] text-black">
                                    <ul className="group">
                                        <li className="text-3xl cursor-pointer overflow-hidden relative transition-transform hover:translate-x-5">
                                            About the Zone
                                            <span className="line absolute left-0 bottom-0 w-full h-px bg-neutral-400 " />
                                        </li>
                                        <li className="text-3xl cursor-pointer overflow-hidden relative transition-transform hover:translate-x-5">
                                            Watch Online
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="text-black" />

                            <div className="grid md:grid-cols-13 p-10">
                                <div id="pattern" className="col-span-2 w-52 h-52 origin-top overflow-hidden relative hover:scale-95 transition-all duration-900">
                                <img  src="/images/pattern.webp" alt="pattern" className="hover:scale-110 transition-all duration-900" />
                                <div className="open-up absolute inset-0 bg-white origin-bottom" />
                                </div>
                                <div className="flex flex-col mx-5 items-start h-50 justify-between text-black col-span-3 relative">
                                    <span className="cursor-pointer hover:text-neutral-500">Enter the Zone</span>
                                    <span className="cursor-pointer hover:text-neutral-500 flex items-center justify-center">Watch the Zone <ArrowUpRight /> </span>
                                    <div className="open-up absolute inset-0 bg-white origin-bottom" />
                                </div>
                                <Link href="/temp4" className="fade-in text-xs h-50 col-span-1 text-black place-content-end text-center">FACEBOOK</Link>
                                <Link href="/temp4" className="fade-in text-xs h-50 col-span-1 text-black place-content-end text-center">INSTAGRAM</Link>
                                <div className="col-span-2" />
                                <Link href="/temp4" className="fade-in text-xs h-50 col-span-1 text-black place-content-end text-center">CONTACT US</Link>
                                <Link href="/temp4" className="fade-in text-xs h-50 col-span-1 text-black place-content-end text-center">PRIVACY POLICY</Link>
                                <Link href="/temp4" className="fade-in text-xs h-50 col-span-1 text-black place-content-end text-center">PRESS</Link>
                                <Link href="/temp4" className="fade-in text-xs h-50 col-span-1 text-black place-content-end text-left">CREDITS</Link>
                            </div>
                        </div>
            </div>
  )
}

export default Navbar

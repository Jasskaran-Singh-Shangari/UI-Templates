"use client"
import gsap from "@/lib/gsap"
import { useGSAP } from "@gsap/react"
import { Draggable } from "gsap/all"
import { useRef, useState } from "react"


const DraggableNavbar = () => {

    const navRef=useRef<gsap.core.Timeline | null>(null);
    const fullNavRef=useRef<gsap.core.Timeline | null>(null);
    const [menuOpen, setMenuOpen]=useState(false);

    useGSAP(()=>{

        navRef.current=gsap.timeline({paused: true});
        fullNavRef.current=gsap.timeline({paused: true});

        // DRAGGABLE NAVBAR AND SNAPPING ACTION.
        const SNAP_DISTANCE = 120;
        Draggable.create(".nav", {
        type: "x,y",
        bounds: ".bounds",
        onDragEnd() {
            const el = this.target
            const rect = el.getBoundingClientRect()

            const vw = window.innerWidth
            const vh = window.innerHeight

            let targetX = this.x
            let targetY = this.y

            // LEFT
            if (rect.left < SNAP_DISTANCE) {
            targetX = 0
            }

            // RIGHT
            if (vw - rect.right < SNAP_DISTANCE) {
            targetX = vw - rect.width
            }

            // TOP
            if (rect.top < SNAP_DISTANCE) {
            targetY = 0
            }

            // BOTTOM
            if (vh - rect.bottom < SNAP_DISTANCE) {
            targetY = vh - rect.height
            }

            gsap.to(el, {
            x: targetX,
            y: targetY,
            duration: 0.4,
            ease: "power3.out"
            })
        }
        })

        // HOVER ANIMATION
        // navRef.current
        // .to(".pipe-left", {
        //     x:-2,
        //     duration:0.2
        // })
        // .to(".pipe-right", {
        //     x:2,
        //     duration:0.2
        // }, "<")

        // CLICK ANIMATION
        fullNavRef.current
        .to(".nav", {
            width:"40%",
            duration:1,
            ease:"expo.inOut"
        }, "<")
        .to(".nav-circle", {
            rotate:360,
            duration: 0.5,
            ease:"expo.out"
        }, "-=0.45")
        .to(".pipe-left", {
            rotation: 45,
            transformOrigin: "center",
            x: 3
        },"<")
        .to(".pipe-right", {
            rotation: -45,
            transformOrigin: "center",
            x: -3
        }, "<")
        .fromTo(".nav-item",
        {
            scale: 0,
            width: 0,
            padding: 0,
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            scale: 1,
            width: "100%",
            padding: "4px",
            opacity: 1,
            filter: "blur(0px)",
            stagger: {
                each: 0.05,
                from: "end"
            },
            ease: "expo.out"
        }, "<")
    }, [])

    // const navOnMouseEnter=()=>{
    //     navRef.current?.play();
    // }
    // const navOnMouseLeave=()=>{
    //     navRef.current?.reverse();
    // }
    const navOnClick=()=>{
        if(menuOpen) fullNavRef.current?.play();
        else fullNavRef.current?.reverse();
    }

  return (
    <div className="bounds min-h-screen fixed inset-0 z-10 bg-red-500">
    <div className="nav absolute top-0 bg-[#e8e6e7] p-2 rounded-full 
    flex items-center justify-evenly gap-1 cursor-pointer shadow-2xl">
        <span
        style={{
            fontFamily: "Montserrat"
        }} 
        className="text-5xl text-black font-black">
            NODE 
        </span>

        <a href="/temp5" className="nav-item shadow-lg flex-1 p-0 w-0 scale-0 opacity-0 blur-[10px] bg-neutral-300 rounded-full text-center text-black">Home</a>
        <a href="/temp5" className="nav-item shadow-lg flex-1 p-0 w-0 scale-0 opacity-0 blur-[10px] bg-neutral-300 text-black rounded-full text-center">Work</a>
        <a href="/temp5/about" className="nav-item shadow-lg flex-1 p-0 w-0 scale-0 opacity-0 blur-[10px] bg-neutral-300 text-black rounded-full text-center">About Us</a>

        <div 
        // onMouseEnter={navOnMouseEnter}
        // onMouseLeave={navOnMouseLeave}
        onClick={()=>{
            setMenuOpen((prev)=> !prev)
            navOnClick();
        }}
        className="bg-[#0f0f0f] w-10 h-10 mx-2 rounded-full flex items-center justify-center cursor-pointer font-bold nav-circle">
        <svg width="20" height="20" viewBox="0 0 20 20">
            <line className="pipe-left" x1="7" y1="3" x2="7" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line className="pipe-right" x1="13" y1="3" x2="13" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
    </div>
    </div>
  )
}

export default DraggableNavbar

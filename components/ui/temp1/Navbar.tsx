"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"
import Logo from "./Logo"

const Navbar = () => {
    const links=[
        {
            text:"Home",
            link:"/temp1"
        },
        {
            text:"About",
            link:"/temp1/about"
        },
        {
            text:"Contact",
            link:"/temp1/contact"
        },
        {
            text:"Login",
            link:"/temp1/login"
        },
    ]
    const [hovered, setHovered]=useState<number | null>(null);
    const [selected, setSelected]=useState<string | null>("Home");
  return (
    <div
    style={{
        fontFamily: "Jost"
    }} 
    className="w-full text-neutral-100 flex items-center justify-center">
        <nav className="w-[50%] flex items-center justify-center relative p-2 text-base rounded-xl border-2 border-neutral-300/10 bg-neutral-800 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
            <Logo />
            {links.map((link, idx)=>(
            <Link href={link.link} 
            onMouseEnter={()=> setHovered(idx)}
            onMouseLeave={()=> setHovered(null)}
            key={idx} className="group relative px-10 py-2">
                <div>
                {idx === hovered && (
                    <motion.div layoutId="hover" className="absolute inset-0 bg-white/30 rounded-xl py-5 z-5"></motion.div>
                )}
                 {/* TODO: SELECTED ICONS */}
                {}
                <span className="relative z-10 group-hover:text-neutral-800">{link.text}</span>
                </div>
            </Link>
        ))}
        {/* <span className="h-px absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="h-1.25 absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent blur-sm" /> */}
        </nav>
    </div>
  )
}

export default Navbar

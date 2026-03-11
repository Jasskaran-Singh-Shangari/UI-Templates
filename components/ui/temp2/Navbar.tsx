"use client"
import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {

    const links=[
    {
        text: "Home",
        link: "/"
    },
    {
        text: "About",
        link: "/about"
    },
    {
        text: "Contact",
        link: "/contact"
    },
    {
        text: "Login",
        link: "/login"
    },
    ];
    const [hovered, setHovered]=useState<number | null>(null);

  return (
    <div style={{
        fontFamily: "Montserrat"
    }} 
    className="w-full fixed top-0 left-0 z-50 flex items-center p-5 bg-white/70 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-1 mx-10">
            <span className="text-neutral-600 text-xl font-bold">
                Zyro
            </span>
            <span
            style={{
                fontFamily : "Noto Serif Display"
            }} 
            className="text-white text-sm bg-green-400 px-2 py-1 rounded-lg font-semibold">beta</span>
        </Link>
        <nav className="flex p-5 items-center justify-center text-neutral-600 cursor-pointer absolute left-1/2 -translate-x-1/2">
            {links?.map((link, idx)=>(
                <Link href={link.link} className="relative px-10 py-2"
                onMouseEnter={()=> setHovered(idx)}
                onMouseLeave={()=> setHovered(null)}
                key={idx}>
                    {
                        hovered === idx && <motion.span className="absolute inset-0 bg-green-400 rounded-xl"
                        layoutId="hover" />
                    }
                    <span className={`${hovered === idx ? "text-white" : ""} relative  z-10`}>
                        {link.text}
                    </span>
                </Link>
            ))}
        </nav>
    </div>
  )
}

export default Navbar

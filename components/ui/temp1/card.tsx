"use client"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { X } from "lucide-react"
import { useState } from "react"

export default function Card(){
    const [open, setOpen] = useState(true);

    return (
        <>
        <AnimatePresence>
        {open && <motion.div 
        initial={{
            filter: "blur(10px)"
        }}
        animate={{
            filter:"blur(0px)"
        }}
        exit={{
            opacity: 0,
            filter: "blur(10px)"
        }}
        className={cn("min-h-104 h-104 w-72 rounded-xl", "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ", "p-6 flex flex-col text-black bg-white")}>
            <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
            <p className="text-[10px] mt-2 text-neutral-600">A collection of beautiful UI components, let's get on with it. </p>
            <div className="flex items-center justify-center">
                <button onClick={()=> setOpen(false)} className="text-[10px] flex items-center gap-1 mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
                    <Image
                    className="h-4 w-4"
                     width={50} height={50} alt="logo" src="./globe.svg" /> Aceternity
                     <X className="h-3 w-3 text-neutral-400" />
                    </button>
            </div>
            <div
             className="flex-1 border border-neutral-200 border-dashed bg-gray-200 rounded-lg mt-4 relative shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                <motion.div
                initial={{
                    opacity: 0,
                    filter: "blur(10px)"
                }}
                whileHover={{
                    opacity: 1,
                    filter: "blur(0px)"

                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                 className="absolute bg-white h-full w-full inset-0 rounded-lg divide-y divide-neutral-200 border border-neutral-200 border-dashed">
                    <div className="text-[10px] flex items-start p-4">abcd</div>
                    <div className="text-[10px] flex items-start p-4">abcd</div>
                    <div className="text-[10px] flex items-start p-4">abcd</div>
                    <div className="text-[10px] flex items-start p-4">abcd</div>
                    <div className="text-[10px] flex items-start p-4">abcd</div>
                </motion.div>
            </div>
        </motion.div>}
        </AnimatePresence>
        </>
        
    )
    
}
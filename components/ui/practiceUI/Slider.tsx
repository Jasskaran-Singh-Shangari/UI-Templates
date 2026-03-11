"use client"
import { useState } from "react";
import { motion } from "motion/react";

export type Roles="Admin" | "Viewer" | "Operational";

const Slider = () => {
  const roles=["Admin", "Viewer", "Operational"]
  const [selected, setSelected]=useState<Roles>("Viewer")

  return (
    <div className="flex items-center justify-center text-black text-sm bg-neutral-300 border border-neutral-200 gap-5 rounded-2xl cursor-pointer shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
      {roles.map((role, idx)=>(
        <div className="relative p-6"
        onClick={()=> setSelected(role as Roles)}
        key={idx}>
          {role === selected && (
            <motion.div 
            layoutId="selectedRole"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 bg-white rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"></motion.div>
          )}
          <span className={`relative z-10`}> {role} </span>
        </div>
      ))}
    </div>
  )
}

export default Slider;
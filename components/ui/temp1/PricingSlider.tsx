"use client"
import { useSubscribeStore } from "@/store/subscription.stote"
import { motion } from "motion/react"

const plans=["Annual", "Monthly"]

const PricingSlider = () => {

    const {click, setClick} = useSubscribeStore();

  return (
    <div className='w-[20%] flex justify-center rounded-full border border-neutral-500 cursor-pointer p-2'>
      {plans.map((plan, idx)=>(
        <div onClick={()=> setClick(plan as "Monthly" | "Annual")}
        className="relative px-10 py-4 z-10 group"
        key={idx}> 
            {
                plan === click &&
                <motion.span layoutId="selected"
                className="absolute inset-0 bg-cyan-600 z-5 rounded-full" /> 
            }
            <span className={`relative z-10 text-neutral-800 ${click === plan ? "text-white" : ""}`}> {plan} </span>
        </div>
      ))}
    </div>
  )
}

export default PricingSlider

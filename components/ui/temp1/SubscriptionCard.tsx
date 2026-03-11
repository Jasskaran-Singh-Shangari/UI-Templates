"use client"
import { CircleChevronRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { useSubscribeStore } from "@/store/subscription.stote";

interface SubscriptionCardProps{
    plan: string;
    description: string;
    annualPrice: number;
    monthlyPrice: number;
    currency: string;
    features: string[];
    className?: string
}


const SubscriptionCard = ({plan, description, annualPrice, monthlyPrice, currency, features, className}: SubscriptionCardProps) => {

    const {click} = useSubscribeStore()
  return (
    <div className={`min-w-md flex flex-col items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-10 rounded-2xl gap-2 ${className}`}>
        {/* PLAN NAME */}
      <span
      style={{
        fontFamily: "Bebas Neue"
      }} 
      className="text-2xl text-neutral-800 text-left w-full"> {plan} </span>
        <span className="text-neutral-500 w-full text-left text-sm">
            {description}
        </span>
        {/* PRICE */}
        <span
        style={{
            fontFamily: "Jost"
        }} 
        className="w-full text-4xl font-bold text-left text-neutral-800">
            {currency} 
            {click === "Annual" ? <AnimatedCounter from={annualPrice} to={monthlyPrice} /> : <AnimatedCounter from={monthlyPrice} to={annualPrice} /> }
        </span>
        <button className="p-2 bg-neutral-800 w-full text-center rounded-2xl hover:bg-neutral-800/80 relative">
        Get Started
        <span className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-black to-transparent" />
        <span className="absolute inset-x-0 bottom-0 h-1.25 bg-linear-to-r from-transparent via-black to-transparent blur-sm" />
        </button>
        {/* AVAILABLE FEATURES */}
        <div className="w-full text-left flex flex-col items-center space-y-3">
        {features?.map((plan, idx)=>(
            <div key={idx} className="flex items-center w-full gap-3">
                <CircleChevronRight size={20} className="text-neutral-400" />
                <span className="text-neutral-400">{plan}</span>
            </div>
        ))}
            
        </div>
    </div>
  )
}

export default SubscriptionCard;

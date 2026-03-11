import { ReactNode } from "react";

interface FeatureCardProps{
    heading?: string; 
    subText?: string;
    icon?: ReactNode;
}

const FeatureCard = ({heading, subText, icon}: FeatureCardProps) => {
  return (
    <div
    style={{
        fontFamily: "Montserrat"
    }} 
    className="flex flex-col gap-2 w-[30%] p-5">
      <span className="w-10 h-10 rounded-full" >
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-black text-3xl font-semibold">
            {heading}
        </span>
        <span className="text-xl text-neutral-600">
            {subText}
        </span>
      </div>
    </div>
  )
}

export default FeatureCard

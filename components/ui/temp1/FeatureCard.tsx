import { ChartPie } from "lucide-react";
import { motion, MotionValue } from "motion/react";


interface FeatureCardProps{
    icon?: string;
    heading: string,
    content: string,
    boxShadow: MotionValue<string>
}

const FeatureCard = ({heading, content, boxShadow} : Partial<FeatureCardProps>) => {
  return (
    <div className='flex flex-col items-start justify-start text-left gap-2 p-10 w-[80%]'>
        <motion.div style={{
            boxShadow,
        }} 
        className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
            <ChartPie className="text-cyan-500" />
        </motion.div>
        <h2
        style={{
            fontFamily: "Jost"
        }} 
        className="text-2xl">
            {heading}
        </h2>
        <h3
        style={{
            fontFamily: "Jost"
        }} 
        className="text-base">
            {content}
        </h3>
      
    </div>
  )
}

// Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.

export default FeatureCard

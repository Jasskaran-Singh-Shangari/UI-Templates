"use client"
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useMotionTemplate, animate, useMotionValue } from "motion/react";
import { useEffect } from "react";
import FeatureCard from "../ui/temp1/FeatureCard";


const AuroraBg = () => {

    const COLORS=["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
    const color=useMotionValue(COLORS[0])
    const backgroundImage=useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
    const boxShadow=useMotionTemplate`0px 5px 5px ${color}`

    useEffect(()=>{
        animate(color, COLORS, {
            duration:10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])
  return (

    // BACKGROUND //
    <motion.div
    style={{
        backgroundImage
    }} 
    className='absolute inset-0 overflow-hidden place-content-center bg-gray-950 flex text-center'>
        <Canvas className="absolute inset-0">
            <Stars radius={100} depth={50} count={3200} factor={4} saturation={0} fade speed={1} />
        </Canvas>

      {/* CONTENT */}
      
      <div className="absolute flex flex-col items-center justify-center inset-0 ">
        
        <div className="flex w-[70%]">
          <FeatureCard boxShadow={boxShadow} heading="Amazing Analytics you will never ever use." content="Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them." />
          <FeatureCard boxShadow={boxShadow} heading="Charts, graphs and everything at your fingertips" content="Bar graphs, Pie Charts, Line graphs, Area graphs, you name it. We have it. And if we don't, we will add it." />
          <FeatureCard boxShadow={boxShadow} heading="Create teams. Invite your friends and families." content="Creation of teams is a breeze. Invite your friends to Foxtrot Analytics so that they can bang their head against a pie chart." />
          </div>
          <div className="flex  w-[70%]">
          <FeatureCard boxShadow={boxShadow} heading="Self host your analytics. Own your mistakes" content="With Foxtrot Analytics, you can self host incase you don't wish to pay us or see us grow to a billion dollar company." />
          <FeatureCard boxShadow={boxShadow} heading="We don't track you. We don't sell your data." content="Lol. We don't even have a database. We are just a bunch of guys who are trying to make a living. wink wink." />
          <FeatureCard boxShadow={boxShadow} heading="Lastly, we have support for dark mode. Yay!" content="Dark mode is as necessary to a developer as a cup of coffee. We have both. We won't give you coffee though." />
          </div>
        </div>

    </motion.div>
  )
}

export default AuroraBg;

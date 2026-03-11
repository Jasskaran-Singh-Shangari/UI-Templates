import React from 'react'
import FeatureCard from '../ui/temp2/FeatureCard'
import { Goal, Menu, User } from 'lucide-react'

const Features = () => {
  return (
    <div className='min-h-[80vh]'>
        <div className='flex md:flex-row justify-center w-full'>
            <FeatureCard heading="Goal-based" subText="Democratize your roadmap by setting goals with context, instead of creating a wall of tasks." icon={<Goal size={30} className='text-green-500' />} />
            <FeatureCard heading="Collaborative" subText='Simple and effortless collaboration without any limitations. Everyone is invited to the party!' icon={<User size={30} className='text-amber-500' />} />
            <FeatureCard heading="Transparent" subText='Get a birds-eye view of the progress you make as well as personal updates' icon={<Menu size={30} className='text-purple-500' />} />
        </div>
    </div>
  )
}

export default Features

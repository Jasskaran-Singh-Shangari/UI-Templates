import React from 'react'
import BgAnimation2 from '../ui/temp2/BgAnimation2'
import { Clock12, Clock4, Clock9 } from 'lucide-react'

const Why1 = () => {
  return (
    <div
    style={{
        fontFamily: "Montserrat"
    }} 
    className='relative min-h-screen w-full max-w-2xl p-10 font-semibold'>
        <div className='relative z-10 flex flex-col items-center justify-center gap-5'>
            <div className="text-6xl bg-white w-150 h-30 rounded-2xl p-5 flex items-center justify-between gap-2">
                
                <span className="w-[70%] h-5 text-neutral-700 text-lg flex items-center gap-5" >
                    <span> <Clock12 /> </span>
                    <span>Introduce awesone feature</span>
                </span>
                <span className="flex items-center justify-center text-sm text-blue-500 h-5 bg-blue-200 rounded-xl p-5" >
                    <span> Long Term </span>
                </span>
            </div>
            <div className="text-6xl bg-white w-150 h-30 rounded-2xl p-5 flex items-center justify-between gap-2">
                <span className="w-[70%] h-5 text-neutral-700 text-lg flex items-center gap-5" >
                    <span> <Clock4 /> </span>
                    <span>Start new marketing campaign</span>
                </span>
                <span className="flex items-center justify-center text-sm h-5 bg-yellow-200 text-amber-500 rounded-xl p-5" >
                    <span> Short Term </span>
                </span>
            </div>
            <div className="text-6xl bg-white w-150 h-30 rounded-2xl p-5 flex items-center justify-between gap-2">
                <span className="w-[70%] h-5 text-neutral-700 text-lg flex items-center gap-5" >
                    <span> <Clock9 /> </span>
                    <span>Update help documents</span>
                </span>
                <span className=" text-red-500 text-sm flex items-center justify-center h-5 bg-red-200 rounded-xl p-5" >
                    <span> Urgent </span>
                </span>
            </div>
        </div>
      
    </div>
  )
}

export default Why1

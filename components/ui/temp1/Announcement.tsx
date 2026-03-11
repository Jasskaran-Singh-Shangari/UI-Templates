import React from 'react'
import PrimaryButton from './PrimaryButton'

const Announcement = () => {
  return (
    <div className='bg-white/10 w-full text-neutral-800 flex items-center justify-center p-2 gap-5 backdrop-blur-sm border border-white/20 shadow-lg'>
      <span>Use LAUNCH25 for a 25% discount!</span>
      <PrimaryButton text="Buy Now" />
    </div>
  )
}

export default Announcement;

import React from 'react'

export interface UserInfoProps{
    imageSrc?: string;
    by: string;
    designation?: string
}

const UserInfo = ({imageSrc, by, designation}: UserInfoProps) => {
  return (
    <div className='flex items-center justify-center gap-5'>
      <div className='w-10 h-10 rounded-full bg-red-500' />
      <div className='flex flex-col text-left'>
        <span className='text-black text-sm'>{by}</span>
        <span className='text-sm text-neutral-500'>{designation}</span>
      </div>
    </div>
  )
}

export default UserInfo

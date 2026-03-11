import React from 'react'

interface LogoProps{
    className?: string
}

const Logo = ({className}: LogoProps) => {
  return (
        <div className={`hidden md:flex items-center justify-center gap-2 mr-5 ${className}`}>
        <div className="w-10 h-10 bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)] rounded-xl border-2 border-neutral-500" />
        <span style={{
            fontFamily: "Jost"
            }}>
                ProtonX
            </span>
        </div>
  )
}

export default Logo;

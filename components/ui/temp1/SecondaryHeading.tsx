import React from 'react'

interface SecondaryHeadingProps{
    heading: string;
    subHeading?:string;
    className?: string
}

const SecondaryHeading = ({heading, subHeading ,className}: SecondaryHeadingProps) => {
  return (
    <div className={`${className} p-10`}>
      <h1
      style={{
        fontFamily: "Bebas Neue"
      }} className='text-6xl'
      >{heading}</h1>
      <h2
      style={{
        fontFamily: "Jost"
      }} 
      className='text-xl'>
        {subHeading}
      </h2>
    </div>
  )
}

export default SecondaryHeading

import React from 'react'
import TestimonialCard from '../ui/temp1/TestimonialCard'


const TestimonyGrid = () => {
  return (
    <div className='columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5'>
      <TestimonialCard review="This is my application so i'll only say good things about it. It's the piece of crap. Although it took me so much time and energy to build. I'm proud of it." by="Jasskaran Singh" designation="Senior Paji" />
      <TestimonialCard review="What did you get done this week? stop with this application and start fixing the search damnit." by="Elon Must" designation="CEO of X" />
      <TestimonialCard review="Tried to incorporate in project mayhem but it didn't work. I don't know why. I'm not a developer. I'm a salesman. I sell soap. Also this platform is hella expensive." by="Duke Kaboom" designation="Gamer" />
      <TestimonialCard review="Backed by Wayne enterprises, Foxtrot is the best platform any business can ever imagine. Worth every penny." by="Alfred J. Pennyworth" designation='BuTTler' />
      <TestimonialCard review="Harry Potter, the boy who bought Foxtrot Analytics. He is stronger than me now. Highly recommended." by="Dobby" designation="Slave" />
      <TestimonialCard review="I am groot. I am groot, I am groot, I am groot. I AM GROOOOOT!" by="Groot" designation='CEO of Groot Industries' />
    </div>
  )
}

export default TestimonyGrid

import React from 'react'
import heroImg from "../assets/logo.jpg"
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 '>
      <img src={heroImg} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>Abhijith Krishnan </span>
        -  Full Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive websites .
      </p>
      <div className='mt-8 space-x-5'>
        <button
          className='bg-gradient-to-r from-green-600 to-blue-400 text-white hidden md:inline rounded-full px-4 py-2
            transform transition-transform duration-300 hover:scale-105'>Contact with Me</button>
        <button
          className='bg-gradient-to-r from-red-600 to-pink-800 text-white hidden md:inline rounded-full px-4 py-2
            transform transition-transform duration-300 hover:scale-105'>View Resume</button>

      </div>
    </div>
  )
}

export default Hero
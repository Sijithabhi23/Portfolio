import React from 'react'
import aboutimg from "../assets/logo.jpg"
const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='contianer mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img src={aboutimg} alt=""
            className='w-60 h-72 rounded-3xl object-cover mb-8 md:mb-0' />
          <div className="flex-1">
            <p className='text-lg mb-8'>
              I am a passionate full-stack-developer and ambitious person with a focus on building responsive and modern websites and also a perpetual learner with capacity to adopt
              new technologies and searching for openings to start a career
              as a software developer.
            </p>
          
            <div className="space-y-4">
              
              <div className='flex items-center'>
                <label htmlFor="htmlcss" className='w-2/12'>HTML & CSS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-600 to-blue-400 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-110 w-10/12">
                  </div>
                </div>
              </div>

              <div className='flex items-center'>
                <label htmlFor="htmlcss" className='w-2/12'>REACT JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-600 to-blue-400 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-9/12">
                  </div>
                </div>
              </div>

              <div className='flex items-center'>
                <label htmlFor="htmlcss" className='w-2/12'>NODE JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-600 to-blue-400 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-9/12">
                  </div>
                </div>
              </div>

              
              <div className='flex items-center'>
                <label htmlFor="htmlcss" className='w-2/12'>DATABASE</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-600 to-blue-400 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-10/12">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
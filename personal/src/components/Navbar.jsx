import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Portfolio</div>
            <div className='space-x-8'>
                <a href="#home"className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>Home</a>
                <a href="#about" className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>About me</a>
                <a href="#services" className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>Services</a>
                <a href="#project" className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>Project</a>
                <a href="#contact" className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-600 to-blue-400 text-white hidden md:inline rounded-full px-4 py-2
            transform transition-transform duration-300 hover:scale-105 '>Connect Me</button>
        </div>
    </nav>
  )
}

export default Navbar
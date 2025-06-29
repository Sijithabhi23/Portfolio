import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='bg-black text-white py-20' id='contact'>
            <div className='contianer mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">

                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Connect with Me</h3>
                        <p className='mt-4'>I'm Always open work and still trying to get an oppurtuninty for <br />  starting
                            my career as a developer
                        </p>

                        <div className="mb-4 mt-8">
                            <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                            <a href="mailto:emailexample.com" className='hover:underline'>youremailexample.com</a>
                        </div>

                        <div className="mb-4 mt-8">
                            <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                            <span>+9985141536</span>
                        </div>

                        <div className="mb-4 mt-8">
                            <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                            <span>Kottayam , Kerla , India</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="">Your name</label>
                                <input type="text"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter your name ..' />
                            </div>

                            <div>
                                <label htmlFor="" className='block mb-2'>Email</label>
                                <input type="text"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter your Email ..' />
                            </div>

                            <div>
                                <label htmlFor="">Message</label>
                                <input type="text"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter your Message ..' />
                            </div>

                            <button className='bg-gradient-to-r from-green-600 to-blue-400 text-white hidden md:inline rounded-full px-9 py-2
                            transform transition-transform duration-300 hover:scale-105'>Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
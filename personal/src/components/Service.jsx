import React from 'react'

const services = [
    {
        id:1,
        title:"Web design",
        description : "Creating visually appealing web designs .",
    },

    {
        id:2,
        title:"Front End Development",
        description : "Building responsive and interactive user interfaces .",
    },

    {
        id:3,
        title:"Back End Development",
        description : "Creating server side logic and databases .",
    },


]

const Service = () => {
    return (
        <div className='bg-black text-white py-20' id='services'>
            <div className='contianer mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map (service => (
                        <div key={service.id}
                        className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                         <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                            from-green-500 to-blue-400">
                                {service.id}
                        </div>
                        <h3 className='mt-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400'>
                            {service.title}
                        </h3>
                        <p className='mt-2 text-gray-300'>{service.description}</p>
                        </div>
                    ))}
                </div>
                </div>
            </div>
    )
}

export default Service
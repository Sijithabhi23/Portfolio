import React from 'react'
import bookimg from "../assets/book.jpg"
import todoimg from "../assets/todo.jpg"
import cofeeimg from "../assets/coffee.jpg"
const projects = [
    
    {
        id:1,
        name:"Book Store",
        technologies:"React,Node,Mysql",
        image:bookimg,
        github:"https://github.com/Sijithabhi23/BookStore",
    },

    {
        id:2,
        name:"Todo App",
        technologies:"React,Node,Mysql",
        image:todoimg,
        github:"https://github.com/Sijithabhi23/TodoListApp",
    },

    {
        id:3,
        name:"Cofee-Website",
        technologies:"Html,CSS,Bootstrap",
        image:cofeeimg,
        github:"https://github.com/Sijithabhi23/CoffeeWebsite",
    },


]

const Project = () => {
    return (
        <div className='bg-black text-white py-20' id='project'>
            <div className='contianer mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                        tranform transition-transform duration-300 hover:scale-105' >
                            <img src={project.image} className='rounded-lg mb-4 w-full h-48 object-cover' alt="" />
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a href={project.github} className='bg-gradient-to-r from-green-600 to-blue-400 text-white hidden md:inline-block rounded-full px-4 py-2
            transform transition-transform duration-300 hover:scale-105'>Github</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
import React from 'react'
import {FaLinkedinIn, FaGithub } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-wideset text-[#ffffff]'>
                    <b>Let's Build something together!</b>
                </p>
                <h1 className='py-4 text-[#ffffff] '>
                    Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400'>Vamsee</span>
                </h1>
                <h1 className='py-2 text-[#ffffff]'>
                    A <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400'>Full-Stack </span> Web Developer
                </h1>
                <p className='py-6 text-[#ffffff] max-w-[70%] m-auto'>
                    I'm a full-stack web <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-500'>developer </span> specializing in building, and <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200'>designing </span> 
                    exceptional digital experiences primarily focussed in <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200'>Artficial Intelligence</span>.
                    Currently, I'm working on building responsive <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200'>frontend</span> web applications 
                    while learning <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400'>backend </span> 
                    technologies.
                </p>
                <div className='flex items-center justify-between max-w-[260px] m-auto py-6'>
                    <a href="https://www.linkedin.com/in/vamsee-cheruvu-077784217/">
                        <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a href="https://github.com/VamseeC21?tab=repositories">
                    <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <FaGithub />
                    </div>
                    </a>
                    <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <AiOutlineMail />
                    </div>
                    {/* <div className='rounded-full shadow-md shadow-purple-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <BsYoutube />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
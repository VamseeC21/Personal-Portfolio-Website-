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
                <h1 className='py-4 text-[#ffffff]'>
                    Hi, I'm <span className='text-[#4e48f6]'>Vamsee</span>
                </h1>
                <h1 className='py-2 text-[#ffffff]'>
                    A Full-Stack Web Developer
                </h1>
                <p className='py-6 text-[#ffffff] max-w-[70%] m-auto'>
                    I'm a full-stack web developer specializing in building, and designing, 
                    exceptional digital experiences primarily focussed in Artificial Intelligence.
                    Currently, I'm working on building responsive front-end web applications 
                    while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-6'>
                    <a href="https://www.linkedin.com/in/vamsee-cheruvu-077784217/">
                        <div className='rounded-full shadow-md shadow-[#4e48f6] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a href="https://github.com/VamseeC21?tab=repositories">
                    <div className='rounded-full shadow-md shadow-[#4e48f6] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <FaGithub />
                    </div>
                    </a>
                    <div className='rounded-full shadow-md shadow-[#4e48f6] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-md shadow-[#4e48f6] p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <BsYoutube />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
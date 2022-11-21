import React from 'react'
import marvelBotPImg from '../public/LogosForPersonalWebsite/marvelProject.jpeg'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const marvelChatbot = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={marvelBotPImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Marvel Superhero ChatBot</h2>
                <h3>HTML/CSS Flask Web-App / GPT-3 / </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                
                <h2>Overview</h2>
                <p className='py-4'>
                    This legendary product allows you to have conversations with your favorite Marvel Superheros! Enter a chat 
                    and Spider Man will respond back! Combining frontend and backend technologies for the first time, I was able to 
                    learn so much! Powered with GPT-3 and thousands of lines of movie dialogue data, this project 
                    was surely one of my favorites!
                </p>
                <a href="https://www.youtube.com/watch?v=yVvaBroNizw">
                    <button className='px-8 py-2 mt-4 mr-8 shadow-md shadow-gray-600'>Demo</button>
                </a>

                <a href="https://github.com/VamseeC21/AI_Camp_Marvel_ChatBot">
                <button className='px-8 py-2 mt-4 shadow-md shadow-gray-600'>Code</button>
                </a>
                
            </div>
            <div className='col-span-4 md:col-span-1 shadow-md shadow-gray-600 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='test-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> GPT-3
                        </p>
                        <p className='test-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> HTML & CSS
                        </p>
                        <p className='test-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> JavaScript
                        </p>
                        <p className='test-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Flask
                        </p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default marvelChatbot
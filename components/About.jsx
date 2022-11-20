import React from 'react'
import Image from 'next/image'
import codingPic from '../public/LogosForPersonalWebsite/codingPic.webp'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#4e48f6]'><b>About</b></p>
                <h2 className='py-4'>Who am I</h2>
                <p className='py-4 text-[#DDDDDD]'>
                    Programming has only recently flooded my life. I have always liked solving 
                    puzzles and challenges. In 2020, when I started making mini Python projects
                    in school, is when I learned I had a knack for coding. What I thought was a 
                    small python program turned into a love for programming ever since.
                </p>
                <p className='py-2 text-[#DDDDDD]'>
                    Faccinated with how intricate programming can be, I was quickly drawn to 
                    learn more. I recently starting learning Web Development with NextJS and
                    Tailwind CSS. I have also recently sparked an interest in Artificial 
                    Intelligence, creating a few projects involving NLP and Pitch Detection. 
                    I am now spending my time learning more AI and Full Stack Web Development.
                </p>

                <a href='/#projects' className='py-4 text-[#DDDDDD] underline cursor-pointer'>
                    <b>Check out some of my projects here!</b>

                </a>

            </div>
            <div className='w-auto h-auto m-auto shadow-md shadow-[#4e48f6] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={codingPic}
                alt="?" />
            </div>
        </div>
    </div>
  )
}

export default About
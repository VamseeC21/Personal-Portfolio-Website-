import React from 'react'
import Image from 'next/image'
import codingPic from '../public/LogosForPersonalWebsite/codingPic.webp'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-[#150d38]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='font-bold uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400'><b>About</b></p>
                <h2 className='py-4'>Who am I?</h2>
                <p className='py-4 text-[#DDDDDD]'>
                    Programming has only recently flooded my life. I have always liked solving 
                    puzzles and challenges. In 2020, when I started making mini <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500'>Python </span> projects
                    in school, is when I learned I had a knack for coding. What I thought was a 
                    small python program turned into a love for <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-500'>programming </span> 
                    ever since.
                </p>
                <p className='py-2 text-[#DDDDDD]'>
                    Faccinated with how intricate programming can be, I was quickly drawn to 
                    learn more. I recently starting learning Web Development with <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300'>NextJS </span> 
                    and <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300'>TailWind CSS </span>. 
                    I have also recently sparked an interest in Artificial Intelligence, creating a few projects involving <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500'>NLP </span> and Pitch Detection. 
                    I am now spending my time learning more <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-500'>AI </span> and Full Stack Web Development.
                </p>

                <a href='/#projects' className='py-4 text-[#DDDDDD] underline cursor-pointer'>
                    <b><span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400'>Check out some of my projects here! </span></b>

                </a>

            </div>
            <div className='w-auto h-auto m-auto shadow-md shadow-gray-900 rounded-xl flex items-center justify-center p-4'>
                <Image className='rounded-xl' src={codingPic}
                alt="?" />
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import peerImage from '../public/LogosForPersonalWebsite/PEER.png.webp'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const peer = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={peerImage} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>PEER</h2>
                <h3>Discord.py / GPT-3 / </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                
                <h2>Overview</h2>
                <p className='py-4'>
                    Before every succesful product, there is a project spec sheet that contains vital info like the 
                    problem/solution statements, tech stack, milestones, ect. Without a great product spec sheet, the project is doomed 
                    from the start. We introduce PEER, a revolutionary product that analyzes and grades product specs. Simply invite
                    the discord bot to your server, enter in the command followed by the link to your Notion Page containing the 
                    product spec, and BOOM! All Done! Powered through GPT-3 and the Notion API, this Discord.py Bot is sure 
                    to help many users!

                </p>
                <a href="https://www.youtube.com/watch?v=gn_WUHvFJT0">
                    <button className='px-8 py-2 mt-4 mr-8 shadow-md shadow-gray-600'>Demo</button>
                </a>

                <a href="https://github.com/organization-x/peer-help">
                    <button className='px-8 py-2 mt-4 mr-8 shadow-md shadow-gray-600'>Code</button>
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
                            <RiRadioButtonFill className='pr-1' /> Discord.py
                        </p>
                        <p className='test-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Notion API
                        </p>
                        <p className='test-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> OPENAI API
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

export default peer
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#4e48f6]'><b>Skills</b></p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className=''
                            src='/public/LogosForPersonalWebsite/html.png' 
                            alt='/'
                            width='64px'
                            height='64px' 
                            
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className=''
                            src='/public/LogosForPersonalWebsite/css.png'
                            alt='/'
                            width='64px'
                            height='64px' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src='/public/LogosForPersonalWebsite/javascript.png'
                            alt='/'
                            width='64px'
                            height='64px' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='bg-[#081642] rounded-xl'
                            src='/public/LogosForPersonalWebsite/tailwind.png' 
                            alt='/'
                            width='64px'
                            height='64px' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TailwindCSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src='/public/LogosForPersonalWebsite/icons8-next.js-48-2.png' 
                            alt='/'
                            width='64px'
                            height='64px' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='bg-[#1a264c] rounded-xl'
                            src='/public/LogosForPersonalWebsite/pythonLogo.png' 
                            alt='/'
                            width='64px'
                            height='64px' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src='/public/LogosForPersonalWebsite/java.png' 
                            alt='/'
                            width='64px'
                            height='64px' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src='/public/LogosForPersonalWebsite/Swift_logo.png' 
                            alt='/'
                            width='64px'
                            height='64px' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Swift</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-lg shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src='/public/LogosForPersonalWebsite/swiftui-96x96_2x.png' 
                            alt='/'
                            width='64px'
                            height='64px' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>SwiftUI</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Skills
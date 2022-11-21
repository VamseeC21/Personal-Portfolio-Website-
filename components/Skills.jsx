import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import htmlImage from '/public/LogosForPersonalWebsite/html.png'
import cssImage from '/public/LogosForPersonalWebsite/css.png'
import javascriptImage from '/public/LogosForPersonalWebsite/javascript.png'
import tailwindImage from '/public/LogosForPersonalWebsite/tailwind.png' 
import nextjsImage from '/public/LogosForPersonalWebsite/icons8-next.js-48-2.png' 
import pythonImage from '/public/LogosForPersonalWebsite/pythonLogo.png' 
import javaImage from '/public/LogosForPersonalWebsite/java.png' 
import swiftImage from '/public/LogosForPersonalWebsite/Swift_logo.png' 
import swiftuiImage from '/public/LogosForPersonalWebsite/swiftui-96x96_2x.png' 



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='font-bold uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-200'><b>Skills</b></p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            

                <div className='p-6 shadow-md shadow-orange-500 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className=''
                            src={htmlImage}
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

                <div className='p-6 shadow-md shadow-blue-500 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className=''
                            src={cssImage}
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

                <div className='p-6 shadow-md shadow-yellow-300 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src={javascriptImage}
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

                <div className='p-6 shadow-md shadow-blue-500 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='bg-[#081642] rounded-xl'
                            src={tailwindImage}
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

                <div className='p-6 shadow-md shadow-gray-700 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src={nextjsImage}
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

                <div className='p-6 shadow-md shadow-blue-800 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='bg-[#1a264c] rounded-xl'
                            src={pythonImage}
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

                <div className='p-6 shadow-md shadow-orange-500 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src={swiftImage}
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

                <div className='p-6 shadow-md shadow-blue-500 rounded-xl hover:scale-110 ease-in duration-100'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                            className='rounded-xl'
                            src={swiftuiImage}
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
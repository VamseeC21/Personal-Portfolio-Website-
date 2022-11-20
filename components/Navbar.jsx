import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsYoutube, BsPersonFill, BsGearFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {GiGears} from 'react-icons/gi'
import {BiCategory} from 'react-icons/bi'
import logoVMC from '/../public/LogosForPersonalWebsite/V-removebg-preview-2.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false) 
    
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            }
            else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])
  
  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-gray-900': 'fixed w-full h-20 z-[100] bg-gray-900'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/#home'>
                <Image 
                    src={logoVMC}
                    alt="/" 
                    width='125' 
                    height='75'
                />
            </Link>
            
            <div>
                <ul className='hidden md:flex mr-15 text-gray-200'>
                    <Link href='/'>
                    <li className='flex items-end ml-10 text-xl uppercase hover:text-white'>
                        <b className='px-2.5'>Home</b>
                        <AiFillHome color = '#0ea5e9' size={30}/>
                    </li>
                    </Link>

                    <Link href='/#about'>
                    <li className='flex items-end ml-10 text-xl uppercase hover:text-white'>
                        <b className='px-2.5'>About</b>
                        <BsPersonFill color= '#facc15' size={30}/>
                    </li>
                    </Link>

                    <Link href='/#skills'>
                    <li className='flex items-end ml-10 text-xl uppercase hover:text-white'>
                        <b className='px-2.5'>Skills</b>
                        <GiGears color= '#14b8a6' size={30}/>
                    </li>
                    </Link>

                    <Link href='/#projects'>
                    <li className='flex items-end ml-10 text-xl uppercase hover:text-white'>
                        <b className='px-2.5'>Projects</b>
                        <BiCategory color= '#a855f7' size={30}/>
                    </li>
                    </Link>
                </ul>

                <div onClick = {handleNav} className='md:hidden pr-5 rounded-full shadow-md shadow-gray-500 p-5 cursor-pointer'>
                    <AiOutlineMenu size={18} />
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={
                nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-700 p-10 eas-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 eas-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/LogosForPersonalWebsite/V-removebg-preview-2.png' width='125' height ='75' alt = '/' />
                        <div onClick = {handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together!</p>
                    </div>
                </div>
                
                <div className='py-4 flex flex-col'>
                    <ul>
                        <Link href='/#home'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                        </Link>

                        <Link href='/#about'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                        </Link>

                        <Link href='/#skills'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                        </Link>

                        <Link href='/#projects'>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
                        </Link>

                    </ul>

                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5] pb-6'><b>Let's Connect</b></p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-150'>
                                <FaLinkedinIn />
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-150'>
                                <FaGithub /> 
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-150'>
                                <AiOutlineMail /> 
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-150'>
                                <BsYoutube /> 
                            </div>
                            
                        </div>
                    </div>
                    

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar

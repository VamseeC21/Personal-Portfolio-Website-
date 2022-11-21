import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import marvelImage from '../public/LogosForPersonalWebsite/marvelProject.jpeg'
import peerImage from '../public/LogosForPersonalWebsite/PEER.png.webp'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='font-bold uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-100'><b>Projects</b></p>
            <h2 className='py-4'>What I've Built</h2>
            
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem 
                title='PEER (Peer Editing and Efficiency Bot) ' 
                backgroundImg={peerImage}
                projectUrl='/peer'
                tech='Discord.py' 
              />
              <ProjectItem 
                title='Marvel ChatBot' 
                backgroundImg={marvelImage}
                projectUrl='/marvelChatbot' 
                tech='GPT-3'
              />
              
            </div>


        </div>
    </div>
  )
}

export default Projects;
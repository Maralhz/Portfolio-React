import React from 'react'
import ProjectItem from './ProjectItem'
import fiber from '../assets/fiber.png'
import linkprofile from '../assets/linkprofile.png'
import meymed from '../assets/meymed.png'
import network from '../assets/network.png'
import react from '../assets/react.png'
import wordpress from '../assets/wordpress.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#361C13]'>Projects</h1>
      <p className='text-center py-8 capitalize'>These are some examples of the projects i've done over the years. Some of them were coded using Html5, CSS, Bootstrap and some with JS/JQuery or React JS. For more Information You can check my Github.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem  img={fiber} title='Html,CSS,Bootstrap'/>
        <ProjectItem  img={linkprofile} title='React JS' />
        <ProjectItem  img={meymed} title='React JS'/>
        <ProjectItem  img={network} title='Html,CSS'/>
        <ProjectItem  img={react} title='React JS'/>
        <ProjectItem  img={wordpress} title='Wordpress'/>
      </div>
    </div>
  )
}

export default Projects
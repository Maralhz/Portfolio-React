import React from 'react'
import background from '../assets/home.jpg'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedinIn, FaTelegramPlane} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import {EmailShareButton, LinkedinShareButton, TelegramShareButton} from "react-share"

const Home = () => {
  return (
    <div id='Home'>
        <img className='w-full h-screen object-cover object-right' src={background} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-bold text-[#361C13]'>I'm Maral Hejazi</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#361C13]'>I'm a 
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Developer',
                2000, 
                'Coder',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
    />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <EmailShareButton>
                <MdEmail size={20} />
              </EmailShareButton>

              <LinkedinShareButton url='https://www.linkedin.com/in/maral-hejazi-369a91226/'>
              <FaLinkedinIn size={20} />
              </LinkedinShareButton>

              <TelegramShareButton url='t.me/CryCraft'>
                <FaTelegramPlane size={20} />
              </TelegramShareButton>
             
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
import React from 'react'

const ProjectItem = ({img,title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#361C13]'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl font-bold text-white tracking-wider text-center py-4'>
                {title}
            </h3>
            {/* <p className='pb-4 pt-2 text-white text-center'>ReactJs / Html / CSS / JS / WordPress</p> */}
            <a href="https://github.com/Crycraft94">
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg py-2'>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem
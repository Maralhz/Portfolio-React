import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2013,
        title: `Bachelor's Degree in IT Engineering`,
        duration: '4 & 1/2 Years ',
        location: 'Olom Fonon University of Babol'
    },
    {
        year: 2018,
        title: `Master's Degree in E-Commerce`,
        duration: '2 Years ',
        location: 'Olom Fonon University of Babol'
    },
    {
        year: 2022,
        title: `Complete Front-End Course`,
        duration: '5 months',
        location: 'Laitec'
    },  
    {
        year: 2022,
        title: `Front-End Developer Internship`,
        duration: '4 months',
        location: 'Dornica'
    },
    {
        year: 2023,
        title: `WordPress & WooCommerce Training`,
        duration: '4 months ',
        location: 'Mojtama Fanni Tehran'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-8 text-4xl font-bold text-center text-[#361C13]'>Experience</h1>
        {data.map((item ,idx)=> 
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration}
            location={item.location}/>
        )}

    </div>
  )
}

export default Work
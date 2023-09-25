import React from 'react'
import { useState } from 'react';
const ProjectAccordion = ({item}) => {
    
  const [showProjectDetails, setShowProjectDetails] = useState(false)
  return (
    <div className='flex flex-col'>
    <div className='flex justify-between border-b-4'>
    <p className='font-interLight  w-full text-[2rem] lg:text-[6.875rem] md:text-[5em] sm:text-[4rem] '>{item.title}</p>
    <p onClick={()=>setShowProjectDetails((prev)=>!prev)} className='text-[2.25rem] cursor-pointer lg:text-[6.875rem] md:text-[5em] sm:text-[5rem]'>&#43;</p>
    </div>
    <div className={`flex sm:flex-row flex-col ${showProjectDetails? 'flex': 'hidden'} justify-between gap-6 sm:gap-4 mt-2 sm:mt-6  `}>
      <p className='text-[13px] sm:text-[1.5em] text-justify '>{item.about}</p>
    </div>
    </div>
  )
}

export default ProjectAccordion
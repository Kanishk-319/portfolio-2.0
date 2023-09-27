'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
const ProjectAccordion = ({item}) => {
    
  const [showProjectDetails, setShowProjectDetails] = useState(false)
  return (
    <div className='flex flex-col border-b-4'>
    <div className='flex justify-between  '>
    <motion.p initial={{scale:1,x:0,y:0}} animate={{scale: showProjectDetails ? [1,0.5] : 1, x: showProjectDetails? [0,-80]: 0, y: showProjectDetails? [0,-50]: 0}} className='font-interLight self-start h-max w-max text-[2rem] lg:text-[6rem] md:text-[5em] sm:text-[4rem] '>{item.title}</motion.p>
    <motion.p initial={{scale:1,x:0,y:0}} animate={{scale: showProjectDetails ? [1,0.5] : 1, x: showProjectDetails? [0,-80]: 0, y: showProjectDetails? [0,-50]: 0}}   onClick={()=>setShowProjectDetails((prev)=>!prev)} className='text-[2.25rem] cursor-pointer lg:text-[6.875rem] md:text-[5em] sm:text-[5rem]'>&#43;</motion.p>
    </div>
    <div className={`flex sm:flex-row flex-col ${showProjectDetails? 'flex': 'hidden'} justify-between gap-6 sm:gap-4 mt-2 mb-4 sm:mt-6  `}>
      <p className='text-[13px] sm:text-[1.5em] text-justify '>{item.about}</p>
    </div>
    </div>
  )
}

export default ProjectAccordion
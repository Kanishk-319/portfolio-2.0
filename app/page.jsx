'use client'
import React from 'react'
import Link from 'next/link'
import Project from '@components/Project'
import { useEffect } from 'react'
import { motion, stagger } from 'framer-motion'
import { duration } from '@mui/material'

const Home = () => {
  const heading = 'Designing With Purpose, Embracing Simplicity'

  
  return (
    <>
    <div className='mt-[10vh] sm:my-[24vh] px-2 w-full '>
      <motion.p   className='flex flex-wrap font-interLight text-[60px] lg:text-[11.825em] sm:text-[8em] leading-none'>
        {heading.split(' ').map((word,i)=>{
          return(
            <motion.span
            key={i}
            className='mr-[2vw]  relative'             >
{word}
            </motion.span>
          )
        })}
      </motion.p>
    </div>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2, ease:'easeIn'}} className=' flex flex-col justify-center items-center sm:my-[21vh]  w-full   h-[50vh] sm:h-[120vh] '>
          <p  className='font-interLight  w-full text-[2.25rem] lg:text-[6.875rem] md:text-[5em]
          sm:text-[5rem]  text-center
          '>Howdy! I’m Kanishk</p>
          <Link
          className='text-[12px] sm:text-[18px] underline'
          href='/'
          >
            more
          </Link>
    </motion.div>
    <Project/>
    </>
    
  )
}

export default Home
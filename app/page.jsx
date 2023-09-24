import React from 'react'
import Link from 'next/link'
import Project from '@components/Project'

const Home = () => {
  return (
    <>
    <div className='mt-[10vh] sm:my-[24vh] px-2 w-full '>
      <p className='flex flex-wrap font-interLight text-[60px] lg:text-[11.825em] sm:text-[8em] leading-none'>Designing With Purpose, Embracing Simplicity</p>
    </div>
    <div className=' flex flex-col justify-center items-center my-[21vh]  w-full   h-[50vh] sm:h-[120vh] '>
          <p className='font-interLight  w-full text-[2.25rem] lg:text-[6.875rem] md:text-[5em]
          sm:text-[5rem]  text-center
          '>Howdy! I’m Kanishk</p>
          <Link
          className='text-[12px] sm:text-[18px] underline'
          href='/'
          >
            more
          </Link>
    </div>
    <Project/>
    </>
    
  )
}

export default Home
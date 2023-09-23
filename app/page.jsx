import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <>
    <div className='my-[10vh] sm:my-[45vh] w-full mx-2 sm:mx-5 '>
      <h1 className='text-[60px] sm:text-[150px]'>DESIGNING WITH PURPOSE, EMBRACING SIMPLICITY</h1>
    </div>
    <div className=' flex flex-col justify-center items-center my-[10vh] bg-black w-[110vw] sm:w-full  h-[90vh] sm:h-[120vh] text-white'>
          <p className='font-interLight  text-[35px] md:text-[110px]
          sm:text-[80px]
          '>Howdy! I’m Kanishk</p>
          <Link
          className='text-[12px] sm:text-[18px] underline'
          href='/'
          >
            more
          </Link>
    </div>
    </>
    
  )
}

export default Home
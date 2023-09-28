'use client'
import { motion } from "framer-motion"
import Link from "next/link"

const Footer = () => {
    return (
        <div className='flex flex-col  gap-6'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: 'easeIn' }} className='flex justify-center  h-[50vh] sm:h-[120vh] flex-col w-full gap-4 p-4 sm:px-5   '>
                <p className='font-interLight w-full text-[2rem] lg:text-[6.875rem] md:text-[5em]
          sm:text-[5rem] text-left'>GOT QUESTIONS OR IDEAS BREWING?</p>
              <Link className="self-end" href='/contact'>
              <motion.button initial={{ backgroundColor: 'black', color: 'white' }} whileHover={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }} className=' sm:mr-[10vw]  text-[13px] sm:text-lg  py-2 px-4 sm:px-6 rounded-3xl bg-black text-white'>Drop me a line</motion.button></Link> 
            </motion.div>
            <div className='flex flex-row  items-start   text-[7px] sm:text-[15px] p-5'>
                <p className='basis-1/3  ' >@ 2023 All Rights Reserved</p>
                <div className='flex sm:gap-4 gap-2 basis-1/3 justify-center'>
                    <Link
                        href='https://github.com/Kanishk-319'
                        target='_blank'>
                        <p>github</p>
                    </Link>
                    <Link
                        href='https://twitter.com/kanishk98483'
                        target='_blank'
                        >
                        <p>twitter</p>
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/kanishk319/'
                        target='_blank'
                        >
                        <p>linkedIn</p>
                    </Link>
                    <Link
                        href='https://www.instagram.com/kanishk_315/'
                        target='_blank'
                        >
                        <p>instagram</p>
                    </Link>
                </div>
                <p className='basis-1/4 text-end '>Portfolio</p>
            </div>
        </div>

    )
}

export default Footer
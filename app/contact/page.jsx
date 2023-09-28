'use client'
import { motion } from "framer-motion"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Success from "@components/Success"
const page = () => {
  return (
    <div className='flex flex-wrap flex-col mt-[10vh] sm:my-[24vh] px-2 w-full '>
        <strong   className='flex flex-wrap font-interLight text-[60px] lg:text-[11.825em] sm:text-[8em] leading-none'>
        Connecting for Creative Possibilities
      </strong>
      <div className='flex sm:flex-row flex-col justify-between sm:w-3/4 sm:self-end self-center mt-[10vh] sm:my-[24vh] sm:gap-6  p-4' >
        
      <form action="https://formsubmit.co/2e868a717b9ffc215a1561026375ce69" method="POST" className='mt-8 flex flex-col sm:w-1/2'
       >
        {/* Honeypot */}
        <input type="text" name="_honey" className="hidden" />

        {/* Remove Captcha */}
        <input type="hidden" name="_captcha" value='false' />
        {/* <input type="hidden" name="_next" value={<Success/>} /> */}
        <input name='Name' className='p-6 border-b-4 border-solid border-black sm:text-[1.5em] outline-none placeholder-black' type="text" id="fname"  placeholder='Full Name'/>
        <input name='Email' className='p-6 border-b-4 border-solid border-black sm:text-[1.5em] outline-none placeholder-black' type="email" id="fname"  placeholder='Email'/>
        <input name='Message' className='p-6 border-b-4 border-solid border-black sm:text-[1.5em] outline-none placeholder-black' type="text" id="fname"  placeholder='Message'/>
        <motion.button type='submit' initial={{ backgroundColor: 'black', color: 'white' }} whileHover={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }} className='self-center sm:mr-[10vw] my-8  text-[13px] sm:text-lg  py-2 px-4 sm:px-6 rounded-3xl bg-black text-white'>Contact Me</motion.button>
      </form>
      <div className="mt-8 flex flex-col sm:w-1/2 items-center gap-6">
            <div className="flex flex-col gap-2">
                <strong className=" sm:text-[1.5em] text-[1.3em] text-left">Contact</strong>
                <Link
                className="font-interLight"
                href='/'>
                    kanishk.malik.dev@gmail.com
                </Link>
            </div>
            <div className="flex justify-around  gap-4 p-2">
            <motion.a href="https://github.com/Kanishk-319" initial={{scale:1}} whileHover={{scale:1.2}} target="_blank">
                <Image
                className="cursor-pointer"
                src='/assets/icons/github.png'
                width={40}
                height={40}
                />
            </motion.a>
            <motion.a href="https://twitter.com/kanishk98483 " initial={{scale:1}} whileHover={{scale:1.2}} target="_blank">
                <Image
                className="cursor-pointer"
                src='/assets/icons/twitter.png'
                width={40}
                height={40}
                />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/kanishk319/" initial={{scale:1}} whileHover={{scale:1.2}} target="_blank">
                <Image
                className="cursor-pointer"
                src='/assets/icons/linkedIn.png'
                width={40}
                height={40}
                />
            </motion.a>
            <motion.a href="https://www.instagram.com/kanishk_315/" initial={{scale:1}} whileHover={{scale:1.2}} target="_blank">
                <Image
                className="cursor-pointer"
                src='/assets/icons/instagram.png'
                width={40}
                height={40}
                />
            </motion.a>

            </div>
      </div>
      </div>
     
    </div>
  )
}

export default page
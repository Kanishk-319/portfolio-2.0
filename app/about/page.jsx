'use client'
import { motion } from "framer-motion"
import { PRitems } from "@Helpers/PRitems"
import { useEffect } from "react"

const page = () => {
    return (
        <>
        <div className='mt-[10vh] sm:my-[24vh] px-2 w-full '>
      <strong   className='flex flex-wrap font-interLight text-[60px] lg:text-[11.825em] sm:text-[8em] leading-none'>
      Designing Tomorrow, Today: Meet Kanishk
      </strong>
    </div>
            <div className='mt-[10vh] sm:my-[22vh] px-2 w-full flex flex-col sm:justify-normal justif0y-between sm:gap-0 gap-4'>
                <motion.div initial={{x: -100,opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.4}}  className='sm:flex text-justify   font-interLight lg:w-1/2 sm:w-1/2 lg:text-[1.2em] md:text-[1em]'>I'm a freelance full-stack web developer with a passion for minimalist design and a knack for creating intuitive UI/UX experiences. My work is a fusion of functionality and aesthetics, bringing digital ideas to life with a clean and user-friendly touch.
                </motion.div>
                <motion.strong initial={{opacity:0}} whileInView={{opacity:1}} transition={{ duration: 1.2, ease: 'easeIn' }} className='self-center flex font-interLight text-[35px] lg:text-[8em] md:text-[6em] sm:text-[4.5em] '>
                    MERN DEVELOPER
                </motion.strong>
                <motion.div initial={{x: 100,opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.4}} className='self-end text-justify  flex  font-interLight lg:w-1/2 sm:w-1/2 lg:text-[1.2em] md:text-[1em]'>
                    firmly believe that simplicity isn't just a design choice; it's a pathway to enhancing aesthetics, user engagement, and overall accessibility. I prioritize clean and efficient design, focusing on essential elements that enhance user experience.
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: 'easeIn' }} className=' flex flex-col justify-center items-center sm:my-[21vh]  w-full   h-[30vh] sm:h-[120vh] '>
                <p className='font-interLight  w-full text-[1.5rem] lg:text-[6.875rem] md:text-[5em]
          sm:text-[5rem]  text-center
          '>Less Code, More Impact</p>
            </motion.div>
            <div className="flex flex-col  sm:gap-[5vh] px-5">
                <p className="flex flex-wrap font-interLight text-[20px] lg:text-[3em] sm:text-[2em] ">
                    Services I Provide
                </p>
                <div className="flex flex-col w-full gap-4]">
                    {PRitems.map((item, index) => {
                        return (
                            <div className="flex justify-between  my-4 sm:my-[5vh] font-interLight w-full border-b-4   text-[1.5rem] lg:text-[6rem] md:text-[4em]
          sm:text-[5rem]  ">
                                <motion.strong initial={{x: index%2==0? -100: 150,opacity:0}} whileInView={{x:0 , opacity:1}}>{item.title}</motion.strong>
                                <p>&#43;</p>
                            </div>
                        )
                    })}


                </div>
            </div>

        </>
    )
}

export default page
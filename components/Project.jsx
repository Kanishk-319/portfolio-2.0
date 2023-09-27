'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
const Project = () => {
  return (
    <div className='flex flex-col w-full px-2 sm:px-5 font-interLight '>
      <h3 className='flex flex-wrap font-interLight text-[55px] lg:text-[11.825em] sm:text-[8em] leading-none'>Featured Projects</h3>
      <div className='flex  gap-[5vh] w-full flex-col  sm:my-[20vh]  my-[5vh]'>
        <div className='flex justify-around  sm:flex-row flex-col  sm:w-full h-max sm:h-max sm:p-4 sm:gap-[5vh] gap-[5vh] '>

          <motion.a
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.2, ease: 'easeIn' }} whileHover={{
              filter: 'brightness(75%)'
            }}
            className='basis-1/2 '
            href='https://kanishk-319.github.io/MyPortfolio/'
            target='_blank'
          >
            <Image
              className='cursor-pointer project_images'
              src='/assets/Bg/portfolio.jpg'
              alt='portfolio_img'
              width={700}
              height={500}
            />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.2, ease: 'easeIn' }} whileHover={{
              filter: 'brightness(75%)'
            }}
            className='basis-1/2 '
            href='https://github.com/Kanishk-319/NewsRealm'
            target='_blank'
          >
            <Image
              className=' cursor-pointer project_images'
              src='/assets/Bg/news.jpg'
              alt='news_img'
              width={700}
              height={500}
            />
          </motion.a>
        </div>
        <div className='flex justify-around  sm:flex-row flex-col  sm:w-full h-max sm:h-max sm:p-4 sm:gap-[5vh] gap-[5vh] '>
          <motion.a
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.2, ease: 'easeIn' }} whileHover={{
              filter: 'brightness(75%)'
            }}
            className='basis-1/2 '
            href='https://github.com/Kanishk-319/Chat-Application'
            target='_blank'
          >
            <Image
              className=' cursor-pointer project_images'
              src='/assets/Bg/chat.jpg'
              alt='chat_img'
              width={700}
              height={500}
            />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.2, ease: 'easeIn' }} whileHover={{
              filter: 'brightness(75%)'
            }}
            className='basis-1/2 '
            href='https://github.com/Kanishk-319/movieDatabase'
            target='_blank'
          >
            <Image
              className='cursor-pointer project_images'
              src='/assets/Bg/movie1.jpg'
              alt='database_img'
              width={700}
              height={500}
            />
          </motion.a>
        </div>
        <div className='flex justify-around  sm:flex-row flex-col  sm:w-full h-max sm:h-max sm:p-4 sm:gap-[5vh] gap-[5vh] '>
          <motion.a
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.2, ease: 'easeIn' }} whileHover={{
              filter: 'brightness(75%)'
            }}
            className='basis-1/2 '
            href='https://prompt-harmonics.vercel.app/'
            target='_blank'
          >
            <Image
              className=' cursor-pointer project_images'
              priority
              src='/assets/Bg/prompt.png'
              alt='prompt_img'
              width={700}
              height={500}
            />
          </motion.a>
        </div>

      </div>


    </div>
  )
}

export default Project
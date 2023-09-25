'use client'
import Image from 'next/image';
import { Proitems } from '@Helpers/PRItems';
import ProjectAccordion from './ProjectAccordion';
const Project = () => {
  return (
    <div className='flex flex-col w-full px-2 sm:px-5 font-interLight '>
        <h3 className='flex flex-wrap font-interLight text-[60px] lg:text-[11.825em] sm:text-[8em] leading-none'>Featured Projects</h3>
        <div className='flex flex-col sm:gap-[10vh] gap-[5vh] sm:my-[20vh] my-[10vh] p-2'>
          {Proitems.map((item,index)=>{
            return(
              <ProjectAccordion item={item} key={index}/>
            )
          })}
              
        </div>
        
    </div>
//     <div className=' my-5 flex flex-row flex-wrap mt-[10vh] gap-2'>
//     <div className=' flex flex-col  sm:basis-2/5 gap-4 basis-full border-4 border-black border-solid '>
//          <Image
//         className='h-[50vh] w-full object-fill self-center'
//         src='/assets/Bg/portfolio.png'
//         width={500}
//         height={500}
//         />
//     </div>
//     <div className=' flex  flex-col sm:basis-[58%] gap-4 basis-full '>
//        <p className='font-interLight  w-full text-[2.25rem] lg:text-[6.875rem] md:text-[5em]
//   sm:text-[5rem]  text-center
//   '>PORTFOLIO 1.0</p>
//     </div>
// </div>
  )
}

export default Project
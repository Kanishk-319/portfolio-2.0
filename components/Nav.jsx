'use client'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import {usePathname} from 'next/navigation';
import { ThemeContext } from '@app/layout'
const Nav = () => {
  const pathname = usePathname()
  const [showdisabled, setShowDisabled] = useState(false)
  const {ref} = useContext(ThemeContext)
  const handleClick=()=>{
     ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
useEffect(()=>{
    if(pathname!='/'){
      setShowDisabled(true)
    }else{
      setShowDisabled(false)
    }
},[pathname])
  return (
    <nav className='flex justify-between w-full align-center sm:mx-5 '>
        <Link href='/' className='text-[20px] pl-2 sm:text-3xl'>KANISHK</Link>
        <div className='flex justify-around sm:justify-start   align-center sm:w-1/2  w-max sm:gap-8 gap-4 font-interLight text-[13px] sm:text-lg pr-4 '>
            <Link
            className='nav_items'
            href='/'
            >
            home
            </Link>
            <Link
            className='nav_items'
            href='/about'
            >
            about
            </Link>
            <button
            disabled={showdisabled}
            className={`nav_items ${showdisabled && 'text-gray-300'}`}
            href='/'
            onClick={handleClick}
            >
            projects
            </button>
            <Link
            className='nav_items'
            href='/contact'
            >
            contact
            </Link>
        </div>
    </nav>
  )
}
export default Nav;
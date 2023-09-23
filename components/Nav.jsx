'use client'
import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='flex justify-between w-full align-center mx-2 sm:mx-5 '>
        <h3 className='text-[20px] sm:text-3xl'>KANISHK</h3>
        <div className='flex justify-around sm:justify-start   align-center sm:w-1/2  w-max sm:gap-8 gap-4 font-interLight text-[13px] sm:text-lg pr-4 weight-light'>
            <Link
            className='nav_items'
            href='/'
            >
            home
            </Link>
            <Link
            className='nav_items'
            href='/'
            >
            about
            </Link>
            <Link
            className='nav_items'
            href='/'
            >
            projects
            </Link>
            <Link
            className='nav_items'
            href='/'
            >
            contact
            </Link>
        </div>
    </nav>
  )
}
export default Nav;
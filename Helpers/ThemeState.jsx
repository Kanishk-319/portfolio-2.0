'use client'
import React from 'react'
import { ThemeContext } from '@emotion/react'
import { useRef } from 'react'
const ThemeState = (props) => {
    const ref = useRef(null)
  return (
    <ThemeContext.Provider value={{ref}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState
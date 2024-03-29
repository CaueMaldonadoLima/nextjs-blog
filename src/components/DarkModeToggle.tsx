'use client'
import { useEffect, useState } from 'react'
import { moonIcon, sunIcon } from "./icons"


export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <>
            <button 
                className='rounded-full hover:text-primaryPurple dark:hover:text-secondaryPurple text-lightText dark:text-darkText' 
                onClick={() => {setDarkMode(!darkMode)}}
            >
                {darkMode? moonIcon(): sunIcon()} 
            </button>
        </>
    )
}

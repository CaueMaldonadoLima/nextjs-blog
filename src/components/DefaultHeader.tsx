'use client'

import Link from "next/link"
import { moonIcon, sunIcon } from "./icons"
import { useState } from "react"

export default function DefaultHeader() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <>
            <header className="w-full">
                <div className="w-full py-6 px-16 space-x-4 bg-white text-primaryGray font-medium flex">
                    <div className="w-1/2">
                        <span className="mr-6 text-lg">Cauê Maldonado</span>
                        <Link href={`#`}
                            className="hover:text-primaryPurple hover:font-semibold px-2"
                            >About me</Link>
                        <Link href={`#`}
                            className="hover:text-primaryPurple hover:font-semibold px-2"
                            >My Projects</Link>
                        <Link href={`#`}
                            className="hover:text-primaryPurple hover:font-semibold px-2"
                            >Articles</Link>
                        <Link href={`#`}
                            className="hover:text-primaryPurple hover:font-semibold px-2"
                            >Socials</Link>    
                    </div>
                    <div className="w-1/2 justify-end flex hover:text-primaryPurple ">
                        <button className='rounded-full hover:border-primaryPurple' onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode? sunIcon(): moonIcon()}</button>
                    </div>
                </div>
            </header>
        </>    
    )
}

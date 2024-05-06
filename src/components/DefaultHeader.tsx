'use client'

import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle"
import Link from "next/link";

export default function DefaultHeader() {
    const path = usePathname()

    return (
            <div className="w-full bg-lightBg dark:bg-darkBg shadow-lg">
                <div className="w-full py-6 px-16 space-x-4 bg-white text-lightText dark:text-darkText font-medium flex">
                    <div className="w-[80%] flex items-center">
                        <span className="mr-6 text-lg font-bold text-lightText dark:text-darkText">Cauê Maldonado</span>
                        <Link href={'/'} 
                            className={`cursor-pointer hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold px-2 ${path == '/' || path.includes('/posts')?'text-primaryPurple dark:text-secondaryPurple font-semibold' : ''}`}
                            >Home</Link>
                        <Link href={'/about-me'} 
                            className={`cursor-pointer hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold px-2 ${path.includes('/about-me')?'text-primaryPurple dark:text-secondaryPurple font-semibold' : ''}`}
                            >About me</Link>
                        <Link href={'/projects'} 
                            className={`cursor-pointer hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold px-2 ${path.includes('/projects')?'text-primaryPurple dark:text-secondaryPurple font-semibold' : ''}`}
                            >Projects</Link>
                        <Link href={'/socials'} 
                            className={`cursor-pointer hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold px-2 ${path.includes('/socials')?'text-primaryPurple dark:text-secondaryPurple font-semibold' : ''}`}
                            >Socials</Link>    
                    </div>
                    <div className="w-[20%] justify-end flex hover:text-primaryPurple ">
                        <DarkModeToggle/>
                    </div>
                </div>
            </div>  
    )
}

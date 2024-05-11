'use client'

import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle"
import Link from "next/link";
import { useEffect, useState } from "react";
import { threeBarsIcon } from "./icons";

export default function DefaultHeader() {
    const path = usePathname()

    const [windowWidth, setWindowWidth] = useState<number>(0)
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const handleMoreOptionsClick = () => {
        if (!showHeaderItems)
            setDropDownOpen(!dropDownOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.matchMedia("(min-width: 769px)").matches) {
                setDropDownOpen(false)
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showHeaderItems = windowWidth > 768;
    const showHeaderText = windowWidth > 390;

    return (
            <div className="w-full bg-lightBg dark:bg-darkBg shadow-lg">
                <div className="w-full py-6 px-4 sm:px-16 space-x-4 bg-white text-lightText dark:text-darkText font-medium flex">
                    <div className={`${showHeaderItems? 'w-[80%]' : 'w-full'} flex items-center justify-beetween md:justify-normal`}>
                        <span className={`${showHeaderItems? '' : 'w-full'} mr-6 text-lg font-bold text-lightText dark:text-darkText`}>{showHeaderText? 'Cauê Maldonado' : 'Cauê M.'}</span>
                    {showHeaderItems? <>
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
                    </> : 
                        <div className="flex-col justify-center flex items-end">
                            <button onClick={handleMoreOptionsClick} className={`mt-2 hover:text-primaryPurple dark:hover:text-secondaryPurple`}>{threeBarsIcon()}</button>    
                        {(!showHeaderItems && dropDownOpen) && 
                            <div className="absolute top-[88px] rounded shadow-md flex flex-col bg-lightBg dark:bg-darkBg">
                                <Link href={'/'} className={`py-1 px-4 cursor-pointer hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold ${path == '/' || path.includes('/posts')?'text-primaryPurple dark:text-secondaryPurple font-semibold' : ''}`}>Home </Link>
                                <Link href={'/about-me'} className={`py-1 px-4 cursor-pointer hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold ${path.includes('/about-me')?'text-primaryPurple dark:text-secondaryPurple font-semibold' : ''}`}>About me </Link>
                                <Link href={'/projects'} className={`py-1 px-4 cursor-pointer hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold ${path.includes('/projects')?'text-primaryPurple dark:text-secondaryPurple font-semibold' : ''}`}>Projects </Link>
                                <Link href={'/socials'} className={`py-1 px-4 cursor-pointer hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold ${path.includes('/socials')?'text-primaryPurple dark:text-secondaryPurple font-semibold' : ''}`}>Socials </Link>
                            </div>}
                        </div>}
                    </div>
                    <div className={`${showHeaderItems && 'w-[20%]'} justify-end flex hover:text-primaryPurple`}>
                        <DarkModeToggle/>
                    </div>
                </div>
            </div>  
    )
}

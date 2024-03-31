'use client'

import Link from "next/link"
import DarkModeToggle from "./DarkModeToggle"

export default function DefaultHeader() {

    return (
            <div className="w-full bg-lightBg dark:bg-darkBg">
                <div className="w-full py-6 px-16 space-x-4 bg-white text-lightText dark:text-darkText font-medium flex">
                    <div className="w-[80%]">
                        <span className="mr-6 text-lg font-bold text-lightText dark:text-darkText">Cauê Maldonado</span>
                        <Link href={`#`}
                            className="hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold px-2"
                            >About me</Link>
                        <Link href={`#`}
                            className="hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold px-2"
                            >My Projects</Link>
                        <Link href={`#`}
                            className="hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold px-2"
                            >Articles</Link>
                        <Link href={`#`}
                            className="hover:text-primaryPurple dark:hover:text-secondaryPurple hover:font-semibold px-2"
                            >Socials</Link>    
                    </div>
                    <div className="w-[20%] justify-end flex hover:text-primaryPurple ">
                        <DarkModeToggle/>
                    </div>
                </div>
            </div>  
    )
}

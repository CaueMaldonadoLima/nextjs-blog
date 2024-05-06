import { chevronDownIcon } from '@/components/icons'
import MoreInfoComponent from '@/components/projects/MoreInfoComponent'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
			<div className="flex-col w-full h-auto justify-center px-32 lg:px-56 py-8 text-lightText dark:text-darkText">
                <span className="w-full justify-center flex font-semibold text-lg text-lightText dark:text-darkText mb-4">Projects</span>
                    <h1 className="w-full mb-2 flex text-primaryPurple dark:text-secondaryPurple text-2xl font-bold text-start">My projects</h1>
                    <span>Here's where you can find all my projects</span>
                <div className='w-full border-t border-primaryPurple dark:border-lightText border-opacity-30 py-6 mt-8'>
                    <h2 className='w-full mb-2 flex text-primaryPurple dark:text-secondaryPurple text-2xl font-bold text-start'>Blog App<span className='text-sm text-lightText dark:text-darkText  dark:text-opacity-50 text-opacity-50 pl-2 pt-2'>(This is the project you're currently viewing.)</span></h2>
                    <p>It's a blog-like web application where you can find some information about me.   </p>
                    <MoreInfoComponent>
                        <div className='w-full flex-col justify-start items-start text-start'>
                            <ul className='rounded-md shadow-xl p-2 border border-primaryPurple dark:border-secondaryPurple'>
                                <span className='font-semibold text-primaryPurple dark:text-secondaryPurple'>Tools</span>
                                <li className='pl-4'><span className='text-primaryPurple dark:text-secondaryPurple pr-2'>•</span>Next.js 14</li>
                                <li className='pl-4'><span className='text-primaryPurple dark:text-secondaryPurple pr-2'>•</span>Tailwind CSS</li>
                                <li className='pl-4 pb-4'><span className='text-primaryPurple dark:text-secondaryPurple pr-2'>•</span><Link href='https://github.com/CaueMaldonadoLima/nextjs-blog' className='underline decoration-[1.5px]'>Check out more information on my GitHub.</Link></li>
                                <span className='text-sm font-normal pl-4'>If you liked this project or it helped you in some way, consider leaving a star!</span>
                            </ul>
                        </div>                       

                    </MoreInfoComponent>
                </div>
                <span className="w-full justify-center flex font-semibold text-lg text-lightText dark:text-darkText mb-4">Projects</span>
            </div>
        </>
    )
}

'use client'
import React, { useState } from 'react'
import { chevronDownIcon, chevronUpIcon } from '../icons'

export default function MoreInfoComponent({
    children
}: {children: React.ReactNode}) {

    const [isOpen, setIsOpen] = useState(false);

    return (  
        <button onClick={() => setIsOpen(!isOpen)} className='w-full'>
            <div className='flex w-full justify-center items-center'>
                <hr className='w-full border border-primaryPurple dark:border-secondaryPurple opacity-30'/>  
                <span className='min-w-[120px] justify-center items-center text-primaryPurple dark:text-secondaryPurple flex font-medium'>More Info <span className='pl-1'>{isOpen? chevronUpIcon() : chevronDownIcon()}</span></span>
                <hr className='w-full border border-primaryPurple dark:border-secondaryPurple opacity-30 '/> 
            </div>
            <div className='w-full py-4'>
                {isOpen && children}
            </div> 
        </button>
    )
}

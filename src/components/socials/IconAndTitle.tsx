'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    imageSrc: string;
    imageWidth?: any;
    imageHeight?: any;
    imageAlt: string;
    link: string;
    title: string;
    description: string;
}

export default function IconAndTitle({
    imageSrc,
    imageWidth,
    imageHeight,
    imageAlt,
    link,
    title,
    description,
}: Props) {
    return (
        <Link
            className='flex bg-white w-full space-x-4 items-center py-8 border-t border-primaryPurple dark:border-lightText border-opacity-30'
            href={link? link :'#'}
        >
           <Image 
                className=''
                src={imageSrc? imageSrc: ''}
                alt={imageAlt? imageAlt: ''}
                width={imageWidth? imageWidth: 75}
                height={imageHeight? imageHeight: 75} 
            />
            <div className='flex-col'>
                <h2 className='text-xl font-bold text-primaryPurple dark:text-secondaryPurple'>{title}</h2>
                <h3 className='text-md text-lightText dark:text-darkText'>{description}</h3>
            </div>
        </Link>
    )
}

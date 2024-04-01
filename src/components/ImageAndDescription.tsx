import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Props {
    imageSource: string;
    index: number;
    date: string;
}

export default function ImageAndDescription({
    imageSource,
    index,
    date,
} : Props) {

    return (
        <div className={`w-full flex space-x-4 border-t ${index == 0 && 'border-b'} border-primaryPurple dark:border-lightText border-opacity-30 py-8`}>
            <Link href={`#`} className='w-full rounded-lg items-center justify-center flex px-1 py-3 border-2 border-lightBg dark:border-darkBg hover:border-primaryPurple dark:hover:border-secondaryPurple cursor-pointer'>
                <Image 
                    className='rounded-lg shadow-lg'
                    src={imageSource} 
                    alt={''}
                    width={500}
                    height={500}
                />
            </Link>
            <div className='w-full flex-col space-y-1'>
                <span className='w-full font-light text-lightText dark:text-darkText'>{date}</span>
                <p className='w-full text-lg font-semibold text-primaryPurple dark:text-secondaryPurple'>Post {index + 1}</p>
                <p className='w-full font-medium text-lightText dark:text-darkText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra.s</p>
            </div>
        </div>
    )
}

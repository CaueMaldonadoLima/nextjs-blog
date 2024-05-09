'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    imageSource: string;
    title: string;
    index: number;
    date: string;
}

export default function ImageAndDescription({
    imageSource,
    title,
    index,
    date,
} : Props) {

    const router = useRouter()

    const onHandleClick = () => {
        router.push(`/posts/post-${index+1}`)
    }

    return (
        <div className={`w-full md:flex space-x-4 border-t ${index == 0 && 'border-b'} border-primaryPurple dark:border-lightText border-opacity-30 py-8`}>
            <div>
                <button onClick={onHandleClick} className='w-full rounded-lg items-center justify-center flex px-1 py-2 border-2 border-lightBg dark:border-darkBg hover:border-primaryPurple dark:hover:border-secondaryPurple cursor-pointer'>
                    <Image 
                        className='rounded-lg shadow-lg'
                        src={imageSource} 
                        alt={''}
                        width={500}
                        height={500}
                    />
                </button>
            </div>
            <div onClick={onHandleClick} className='w-full flex-col space-y-1'>
                <span className='w-full font-light text-lightText dark:text-darkText'>{date}</span>
                <p className='w-full text-lg font-semibold text-primaryPurple dark:text-secondaryPurple'>{title}</p>
                <p className={`w-full pr-2 sm:pr-0 font-medium text-lightText dark:text-darkText break-words`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra.s</p>
            </div>
        </div>
    )
}

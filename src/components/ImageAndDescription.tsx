import Image from 'next/image'
import React from 'react'

interface Props {
    imageSource: string;
}

export default function ImageAndDescription({
    imageSource,
} : Props) {

    return (
        <div className='w-full'>
            <Image 
                className='rounded-lg'
                src={imageSource} 
                alt={''}
                width={500}
                height={500}
            />
        </div>
    )
}

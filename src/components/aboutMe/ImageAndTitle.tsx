'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function ImageAndTitle() {
	const [windowWidth, setWindowWidth] = useState<number>(0)

	useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

	const showFullImage = windowWidth > 768

	return (
		<div className='py-6 flex items-center space-x-2 sm:space-x-14'>
			<Image 
				src={'/profilePicture.jpg'} 
				alt={''} 
				width={`${showFullImage? 150 : 75}`} 
				height={`${showFullImage? 150 : 75}`}  
				className={`rounded-full ml-8 sm:ml-0 shadow-lg shadow-primaryPurple dark:shadow-secondaryPurple`}
			/>
			<div>
				<h1 className="w-full mb-2 flex text-primaryPurple dark:text-secondaryPurple text-2xl font-bold text-start">
					{"Hi, I'm Cauê Maldonado"}
				</h1>
				<span>
					{"I'm a software engineer student, currently pursuing my B.E in Software Engineering at UFMS"}
				</span>
			</div>
		</div>
	)
}

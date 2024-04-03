import ImageAndDescription from '@/components/ImageAndDescription'
import Image from 'next/image'
import React from 'react'

export default function Post03() {
	return (
		<div className="flex-col w-full h-auto justify-center items-center px-56 py-8 text-lightText dark:text-darkText">
			<span className='w-full justify-center items-center flex mb-4'>02/03/2024</span>
			<span className="w-full justify-center flex font-semibold text-2xl text-primaryPurple dark:text-secondaryPurple mb-8">Post 3</span>
			<div className='w-full items-center justify-center flex'>
				<Image 
					className='rounded-lg shadow-lg mb-4'
					src={'/astronautImage.png'} 
					alt={''}
					width={625}
					height={625}
				/>
			</div>	
			<div className='w-full items-center justify-center flex text-primaryPurple dark:text-secondaryPurple bg-opacity-30'>
				<hr className='w-[625px] my-8'></hr>
			</div>
			<div className='w-full items-center justify-center flex'>
				<div className='w-[625px]'>
					<span className='text-2xl font-semibold text-lightText dark:text-darkText'>First Title</span>
					<p className='pt-8'>Pellentesque elit eget gravida cum sociis natoque penatibus et. Posuere sollicitudin aliquam ultrices sagittis orci a. Sit amet commodo nulla facilisi nullam. Volutpat diam ut venenatis tellus in metus vulputate. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Eget nullam non nisi est sit amet facilisis. Nec ullamcorper sit amet risus nullam eget felis. Egestas maecenas pharetra convallis posuere morbi leo urna. Vitae nunc sed velit dignissim sodales ut.</p>
				</div>	
			</div>
			<div className='w-full items-center justify-center flex text-primaryPurple dark:text-secondaryPurple bg-opacity-30'>
				<hr className='w-[625px] my-8'></hr>
			</div>
			<div className='w-full items-center justify-center flex'>
				<div className='w-[625px]'>
					<span className='text-2xl font-semibold text-lightText dark:text-darkText'>Second Title</span>
					<p className='pt-8'>Pellentesque elit eget gravida cum sociis natoque penatibus et. Posuere sollicitudin aliquam ultrices sagittis orci a. Sit amet commodo nulla facilisi nullam. Volutpat diam ut venenatis tellus in metus vulputate. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Eget nullam non nisi est sit amet facilisis. Nec ullamcorper sit amet risus nullam eget felis. Egestas maecenas pharetra convallis posuere morbi leo urna. Vitae nunc sed velit dignissim sodales ut.</p>
				</div>	
			</div>
			<div className='w-full items-center justify-center flex text-primaryPurple dark:text-secondaryPurple bg-opacity-30'>
				<hr className='w-[625px] my-8'></hr>
			</div>
			<div className='w-full items-center justify-center flex'>
				<div className='w-[625px]'>
					<span className='text-2xl font-semibold text-lightText dark:text-darkText'>Last Title</span>
					<p className='pt-8'>Pellentesque elit eget gravida cum sociis natoque penatibus et. Posuere sollicitudin aliquam ultrices sagittis orci a. Sit amet commodo nulla facilisi nullam. Volutpat diam ut venenatis tellus in metus vulputate. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Eget nullam non nisi est sit amet facilisis. Nec ullamcorper sit amet risus nullam eget felis. Egestas maecenas pharetra convallis posuere morbi leo urna. Vitae nunc sed velit dignissim sodales ut.</p>
				</div>	
			</div>
			<div className='w-full items-center justify-center flex text-primaryPurple dark:text-secondaryPurple bg-opacity-30'>
				<hr className='w-[625px] mt-4 mb-16'></hr>
			</div>
			<div className='w-full items-center justify-center flex'>
				<div className='w-[625px]'>
					<span className='text-2xl font-semibold text-lightText dark:text-darkText'>Recommended Posts</span>
				</div>	
			</div>
			<div className='w-full flex items-center justify-center'>
				<div className="py-6 flex-col w-[625px]">
					<ImageAndDescription 
						index={1}
						date="15/01/2024"
						imageSource={"/keyboardImage.png"}/>
					<ImageAndDescription 
						index={0}
						date="21/11/2023"
						imageSource={"/vrManImage.png"}/>
				</div>
			</div>
		</div>
	)
}

import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <>
			<div className="flex-col w-full h-auto justify-center px-32 lg:px-56 py-8 text-lightText dark:text-darkText">
                <span className="w-full justify-center flex font-semibold text-lg text-lightText dark:text-darkText mb-4">About me</span>
                <div className='py-6 flex items-center space-x-14'>
                    <Image 
                        src={'/profilePicture.jpg'} 
                        alt={''} 
                        width={150} 
                        height={150} 
                        className='rounded-full shadow-lg shadow-primaryPurple dark:shadow-secondaryPurple '
                    />
                    <div>
                        <h1 className="w-full mb-2 flex text-primaryPurple dark:text-secondaryPurple text-2xl font-bold text-start">Hi, I'm Cauê Maldonado</h1>
                        <span>I'm a software engineer student, currently pursuing my B.E in Software Engineering at UFMS</span>
                    </div>
                </div>
                <div className="py-6 mt-8 border-t border-primaryPurple dark:border-lightText border-opacity-30">
                    <span className="w-full justify-center flex font-semibold text-2xl text-primaryPurple dark:text-secondaryPurple mb-8">Education</span>
					<p className='mb-8'>I entered UFMS (Fedaral University of Mato Grosso do Sul) in 2021, so due to the COVID-19 pandemic, I didn't have face-to-face classes in my first year, and only in my second year did I start having in-person classes.</p>
                    <p className='mb-8'>However, college wasn't my first encounter with programming. When I was in my first year of high school in 2018, I had extracurricular classes where one of the options was programming. This was very important in deciding which course I would choose. In those classes, I had my first contact with Python and algorithms, but since it was only for a few hours a day, I couldn't delve deeply into the content.</p>
                    <p className='mb-8'>In college, various career options were presented: back-end programming, front-end, data analyst, UX/UI designer, requirements analyst, PO, PM, Scrum master, among many others. However, programming always interested me the most; I enjoyed getting my hands dirty. The topics that interest me range from web/mobile programming to AI, machine learning, and computer vision.</p>
                    <p>I'm in the final stretch of my graduation; soon I'll be a graduated Software Engineer and ready to achieve my goals.</p>
				</div>
                <div className="py-6 mt-8 border-t border-primaryPurple dark:border-lightText border-opacity-30">
                    <span className="w-full justify-center flex font-semibold text-2xl text-primaryPurple dark:text-secondaryPurple mb-8">Experience</span>
					<p className='mb-8'>When I was in the fifth semester (March 2023) of my graduation, I started working as a web developer intern at a company (SESI Innovation Center) in my city. This was my first professional experience and it was a significant challenge. Despite knowing the theory due to university, the practice was entirely different. We faced complex challenges and worked together with other professionals, including some who have over 20 years of experience, more time programming than I've been alive.</p>
					<p className='mb-8'>During this internship, I had my first contact with Next.js, which is actually the tool I'm using to build this blog and made me fell in love with web development.</p>
					<p>During this time, I mainly focused on developing software for one of the world's top 3 pulp and paper companies. It was a complex software with many rules that made me mature a lot as a professional. I'm very grateful for this opportunity, and I know this is just the beginning of my career.</p>
				</div>
                <div className="py-6 mt-8 border-t border-primaryPurple dark:border-lightText border-opacity-30">
                    <span className="w-full justify-center flex font-semibold text-2xl text-primaryPurple dark:text-secondaryPurple mb-8">Ambitions</span>
                    <p className='mb-8'>I know that my professional experience mainly revolves around web development. However, I am quite curious about working with mobile and AI, primarily due to the subjects at university that sparked my interest.</p>
                    <p>As a programmer, I believe we should always dream big. So, it's clear that I have a strong desire to work in a big tech company, and for that, I've been studying a lot. I believe that soon, with much effort, I will achieve it.</p>
                </div>
                <span className="mt-8 pt-8 border-t border-primaryPurple dark:border-lightText border-opacity-30 w-full justify-center flex font-semibold text-lg text-lightText dark:text-darkText mb-4">About me</span>
            </div>
        </>
    )
}

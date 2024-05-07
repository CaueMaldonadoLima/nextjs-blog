import IconAndTitle from '@/components/socials/IconAndTitle'
import React from 'react'

export default function page() {
    return (
        <>
            <div className="flex-col w-full h-auto justify-center px-32 lg:px-56 py-8 text-lightText dark:text-darkText">
                <span className="w-full justify-center flex font-semibold text-lg text-lightText dark:text-darkText mb-4">Socials</span>
                <h1 className="w-full mb-2 flex text-primaryPurple dark:text-secondaryPurple text-2xl font-bold text-start">My Socials</h1>
                <span>
                    {"Here's where you can find some more info about me."}
                </span>
                <div className="py-6">
                    <IconAndTitle imageSrc={'/linkedInIcon.png'} imageAlt={'linkedIn'} link={'https://www.linkedin.com/in/cauemaldonado1/'} title={'LinkedIn'} description={'Click here checkout my profile on LinkedIn, where I post content about my academic and professional career.    '}/>
                    <IconAndTitle imageSrc={'/gitHubIcon.png'} imageAlt={'gitHub'} link={'https://github.com/CaueMaldonadoLima'} title={'GitHub'} description={'Click here checkout my profile on GitHub, where you can see all my projects.    '}/>
                    <IconAndTitle imageSrc={'/youtubeIcon.png'} imageAlt={'youtube'} link={'https://www.youtube.com/channel/UCWCupq87rkjdN2qtQUAohJQ'} title={'YouTube'} description={'Click here checkout my profile on YouTube, where I post content about problem solving and other programming related themes. '}/>
                    <IconAndTitle imageSrc={'/leetCodeIcon.png'} imageAlt={'leetCode'} link={'https://leetcode.com/u/CaueMaldonadoLima/'} title={'LeetCode'} description={'Click here checkout my profile on leetCode, a platform where I solve programming problems.   '}/>
                    <IconAndTitle imageSrc={'/beecrowdIcon.png'} imageAlt={'beecrowd'} link={'https://judge.beecrowd.com/en/profile/920394'} title={'Beecrowd'} description={'Click here checkout my profile on beecrowd, a platform where I solve programming problems.    '}/>
				</div>
                <span className="border-t pt-8 border-primaryPurple dark:border-lightText border-opacity-30 w-full justify-center flex font-semibold text-lg text-lightText dark:text-darkText mb-4">Socials</span>
            </div>
        </>
    )
}

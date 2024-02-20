import React from 'react';
import { Skills, Skillset1, Skillset2, Skillset3, Skillset4 } from '@/constants'
import SkillProvider from '../../sub/SkillDataProvider';
import SkillText from '@/components/sub/SkillText';
import SkillChart from '@/components/sub/SkillChart/SkillChart';

export default function index() {
    return (
        <section
            id='skills'
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden '
            style={{ transform: "scale(0.9)" }}>
            <SkillText />
            <div className='flex justify-center flex-wrap mt-4 gap-y-8 gap-x-8 items-center'>
                {
                    Skills.map((item, index) => {
                        return (
                            <SkillChart
                                key={index}
                                percent={item.percent}
                                image={item.Image}
                                lable={item.skill_name}
                            />
                        )
                    })
                }
            </div>
            {/* <div className='flex justify-around flex-wrap mt-4 gap-y-5 gap-x-8 items-center'>
                {
                    Skillset2.map((image, index) => {
                        return (
                            <SkillProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        )
                    })
                }
            </div>
            <div className='flex justify-around flex-wrap mt-4 gap-y-5 gap-x-8 items-center'>
                {
                    Skillset3.map((image, index) => {
                        return (
                            <SkillProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        )
                    })
                }
            </div>
            <div className='flex justify-around flex-wrap mt-4 gap-y-5 gap-x-8 items-center'>
                {
                    Skillset4.map((image, index) => {
                        return (
                            <SkillProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        )
                    })
                }
            </div> */}
            {/* <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 flex items-center justify-center bg-cover'>
                    <video
                        className='w-[100%] h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src='/cards-video.webm'
                    />

                </div>
            </div> */}
        </section>
    )
}

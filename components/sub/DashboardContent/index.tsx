"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import mainIconsdark from '../../../public/mainIconsdark.svg';
import redirectIcon from '../../../public/redirect-icon.png';


export default function index() {

    const openResume = () => {
        window.open('/KalpeshPatilResume.pdf', '_blank')
    }
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-7 sm:px-20 mt-36 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center mx-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[0.9rem] px-[8px] border border-[#7042f88b] opacity-[0.9] max-w-[12rem]'>
                    <SparklesIcon className='text-[#b49bff] mr-[0.625rem] h-5 w-5' />
                    <h1 className='Welcome-text1 text-[0.813rem]'>
                        {/* Welcome-text */}
                        Hello world
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className=' flex flex-col gap-3 mt-6 text-[2.8rem] font-bold text-white max-w-[37.5rem] w-auto h-auto'>
                    <span>Hi, I Am Kalpesh</span>
                    <span>A <span className='gradient-text'>Fullstack Developer</span>
                    </span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className='text-gray-400 text-lg my-0 max-w-[37.5rem]'>
                    Passionate about crafting seamless and efficient web development experiences with expertise in both frontend and backend technologies.
                </motion.div>
                <motion.a
                    onClick={openResume}
                    variants={slideInFromLeft(1)}
                    className='flex justify-center items-center gap-2 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[12.5rem]'>
                    <span>Resume</span>
                    <Image src={redirectIcon} alt='' width={16} height={16} />

                </motion.a>

            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'>
                <Image src={mainIconsdark} alt='' width={650} height={650} />
            </motion.div>

        </motion.div>
    )
}

import React from 'react'

import profileImg from "../assets/profile.avif"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { fadeInUp, nameTagAnimation, transitions } from '../utils/animations'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] text-center'>

        {/* image and name animation */}
        <div className='relative'>
            <div className='relative mb-8'>

                {/* gradient effect */}
                <div className='absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-xl'></div>

                {/* static portfolio image */}
                <div className='relative'>
                    <img src={profileImg} alt="Profile of Kawsar Ahmed" className='w-32 h-32 rounded-full relative z-10' />
                </div>

                {/* animated name tag */}
                <motion.div 
                    initial={nameTagAnimation.initial}
                    animate={nameTagAnimation.animate}
                    transition={nameTagAnimation.transition}
                    style={{ transformOrigin: "center center" }}
                    className='absolute -rotate-3 -top-0 -right-28 z-30 bg-white text-black px-4 py-2 rounded-full shadow-lg'
                >
                    <p className='text-sm font-medium'>Rohit Sarkar 👋🏼</p>
                </motion.div>

            </div>
        </div>

        {/* heading or title */}
      <motion.h1  
  variants={fadeInUp}
  initial="initial"
  animate="animate"
  transition={{ ...transitions.default, delay: 0.4 }}
  className='md:text-5xl text-3xl px-2 md:px-0 font-medium mb-4 max-w-xl'
>
  <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>
  Flutter Developer
  </span> <br />
  <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>
  Turning Ideas
  </span> <br />
  <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>
    Into Apps.
  </span>
</motion.h1>


        {/* btn */}
        <motion.button 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...transitions.default, delay: 0.6 }}
            className='mt-8 py-4 px-12 border bg-[#1A1A1A] border-gray-600 text-gray-600 hover:border-gray-400 hover:text-white transition-colors rounded-full cursor-pointer'
        >
            Latest Shots
        </motion.button>
    </div>
  )
}

export default Hero

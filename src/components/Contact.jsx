import React from 'react'
import { LuHandshake } from 'react-icons/lu'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeInUp, transitions } from '../utils/animations'

const Contact = () => {
  return (
    <section className='py-32 px-4 md:px-6 bg-[#0F0F0F]/80'>
        <div className='max-w-6xl mx-auto text-center'>
            <motion.div 
            
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{...transitions.default}}
            className='mb-12'>
            <div className='size-24 mx-auto mb-8 bg-gray-900 rounded-full flex items-center justify-center'>
                <LuHandshake className='text-5xl text-gray-400'/>
            </div>

            <h2 className='md:text-4xl lg:text-5xl text-3xl mb-12'>
                <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>Tell me about your next</span> 
                <br className='md:block hidden'/>
                <span className='bg-gradient-to-r from-white via-gray-400 to-gray-500 text-transparent bg-clip-text'> project</span>
            </h2>
            </motion.div>

            <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{...transitions.default, delay: 0.2}}
            className='flex flex-wrap justify-center gap-4'>
                <a href="mailto:help.yourassistant@gmail.com" className='inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors'>Email Me</a>
                <a href="https://wa.me/+8801615755420" target='_blank' className='inline-flex items-center px-8 py-3 border border-gray-700 text-white rounded-full font-medium hover:border-gray-500 transition-colors'>WhatsApp</a>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact
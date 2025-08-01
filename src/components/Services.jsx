import React from 'react'
import { BiPencil } from "react-icons/bi";
import { BsPhone } from 'react-icons/bs';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbCode } from 'react-icons/tb';
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import { fadeInUp, transitions } from '../utils/animations';

const services = [
    {
        icon: <BiPencil className='text-2xl'/>,
        title: "UX & UI",
        description: "Designing interfaces that are intuitive, efficient, and enjoyable to use."
    },
    {
        icon: <BsPhone className='text-2xl'/>,
        title: "Web & Mobile App",
        description: "Transforming ideas into exceptional web and mobile app experiences."
    },
    {
        icon: <MdOutlineDesignServices className='text-2xl'/>,
        title: "Design & Creative",
        description: "Crafting visually stunning designs that connect with your audience."
    },
    {
        icon: <TbCode className='text-2xl'/>,
        title: "Development",
        description: "Bringing your vision to life with the latest technology and design trends."
    }
]

const Services = () => {
  return (
    <section className='py-20 px-4 md:px-6 bg-[#0D0D0D]'>
        <motion.div 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{...transitions.default}}
        
        className='max-w-6xl mx-auto text-center mb-16'>
            <h2 className='text-2xl md:text-3xl mb-1'>
                <span className='bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text'>
                    I’m a Flutter app developer </span>
                <span className='text-gray-400 md:text-[28px]'>specializing in building high-performance </span>
               
            </h2>
            <p> <span className='md:text-[27px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-transparent bg-clip-text'>
                 user-friendly apps that help brands and agencies achieve their digital goals.</span></p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            {
                services.map((service, index) => {
                   return (<motion.div 
                   variants={fadeInUp}
                   initial="initial"
                    animate="animate"
                    transition={{...transitions.default, delay: index * 0.2}}
                    key={index}
                   className='bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors'>
                    <div className='mb-4 inline-block p-3 bg-gray-800/50 rounded-lg'>{service.icon}</div>
                    <h3 className='text-lg font-medium mb-2 text-white'>{service.title}</h3>
                    <p className='text-gray-400 text-sm'>{service.description}</p>
                   </motion.div>)
                })
            }
        </div>
    </section>
  )
}

export default Services
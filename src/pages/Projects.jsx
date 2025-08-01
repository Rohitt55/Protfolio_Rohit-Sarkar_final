import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { fadeInUp, transitions } from '../utils/animations';

const projectList = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind CSS.',
    github: 'https://github.com/Rohitt55/Protfolio_Rohit-Sarkar',
    latestShots: 'https://dribbble.com/rohitsarkar' // Example
  },
  {
    title: 'ExpenseMate - Exp & Inc Tracker',
    description: 'A user-friendly Flutter app to track daily income and expenses with smart categorization, history logs, and financial summaries. Published on Google Play Store for public use.',
    github: 'https://github.com/Rohitt55/expensemate_playstore_final',
    playstore: 'https://play.google.com/store/apps/details?id=com.rohitsarkar.expensemate&pcampaignid=web_share'
  },
];

function Projects() {
  return (
    <section className='py-20 px-4 md:px-6 bg-[#0D0D0D] text-white'>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ ...transitions.default }}
        className='max-w-6xl mx-auto text-center mb-16'
      >
        <h2 className='text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text'>
          My Projects
        </h2>
        <p className='text-gray-400 mt-2 text-lg'>Open-source works and apps built using modern tech.</p>
      </motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...transitions.default, delay: index * 0.2 }}
            className='bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors'
          >
            <h3 className='text-xl font-medium mb-2 text-white'>{project.title}</h3>
            <p className='text-gray-400 mb-4 text-sm'>{project.description}</p>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className='text-blue-400 text-sm hover:underline block'
            >
              View on GitHub →
            </a>

            {/* Play Store Link (optional) */}
            {project.playstore && (
              <a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className='text-green-400 text-sm hover:underline mt-2 block'
              >
                Download on Play Store →
              </a>
            )}

            {/* Latest Shots Link (optional) */}
            {project.latestShots && (
              <a
                href={project.latestShots}
                target="_blank"
                rel="noopener noreferrer"
                className='text-purple-400 text-sm hover:underline mt-2 block'
              >
                Latest Shots →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

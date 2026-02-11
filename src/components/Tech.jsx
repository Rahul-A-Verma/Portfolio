import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <section className="w-full bg-[#0f0f0f] py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={`${styles.sectionSubText} text-orange-400`}>Technologies →</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Tools & Stacks</h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={fadeIn('', '', 0.2, 1)}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center"
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
            className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-xl p-4 shadow-md hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center"
            title={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};


export default SectionWrapper(Tech, "");
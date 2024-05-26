import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ imageSrc, index, totalSkills, isSelected, onClick }) => {
    const angle = (360 / totalSkills) * index;
    const margin = 20;
    const baseRadius = window.innerWidth < 768 ? 100 : 180;
    const radius = baseRadius + margin;

    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    return (
        <motion.div
            className={`skill-card absolute w-16 h-16 md:w-24 md:h-24 bg-white dark:bg-gray-900 shadow-lg rounded-full p-2 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center text-center cursor-pointer ${isSelected ? 'ring-4 ring-blue-500' : ''}`}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: x, y: y }}
            exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 30 }}
            style={{ transform: 'translate(-50%, -50%)' }}
            onClick={onClick}
            data-aos="zoom-in"
        >
            <img src={imageSrc} alt="" className="w-10 h-10 md:w-16 md:h-16 rounded-full" />
        </motion.div>
    );
};

export default SkillCard;

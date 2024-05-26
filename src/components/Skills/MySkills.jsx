import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillCard from './SkillCard';
import { skills } from '../../utils/skills';

const MySkills = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.skill-card') && !event.target.closest('.skill-description')) {
                setSelectedSkillIndex(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleCardClick = () => {
        setIsAnimating(!isAnimating);
        setSelectedSkillIndex(null);
    };

    const handleSkillClick = (index, event) => {
        event.stopPropagation();
        setSelectedSkillIndex(index);
    };

    const handleLearnMoreClick = () => {
        if (selectedSkillIndex !== null) {
            window.open(skills[selectedSkillIndex].link, '_blank');
        }
    };

    return (
        <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-700 flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex justify-center items-center">
                <motion.div
                    className="absolute w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg flex justify-center items-center text-center z-10 cursor-pointer"
                    onClick={handleCardClick}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {isAnimating ? 'My Skills' : 'Click Me'}
                    </h3>
                </motion.div>
                <div className={`absolute w-full h-full flex justify-center items-center ${isAnimating ? 'animate-rotate' : ''}`}>
                    <AnimatePresence>
                        {isAnimating && skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                imageSrc={skill.imageSrc}
                                index={index}
                                totalSkills={skills.length}
                                isSelected={index === selectedSkillIndex}
                                onClick={(event) => handleSkillClick(index, event)}
                            />
                        ))}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {selectedSkillIndex !== null && (
                        <motion.div
                            className="skill-description absolute bottom-0 mb-4 p-4 bg-white rounded-lg shadow-lg text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-lg font-bold">{skills[selectedSkillIndex].title}</h3>
                            <p className="text-gray-700">{skills[selectedSkillIndex].shortDescription}</p>
                            <button onClick={handleLearnMoreClick} className="mt-2 text-blue-500">Learn More</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MySkills;

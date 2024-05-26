import React from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

const ProjectModal = ({ modalIsOpen, closeModal, currentImage, currentTitle, currentDescription, currentLanguages }) => {
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1, scale: 1,
            transition: { duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }
        }
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Project Image"
            className="flex items-center justify-center"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        >
            <motion.div
                className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-lg w-full"
                initial="hidden"
                animate="visible"
                variants={modalVariants}
            >
                <button onClick={closeModal} className="text-right text-gray-600 dark:text-gray-400">Close</button>
                <img src={currentImage} alt="Project" className="w-full h-auto mt-4 rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{currentTitle}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{currentDescription}</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 mt-2">
                        {currentLanguages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </Modal>
    );
};

export default ProjectModal;

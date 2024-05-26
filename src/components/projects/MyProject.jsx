import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { projects } from '../../utils/project';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const MyProject = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState({
        image: '',
        title: '',
        description: '',
        languages: []
    });

    const openModal = (image, title, description, languages) => {
        setCurrentProject({ image, title, description, languages });
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id='project' className="py-20 bg-gradient-to-r from-gray-900 to-gray-700">
            <div className="container mx-auto px-6 md:px-12">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Some of My Projects
                </motion.h2>
                <Slider {...settings}>
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            openModal={openModal}
                        />
                    ))}
                </Slider>
            </div>

            <ProjectModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                currentImage={currentProject.image}
                currentTitle={currentProject.title}
                currentDescription={currentProject.description}
                currentLanguages={currentProject.languages}
            />
        </div>
    );
};

export default MyProject;

import heroImage from '../assets/dino-kuning.png';
import resumePDF from '../assets/cv.pdf';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaInfoCircle, FaBriefcase } from 'react-icons/fa';
import { FiDownload } from "react-icons/fi";
import { experienceContent } from '../utils/experience';

const HeroImage = () => (
    <div className="flex justify-center md:justify-start md:w-1/2 hidden md:block">
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ scale: 1.05 }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative"
        >
            <img src={heroImage} alt="Your Name" className="w-64 h-64 object-cover" />
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                style={{ zIndex: -1 }}
            >
                <path
                    fill="#87CEEB"
                    d="M40.2,-60.5C49.7,-52.4,50.4,-34.2,53.1,-19.2C55.9,-4.2,60.8,7.6,59.6,19.8C58.4,32.1,51.1,44.9,40.3,52.7C29.6,60.5,14.8,63.2,1.8,60.8C-11.2,58.4,-22.3,51,-34.7,44.5C-47.1,38,-60.9,32.4,-63.6,22.5C-66.2,12.7,-57.7,-1.4,-51.1,-14.1C-44.5,-26.7,-39.8,-37.9,-31.7,-47.1C-23.6,-56.4,-11.8,-63.8,2.8,-66.9C17.4,-70.1,34.8,-68.7,40.2,-60.5Z"
                    transform="translate(100 100)"
                />
            </svg>
        </motion.div>
    </div>
);

const TabContent = ({ activeTab, experienceStep, handlePrevStep, handleNextStep }) => (
    <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
        {activeTab === 'about' && (
            <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">ABOUT ME</h1>
                <p>
                    Hello, I am <span className="highlight">Gani Ramadhan</span>, a passionate <span className="highlight">Fullstack Developer</span> with over a year of experience in building and maintaining web applications. My technical expertise includes <span className="highlight">PHP</span>, <span className="highlight">Laravel</span>, <span className="highlight">JavaScript</span>, <span className="highlight">ReactJS</span>, <span className="highlight">Next.js</span>, and <span className="highlight">Node.js</span>. I am proficient in using CSS frameworks such as <span className="highlight">Tailwind CSS</span> and <span className="highlight">Material UI</span> to create <span className='highlight'>responsive and visually appealing user interfaces.</span>  I have a strong enthusiasm for learning and continually expanding my knowledge, particularly in the field of technology. My high level of dedication and <span className='highlight'>problem-solving skills </span>enable me to tackle complex challenges effectively. I am committed to delivering high-quality solutions and am always eager to collaborate and create innovative projects.
                </p>
                <button
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = resumePDF;
                        link.download = 'resume.pdf';
                        link.click();
                    }}
                    className="btn bg-blue-400 text-white px-4 py-2 mt-4 hover:bg-blue-500 transition duration-300 rounded-md flex items-center"
                >
                    My Resume <FiDownload className="ml-2" />
                </button>
            </motion.div>
        )}
        {activeTab === 'experience' && (
            <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">Professional history</h1>
                <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{experienceContent[experienceStep].experience}</h5>
                <p className="text-gray-600 dark:text-gray-400">{experienceContent[experienceStep].date}</p>
                <p>{experienceContent[experienceStep].description}</p>
                <div className="flex justify-between mt-6">
                    <button
                        onClick={handlePrevStep}
                        disabled={experienceStep === 0}
                        className={`p-4 rounded-md ${experienceStep === 0 ? 'bg-gray-300 dark:bg-gray-600' : 'bg-blue-400 text-white hover:bg-blue-500'}`}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={handleNextStep}
                        disabled={experienceStep === experienceContent.length - 1}
                        className={`p-4 rounded-md ${experienceStep === experienceContent.length - 1 ? 'bg-gray-300 dark:bg-gray-600' : 'bg-blue-400 text-white hover:bg-blue-500'}`}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </motion.div>
        )}
    </div>
);

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [experienceStep, setExperienceStep] = useState(0);
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { triggerOnce: false });

    const handleNextStep = () => {
        setExperienceStep((prevStep) => (prevStep < experienceContent.length - 1 ? prevStep + 1 : prevStep));
    };

    const handlePrevStep = () => {
        setExperienceStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    };

    return (
        <div id="aboutme" className="bg-gradient-to-r from-gray-900 to-gray-700 py-20 px-6 md:px-10 flex items-center justify-center" style={{ minHeight: '100vh' }}>
            <div ref={aboutRef} className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-10 md:space-y-0">
                {isInView && <HeroImage />}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="md:w-2/3 max-w-5xl mx-auto"
                >
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-10">
                        <div className="flex justify-center mb-6">
                            <button
                                className={`px-6 py-2 rounded-t-lg flex items-center ${activeTab === 'about' ? 'bg-gray-200 dark:bg-blue-400 text-gray-800 dark:text-gray-200' : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}
                                onClick={() => setActiveTab('about')}
                            >
                                <FaInfoCircle className="mr-2" />
                                About 
                            </button>
                            <button
                                className={`px-6 py-2 rounded-t-lg ml-2 flex items-center ${activeTab === 'experience' ? 'bg-gray-200 dark:bg-blue-400 text-gray-800 dark:text-gray-200' : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                <FaBriefcase className="mr-2" />
                                Experience
                            </button>
                        </div>
                        <TabContent activeTab={activeTab} experienceStep={experienceStep} handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;

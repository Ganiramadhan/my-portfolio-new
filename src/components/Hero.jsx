import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaHandshake, FaArrowUp } from 'react-icons/fa';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import heroImage from '../assets/dino-kuning.png';

const Hero = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSayHelloClick = () => {
        toast(
            <div className="flex items-center">
                <img
                    src="https://twemoji.maxcdn.com/v/latest/72x72/1f525.png"
                    alt="Fire Emoji"
                    className="w-6 h-6 mr-2"
                />
                <span>Hello friend!</span>
            </div>,
            {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide,
            }
        );
    };

    return (
        <div>
            <div id="#" className="bg-gradient-to-r from-gray-900 to-gray-700 py-20 px-6 md:px-10 md:flex md:items-center" style={{ minHeight: '100vh' }}>
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="md:w-1/2 md:pr-10 mt-4"
                >
                    <h1 className="text-gray-100 text-4xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span>Hello, I'm</span> <span className="text-blue-400">Gani Ramadhan</span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Frontend Developer',
                            1000,
                            'Backend Developer',
                            1000,
                            'Security Analyst',
                            1000
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ fontSize: '2em', display: 'inline-block', color: '#A0AEC0', fontFamily: 'Poppins, sans-serif' }}
                        repeat={Infinity}
                    />
                    <p className="mt-4 text-lg text-gray-300" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        I'm a full-stack developer with 1 year of experience in React, Next.js, Node.js, Laravel, and JavaScript, If you would like to know more or collaborate on a project, feel free to reach out!
                    </p>
                    <button
                        className='btn bg-blue-400 text-white px-4 py-2 mt-4 hover:bg-blue-500 transition duration-300 rounded-md flex items-center'
                        onClick={handleSayHelloClick}
                    >
                        Say Hello <FaHandshake className="ml-2" />
                    </button>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="md:w-1/2 mt-10 md:mt-0 relative"
                >
                    <div className="relative flex justify-center items-center h-64 md:h-screen">
                        <svg
                            className="absolute w-full h-full"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ zIndex: 1 }}
                        >
                            <path
                                fill="#87CEEB"
                                d="M40.2,-60.5C49.7,-52.4,50.4,-34.2,53.1,-19.2C55.9,-4.2,60.8,7.6,59.6,19.8C58.4,32.1,51.1,44.9,40.3,52.7C29.6,60.5,14.8,63.2,1.8,60.8C-11.2,58.4,-22.3,51,-34.7,44.5C-47.1,38,-60.9,32.4,-63.6,22.5C-66.2,12.7,-57.7,-1.4,-51.1,-14.1C-44.5,-26.7,-39.8,-37.9,-31.7,-47.1C-23.6,-56.4,-11.8,-63.8,2.8,-66.9C17.4,-70.1,34.8,-68.7,40.2,-60.5Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                        <motion.img
                            whileHover={{ scale: 1.1, cursor: 'pointer' }}
                            animate={{ y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                            className="relative z-10 w-full max-w-xs"
                            src={heroImage}
                            alt="Hero Image"
                        />
                    </div>
                </motion.div>
            </div>
            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 z-50 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    <FaArrowUp className="h-6 w-6" />
                </button>
            )}
            <ToastContainer />
        </div>
    );
};

export default Hero;

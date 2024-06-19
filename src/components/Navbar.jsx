import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '../assets/dino-kuning.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Home');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setIsOpen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 shadow-md fixed w-full z-50 transition-colors duration-300">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {/* <img src={logoImage} alt="ganipedia logo" style={{ width: '60px' }} /> */}
                    <div className="text-blue-600 text-2xl font-bold"><span className='text-white'> GaniPedia</span> </div>
                </div>
                <div className={`hidden md:flex md:items-center md:space-x-6 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#"
                                className={`text-white text-lg hover:text-gray-300 transition-colors ${activeMenu === 'Home' ? 'font-semibold bg-blue-500 text-white rounded-md px-3 py-2' : ''}`}
                                onClick={() => handleMenuClick('Home')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#aboutme"
                                className={`text-white text-lg hover:text-gray-300 transition-colors ${activeMenu === 'About' ? 'font-semibold bg-blue-500 text-white rounded-md px-3 py-2' : ''}`}
                                onClick={() => handleMenuClick('About')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#project"
                                className={`text-white text-lg hover:text-gray-300 transition-colors ${activeMenu === 'Project' ? 'font-semibold bg-blue-500 text-white rounded-md px-3 py-2' : ''}`}
                                onClick={() => handleMenuClick('Project')}
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={`text-white text-lg hover:text-gray-300 transition-colors ${activeMenu === 'Contact' ? 'font-semibold bg-blue-500 text-white rounded-md px-3 py-2' : ''}`}
                                onClick={() => handleMenuClick('Contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? (
                            <XMarkIcon className="h-8 w-8 text-white" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-white" />
                        )}
                    </button>
                </div>
                <ul className={`fixed top-0 left-full h-full w-full bg-gradient-to-b from-blue-300 to-blue-500 flex flex-col items-center justify-center space-y-6 transition-transform transform ${isOpen ? 'translate-x-[-100%]' : ''} md:hidden z-50`}>
                    <li className="absolute top-4 right-4">
                        <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                            <XMarkIcon className="h-8 w-8 text-white" />
                        </button>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-white text-lg hover:text-gray-300 transition-colors ${activeMenu === 'Home' ? 'font-semibold bg-blue-500 text-white rounded-md px-3 py-2' : ''}`}
                            onClick={() => handleMenuClick('Home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#aboutme"
                            className={`text-white text-lg hover:text-gray-300 transition-colors ${activeMenu === 'About' ? 'font-semibold bg-blue-500 text-white rounded-md px-3 py-2' : ''}`}
                            onClick={() => handleMenuClick('About')}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#project"
                            className={`text-white text-lg hover:text-gray-300 transition-colors ${activeMenu === 'Project' ? 'font-semibold bg-blue-500 text-white rounded-md px-3 py-2' : ''}`}
                            onClick={() => handleMenuClick('Project')}
                        >
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`text-white text-lg hover:text-gray-300 transition-colors ${activeMenu === 'Contact' ? 'font-semibold bg-blue-500 text-white rounded-md px-3 py-2' : ''}`}
                            onClick={() => handleMenuClick('Contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

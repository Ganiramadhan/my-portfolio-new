import { FaFacebook,FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const MyFooter = () => {
    return (
        <footer className=" bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10">
            <div className="container mx-auto px-6 md:px-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-gray-100">GANI PEDIA</h2>
                        <p className="mt-2">"Creating magic with lines of code." 💥</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/gani-ramadhan-ab588020a" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700 transition duration-300">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/Ganiramadhan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-950 transition duration-300">
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-6 md:flex md:justify-between">
                    <div className="md:w-1/2">
                        <h3 className="text-lg font-semibold text-gray-100">Contact Us</h3>
                        <p className="mt-2">Jl. Cigadung, Kec. Cibeunying Kaler, Kota Bandung</p>
                        <p className="mt-1">Phone: (+62) 8387 8624 702</p>
                        <p className="mt-1">Email: ganiramadhan35@gmail.com</p>
                    </div>
                </div>
                <div className="mt-6 text-center text-gray-500 text-sm">
                    &copy; 2024 GaniPedia. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;

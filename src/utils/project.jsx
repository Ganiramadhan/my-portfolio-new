import projectImage1 from '../assets/project1.jpg';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import projectImage4 from '../assets/project1.png';

export const projects = [
    {
        id: 1,
        image: projectImage1,
        title: 'E-Commerce Platform',
        description: "A comprehensive E-Commerce platform developed using Laravel, Inertia.js, and React.js, featuring a MySQL database. The project includes full user authentication with login and registration functionality.",
        link: 'https://example.com/1',
        languages: ['Laravel', 'Inertia.js', 'React.js', 'MySQL']
    },
    {
        id: 2,
        image: projectImage2,
        title: 'AI Generation Tool',
        description: "An AI-powered application created with React.js, utilizing the Groq AI API to generate intelligent responses. This project showcases the integration of advanced AI technologies within a modern web framework.",
        link: 'https://react-groq.vercel.app',
        languages: ['React.js', 'Groq AI']
    },
    {
        id: 3,
        image: projectImage3,
        title: 'Dealer Landing Page',
        description: "A visually appealing landing page for a Toyota automobile dealership. Developed with HTML, CSS, and JavaScript, this project emphasizes responsive design and user engagement.",
        link: 'https://www.dealerbandungtoyota.com',
        languages: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 4,
        image: projectImage4,
        title: 'Financial Reporting Website',
        description: "A user-friendly financial reporting platform built with Laravel, Inertia.js, and Bootstrap. This project is designed to present financial data clearly and efficiently to users.",
        link: 'https://keuangan.megamaster.id',
        languages: ['Laravel', 'Inertia.js', 'Bootstrap']
    },
];
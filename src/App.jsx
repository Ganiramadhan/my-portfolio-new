import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import MyFooter from './components/Footer';
import MyProject from './components/projects/MyProject';
import MySkills from './components/Skills/MySkills';
import Contact from './components/Contact';

const App = () => {
    return (
          <>
            <Navbar />  
            <Hero />
            <AboutMe/>
             <MySkills/>
            <MyProject/>
            <Contact/>
            <MyFooter/>
          </>
    );
};

export default App;

import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      experience: experienceRef,
    };

    refs[section]?.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onScrollTo={scrollToSection} />
      {/* <div ref={homeRef} className="flex justify-center items-center"><Home/></div>
      <div ref={aboutRef} className="flex justify-center items-center"><About/></div>
      <div ref={experienceRef} className="flex justify-center items-center"><Experience/></div> */}
    </>
  );
}

export default App;

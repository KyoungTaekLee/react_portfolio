import AboutMe from './components/aboutMe'
import Skill from './components/skill'
import Project from './components/project'
import ContactMe from './components/contactMe'
import './App.css'
import React, { useRef, useEffect, useState } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';

function App() {
  const targetTop = useRef(null);
  const targetAboutMe = useRef(null);
  const targetSkill = useRef(null);
  const targetProject = useRef(null);
  const targetContactMe = useRef(null);
  const [activeButton, setActiveButton] = useState(null);
  const [isTopButtonHovered, setIsTopButtonHovered] = useState(false);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      const windowHeight = window.innerHeight;
      scroll.scrollMore(windowHeight);
    } else if (event.deltaY < 0) {
      const windowHeight = window.innerHeight;
      scroll.scrollMore(-windowHeight);
    }
    applyHoverEffect();
  };


  const applyHoverEffect = () => {
    const windowHeight = window.innerHeight;
    const currentPosition = window.scrollY + windowHeight/2;

    // 각 섹션의 위치를 계산하여 현재 활성화된 버튼을 갱신
    if (currentPosition >= targetContactMe.current.offsetTop) {
      setActiveButton('contactMe');
    } else if (currentPosition >= targetProject.current.offsetTop) {
      setActiveButton('project');
    } else if (currentPosition >= targetSkill.current.offsetTop) {
      setActiveButton('skill');
    } else if (currentPosition >= targetAboutMe.current.offsetTop) {
      setActiveButton('aboutMe');
    } else if (currentPosition >= targetTop.current.offsetTop) {
      setActiveButton('top');
    }
  };


  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToRef = (ref, button) => {
    setActiveButton(button);
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='App' ref={targetTop}>
      <div className='AppHeader'>Port Folio</div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <span className="text">Scroll down</span>
      <div className='AppButtonSet'>
        <button
          onClick={() => scrollToRef(targetTop, 'top')}
          onMouseEnter={() => setIsTopButtonHovered(true)} 
          onMouseLeave={() => setIsTopButtonHovered(false)} 
          className={`AppButtonStyle ${activeButton === 'top' ? 'hoverEffect' : ''}`}
        >
          <div className='mouseOver'>{isTopButtonHovered ? 'Top' : ''}</div>
          {/* {isTopButtonHovered ? 'Top' : ''} */}
        </button>
        <button
          onClick={() => scrollToRef(targetAboutMe, 'aboutMe')}
          className={`AppButtonStyle ${activeButton === 'aboutMe' ? 'hoverEffect' : ''}`}
        >
       
        </button>
        <button
          onClick={() => scrollToRef(targetSkill, 'skill')}
          className={`AppButtonStyle ${activeButton === 'skill' ? 'hoverEffect' : ''}`}
        >
       
        </button>
        <button
          onClick={() => scrollToRef(targetProject, 'project')}
          className={`AppButtonStyle ${activeButton === 'project' ? 'hoverEffect' : ''}`}
        >
         
        </button>
        <button
          onClick={() => scrollToRef(targetContactMe, 'contactMe')}
          className={`AppButtonStyle ${activeButton === 'contactMe' ? 'hoverEffect' : ''}`}
        >
          
        </button>
      </div>
      <div ref={targetAboutMe}>
        <AboutMe />
      </div>
      <div ref={targetSkill}>
        <Skill />
      </div>
      <div ref={targetProject}>
        <Project />
      </div>
      <div ref={targetContactMe}>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;

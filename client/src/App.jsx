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
  const [isTopButtonHoveredTop, setIsTopButtonHoveredTop] = useState(false);
  const [isTopButtonHoveredAboutMe, setIsTopButtonHoveredAboutMe] = useState(false);
  const [isTopButtonHoveredSkill, setIsTopButtonHoveredSkill] = useState(false);
  const [isTopButtonHoveredProject, setIsTopButtonHoveredProject] = useState(false);
  const [isTopButtonHoveredContactMe, setIsTopButtonHoveredContactMe] = useState(false);

  const scrollToRef = (ref, button) => {
    setActiveButton(button);
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const applyHoverEffect = () => {
    const windowHeight = window.innerHeight;
    const currentPosition = window.scrollY + windowHeight / 2;

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
    window.addEventListener('wheel', applyHoverEffect);
    return () => {
      window.removeEventListener('wheel', applyHoverEffect);
    };
  }, []);

  return (

    <div className='App' ref={targetTop}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className='AppHeader font'>Port Folio</div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <span className="text">Scroll down</span>
      <div className='AppButtonSet'>
        <button
          onClick={() => scrollToRef(targetTop, 'top')}
          onMouseEnter={() => setIsTopButtonHoveredTop(true)}
          onMouseLeave={() => setIsTopButtonHoveredTop(false)}
          className={`AppButtonStyle ${activeButton === 'top' ? 'hoverEffect' : ''}`}
        >
          <div className='mouseOver'>{isTopButtonHoveredTop ? 'Top' : ''}</div>
          {/* {isTopButtonHovered ? 'Top' : ''} */}
        </button>
        <button
          onClick={() => scrollToRef(targetAboutMe, 'aboutMe')}
          onMouseEnter={() => setIsTopButtonHoveredAboutMe(true)}
          onMouseLeave={() => setIsTopButtonHoveredAboutMe(false)}
          className={`AppButtonStyle ${activeButton === 'aboutMe' ? 'hoverEffect' : ''}`}
        >
          <div className='mouseOver'>{isTopButtonHoveredAboutMe ? 'AboutMe' : ''}</div>
        </button>
        <button
          onClick={() => scrollToRef(targetSkill, 'skill')}
          onMouseEnter={() => setIsTopButtonHoveredSkill(true)}
          onMouseLeave={() => setIsTopButtonHoveredSkill(false)}
          className={`AppButtonStyle ${activeButton === 'skill' ? 'hoverEffect' : ''}`}
        >
          <div className='mouseOver'>{isTopButtonHoveredSkill ? 'Skill' : ''}</div>
        </button>
        <button
          onClick={() => scrollToRef(targetProject, 'project')}
          onMouseEnter={() => setIsTopButtonHoveredProject(true)}
          onMouseLeave={() => setIsTopButtonHoveredProject(false)}
          className={`AppButtonStyle ${activeButton === 'project' ? 'hoverEffect' : ''}`}
        >
          <div className='mouseOver'>{isTopButtonHoveredProject ? 'Project' : ''}</div>
        </button>
        <button
          onClick={() => scrollToRef(targetContactMe, 'contactMe')}
          onMouseEnter={() => setIsTopButtonHoveredContactMe(true)}
          onMouseLeave={() => setIsTopButtonHoveredContactMe(false)}
          className={`AppButtonStyle ${activeButton === 'contactMe' ? 'hoverEffect' : ''}`}
        >
          <div className='mouseOver'>{isTopButtonHoveredContactMe ? 'ContactMe' : ''}</div>
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

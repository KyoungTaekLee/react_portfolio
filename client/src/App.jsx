import AboutMe from './components/aboutMe'
import Skill from './components/skill'
import Project from './components/project'
import Link from './components/Link'
import './App.css'
import React, { useRef, useEffect, useState } from 'react';

function App() {
  const targetTop = useRef(null);
  const targetAboutMe = useRef(null);
  const targetSkill = useRef(null);
  const targetProject = useRef(null);
  const targetLink = useRef(null);

  const [scrollEffectEnabled, setScrollEffectEnabled] = useState(false);

  const TopClick = () => {
    targetTop.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const AboutMeClick = () => {
    targetAboutMe.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const SkillClick = () => {
    targetSkill.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const ProjectClick = () => {
    targetProject.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const LinkClick = () => {
    targetLink.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  useEffect(() => {
    setScrollEffectEnabled(false);

    const handleScroll = () => {
      if (scrollEffectEnabled) {
        const aboutMeElement = targetAboutMe.current;
        const topOffset = aboutMeElement.getBoundingClientRect().top;
        const isScrollingDown = topOffset <= 0;

        if (isScrollingDown) {
          aboutMeElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollEffectEnabled, targetAboutMe]);

  const ScrollDownClick = () => {
    setScrollEffectEnabled(true);
    const aboutMeElement = targetAboutMe.current;
    aboutMeElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='App' ref={targetTop}>
      <div className='AppHeader' >
        Port Folio
      </div>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <span class="text" onClick={ScrollDownClick}>Scroll down</span>
      <div className='AppButtonSet'>
        <button onClick={TopClick} className='AppButtonStyle'>Top</button>
        <button onClick={AboutMeClick} className='AppButtonStyle'>AboutMe</button>
        <button onClick={SkillClick} className='AppButtonStyle'>Skill</button>
        <button onClick={ProjectClick} className='AppButtonStyle'>Project</button>
        <button onClick={LinkClick} className='AppButtonStyle'>Link</button>
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
      <div ref={targetLink}>
        <Link />
      </div>
    </div>
  );
}

export default App;

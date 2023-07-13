import AboutMe from './components/aboutMe'
import Skill from './components/skill'
import Project from './components/project'
import Link from './components/Link'
import './App.css'
import React, { useRef } from 'react';

function App() {
  const targetAboutMe = useRef(null);
  const targetSkill = useRef(null);
  const targetProject = useRef(null);
  const targetLink = useRef(null);

  const AboutMeClick = () => {
    targetAboutMe.current.scrollIntoView({ behavior: 'smooth' ,block: 'start' });
  };
  
  const SkillClick = () => {
    targetSkill.current.scrollIntoView({ behavior: 'smooth' ,block: 'start' });
  }
  
  const ProjectClick = () => {
    targetProject.current.scrollIntoView({ behavior: 'smooth' ,block: 'start' });
  }
  
  const LinkClick = () => {
    targetLink.current.scrollIntoView({ behavior: 'smooth' ,block: 'start' });
  }

  return (
    <div className='App'>
      <div className='AppHeader'>
        Port Folio
      </div>
      <div className='AppButtonSet'>
        <button onClick={AboutMeClick} className='AppButtonStyle'>AboutMe</button>
        <button onClick={SkillClick} className='AppButtonStyle'>Skill</button>
        <button onClick={ProjectClick} className='AppButtonStyle'>AboutMe</button>
        <button onClick={LinkClick} className='AppButtonStyle'>AboutMe</button>
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

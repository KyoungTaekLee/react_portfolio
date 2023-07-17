import AboutMe from './components/aboutMe'
import Skill from './components/skill'
import Project from './components/project'
import ContactMe from './components/contactMe'
import './App.css'
import React, { useRef, useEffect, useState, Component } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';

function App() {
  const targetTop = useRef(null);
  const targetAboutMe = useRef(null);
  const targetSkill = useRef(null);
  const targetProject = useRef(null);
  const targetContactMe = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event) => {
    // 마우스 휠을 아래로 스크롤할 때마다 페이지가 100vh씩 이동하도록 처리
    if (event.deltaY > 0) {
      const windowHeight = window.innerHeight;
      scroll.scrollMore(windowHeight);
    } else if (event.deltaY < 0) {
      const windowHeight = window.innerHeight;
      scroll.scrollMore(-windowHeight);
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 등록
    window.addEventListener('wheel', handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 제거
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

   const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='App' ref={targetTop}>
      <div className='AppHeader' >
        Port Folio
      </div>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <span class="text">Scroll down</span>
      <div className='AppButtonSet'>
        <button onClick={() => scrollToRef(targetTop)} className='AppButtonStyle'>Top</button>
        <button onClick={() => scrollToRef(targetAboutMe)} className='AppButtonStyle'>AboutMe</button>
        <button onClick={() => scrollToRef(targetSkill)} className='AppButtonStyle'>Skill</button>
        <button onClick={() => scrollToRef(targetProject)} className='AppButtonStyle'>Project</button>
        <button onClick={() => scrollToRef(targetContactMe)} className='AppButtonStyle'>ContactMe</button>
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

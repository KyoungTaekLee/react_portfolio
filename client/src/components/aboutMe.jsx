import React from "react";
import './../css/components.css'

function AboutComponent(props) {
  return (
    <div className="aboutMe">
      <div className="aboutMeHeader">
        About Me
      </div>
      <div className='aboutMeFooter'>
        <div className="aboutMeFooterIntro">
        안녕하세요 ! 열정을 가지고 해결할 때 까지 열심히하는 개발자 이경택입니다 ! 
        </div>
        <div className="aboutMeFooterSkill">● Language : HTML, JAVA, JS, TS, PYTHON</div>
        <div className="aboutMeFooterSkill">● FrameWork : REACT, NODEJS, NESTJS, FLASK</div>
        <div className="aboutMeFooterSkill">● DataBase : MYSQL, MONGODB</div>
        <div className="aboutMeFooterSkill">● Cloud : FIREBASE</div>
      </div>
    </div>
  )
}

export default AboutComponent;
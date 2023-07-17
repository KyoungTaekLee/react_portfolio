import React from "react";
import './../css/components.css'

function AboutComponent(props) {
  return (
    <div className="aboutMe">
      <div className="aboutMeHeader">
        About Me
      </div>
      <div className='aboutMeFooter'>
        <div className="aboutMeFooterSectionOne">
          <img src={require("./../img/photo.jpg")} className="imgSize" />
        </div>
        <div className="aboutMeFooterSectionTwo">
          <div className="aboutMeFooterIntro">
            안녕하세요 ! 열정을 가지고 해결할 때 까지 열심히하는 개발자 이경택입니다 !
          </div>
          <div className="aboutMeFooterSkill">● 이름 : 이경택</div>
          <div className="aboutMeFooterSkill">● 생년월일 : 1998.03.02</div>
          <div className="aboutMeFooterSkill">● 연락처 : 010-4426-1138</div>
          <div className="aboutMeFooterSkill">● 자격증 : </div>
          <div className="aboutMeFooterSkill">● 이메일 : dlrudxor0302@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent;
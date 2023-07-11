import React from "react";
import './../css/components.css'

function AboutComponent(props) {
  return (
    <div className="aboutMe">
      <div className="aboutMeHeader">
        <h1>About Me</h1>
      </div>
      <div className='aboutMeFooter'>
        <h2>직업은 개발자 !</h2>
      </div>
    </div>
  )
}

export default AboutComponent;
import React from "react";
import './../css/components.css'

function ProjectComponent(props) {
  return (
    <div className="project">
      <div className="projectHeader">
        <h1>Project</h1>
      </div>
      <div className='projectFooter'>
        <h2>직업은 개발자 !</h2>
      </div>
    </div>
  )
}

export default ProjectComponent;
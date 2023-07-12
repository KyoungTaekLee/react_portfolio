import React from "react";
import './../css/components.css'

function ProjectComponent(props) {
  return (
    <div className="project">
      <div className="projectHeader">
        Project
      </div>
      <div className='projectFooter'>
        <div className="projectFooterImgOne">
          <img src={require("./../img/projectC.png")} alt="" className="projectFooterImgOneSize" />
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent;
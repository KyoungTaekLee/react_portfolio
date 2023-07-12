import React from "react";
import './../css/components.css'

function ProjectComponent(props) {
  return (
    <div className="project">
      <div className="projectHeader">
        Project
      </div>
      <div className='projectFooter'>
        <div className="projectFooterImg">
          <img src={require("./../img/projectC.png")} className="projectFooterImgSize" />
          <div className="projectFooterImgContent">
            ● 프로젝트 명 : 요너두<br></br>
            ● 주요 역할 : 바닐라 JS Layout, Mysql 테이블 구성, CRUD기능, 서버 라우터 작업<br></br>
            ● 사용 기술 : JavaScript, Node.JS, Mysql<br></br>
            ● GitHub : https://github.com/KyoungTaekLee/KDT-2-Project-C-1
          </div>
        </div>
        <div className="projectFooterImg">
          <img src={require("./../img/projectA.png")} className="projectFooterImgSize" />
          <div className="projectFooterImgContent">
            하이
            하이이
          </div>
        </div>
        <div className="projectFooterImg">
          <img src={require("./../img/projectB.png")} className="projectFooterImgSize" />
          <div className="projectFooterImgContent">
            하이
            하이이
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent;
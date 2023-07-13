import React from "react";
import './../css/components.css'

function ProjectComponent(props) {
  return (
    <div className="project">
      <div className="projectHeader">
        Project
      </div>
      <div className='projectFooter'>
        <div className="projectFooterImgSet">
          <div className="projectFooterImg">
            <img src={require("./../img/projectC.png")} className="imgSize" />
          </div>
          <div className="projectFooterImgContent">
            ● 프로젝트 명 : 요너두<br></br>
            ● 주요 역할 : 바닐라 JS Layout, Mysql 테이블 구성, CRUD기능, 서버 라우터 작업<br></br>
            ● 사용 기술 : JavaScript, Node.JS, Mysql<br></br>
            <a href="https://github.com/KyoungTaekLee/KDT-2-Project-C-1" className="no-underline">
              ● GitHub
            </a>
          </div>
        </div>
      

        <div className="projectFooterImgSet">
          <div className="projectFooterImg">
            <img src={require("./../img/projectA.png")} className="imgSize" />
          </div>
          <div className="projectFooterImgContent">
            ● 프로젝트 명 : Chicken Stock<br></br>
            ● 주요 역할 : 회원 가입 레이아웃 및 유효성 검사 후 DB 저장, 주식 구매 시 데이터 최신 화 작업<br></br>
            ● 사용 기술 : React-Native, Flask, MongoDB<br></br>
            <a href="https://github.com/KyoungTaekLee/KDT-2-Project-B-4" className="no-underline">
              ● GitHub
            </a>
          </div>
        </div>

        <div className="projectFooterImgSet">
          <div className="projectFooterImg">
            <img src={require("./../img/projectB.png")} className="imgSize" />
          </div>
          <div className="projectFooterImgContent">
            ● 프로젝트 명 : BTS<br></br>
            ● 주요 역할 : 공공 데이터 api 가공 및 socket 통신을 통한 실시간 api요청 데이터 처리<br></br>
            ● 사용 기술 : React, NestJS, MongoDB<br></br>
            <a href="https://github.com/KyoungTaekLee/KDT-2-Project-A-3" className="no-underline">
              ● GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent;
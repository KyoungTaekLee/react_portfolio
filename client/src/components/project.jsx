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
            <img src={require("./../img/projectC.png")} className="imgSizeProject" />
          </div>
          <div className="projectFooterImgContent">
            ● 프로젝트 명 : 요너두<br></br>
            ● 프로젝트 목적 : 요리 초보자들을 위한 레시피 가이드<br></br>
            ● 주요 역할 : 바닐라 JS Layout, Mysql 테이블 구성, CRUD기능, 서버 라우터 작업<br></br>
            ● 개발 스택 : JavaScript, Node.JS, Mysql<br></br>
            <a href="https://github.com/KyoungTaekLee/KDT-2-Project-C-1" className="no-underline">
              ● GitHub
            </a>
          </div>
        </div>
      

        <div className="projectFooterImgSet">
          <div className="projectFooterImg">
            <img src={require("./../img/projectA.png")} className="imgSizeProject" />
          </div>
          <div className="projectFooterImgContent">
            ● 프로젝트 명 : Chicken Stock<br></br>
            ● 프로젝트 목적 : 사용자 맞춤형 주식 추천 및 모의 투자 서비스<br></br>
            ● 주요 역할 : 회원 가입 레이아웃 및 유효성 검사 후 DB 저장, 주식 구매 시 데이터 최신 화 작업<br></br>
            ● 개발 스택 : React-Native, Flask, MongoDB<br></br>
            <a href="https://github.com/KyoungTaekLee/KDT-2-Project-B-4" className="no-underline">
              ● GitHub
            </a>
          </div>
        </div>

        <div className="projectFooterImgSet">
          <div className="projectFooterImg">
            <img src={require("./../img/projectB.png")} className="imgSizeProject" />
          </div>
          <div className="projectFooterImgContent">
            ● 프로젝트 명 : BTS(Bus Tracker Service)<br></br>
            ● 프로젝트 목적 : 요리 초보자들을 위한 레시피 가이드<br></br>
            ● 주요 역할 : 공공 데이터 api 가공 및 socket 통신을 통한 실시간 api요청 데이터 처리<br></br>
            ● 개발 스택 : React, NestJS, MongoDB<br></br>
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
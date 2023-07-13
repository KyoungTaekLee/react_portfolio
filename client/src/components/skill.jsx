import React from "react";
import './../css/components.css'

function AboutComponent(props) {
  return (
    <div className="skill">
      <div className="skillHeader">
        Skill
      </div>
      <div className='skillFooter'>
        <div className="skillFooterImgSet">
          <div className="skillFooterImgName">
            Language
          </div>
          <div className="skillFooterImgLanguage">
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/html.png")} className="imgSize" />
            </div>
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/java.png")} className="imgSize" />
            </div>
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/javascript.png")} className="imgSize" />
            </div>
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/typescript.png")} className="imgSize" />
            </div>
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/python.png")} className="imgSize" />
            </div>
          </div>
        </div>
        <div className="skillFooterImgSet">
          <div className="skillFooterImgName">
            FrameWork
          </div>
          <div className="skillFooterImgFrameWork">
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/react.png")} className="imgSize" />
            </div>
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/nodejs.png")} className="imgSize" />
            </div>
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/nestjs.png")} className="imgSize" />
            </div>
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/flask.png")} className="imgSize" />
            </div>
          </div>
        </div>
        <div className="skillFooterImgSet">
          <div className="skillFooterImgName">
            DataBase
          </div>
          <div className="skillFooterImgDataBase">
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/mysql.png")} className="imgSize" />
            </div>
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/mongodb.png")} className="imgSize" />
            </div>
          </div>
        </div>
        <div className="skillFooterImgSet">
          <div className="skillFooterImgName">
            Cloud
          </div>
          <div className="skillFooterImgCloud">
            <div className="skillFooterImgLanguageSize">
              <img src={require("./../img/firebase.png")} className="imgSize" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent;
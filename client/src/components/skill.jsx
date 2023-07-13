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
            <img src={require("./../img/Language.png")} className="imgSize" />
          </div>
        </div>
        <div className="skillFooterImgSet">
          <div className="skillFooterImgName">
            FrameWork
          </div>
          <div className="skillFooterImgFrameWork">
            <img src={require("./../img/FrameWork.png")} className="imgSize" />
          </div>
        </div>
        <div className="skillFooterImgSet">
          <div className="skillFooterImgName">
            DataBase
          </div>
          <div className="skillFooterImgDataBase">
            <img src={require("./../img/DataBase.png")} className="imgSize" />
          </div>
        </div>
        <div className="skillFooterImgSet">
          <div className="skillFooterImgName">
            Cloud
          </div>
          <div className="skillFooterImgCloud">
            <img src={require("./../img/Cloud.png")} className="imgSize" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent;
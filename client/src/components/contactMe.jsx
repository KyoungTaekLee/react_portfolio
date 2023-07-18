import React from 'react';
import './../css/components.css';

function ContactMecomponent(props) {
  return (
    <div className='contactMe'>
      <div className='contactMeHeader font'>
        Contact Me
      </div>
      <div className='contactMeFooter'>
        <div className='contactMeFooterSet'>
          <div className='contactMeFooterSetImg'>
            <a href="https://github.com/KyoungTaekLee" className='no-underline'>
              <img src={require("./../img/GitHubDark.png")} className="imgSize" />
            </a>
          </div>

          <div className='contactMeFooterSetImg'>
            <a href="https://www.notion.so/KDT_-af08b1222156412394307889ebee57fc" className='no-underline'>
              <img src={require("./../img/notiondark.png")} className="imgSize" />
            </a>
          </div>
          
          <div className='contactMeFooterSetImg'>
            <a href="https://blog.naver.com/developer_taek" className='no-underline'>
              <img src={require("./../img/Naver.png")} className="imgSize" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactMecomponent;
import React from 'react';
import './../css/components.css';

function LinkComponent(props) {
  return (
    <div className='link'>
      <div className='linkHeader'>
        Link
      </div>
      <div className='linkFooter'>
        <a href="https://github.com/KyoungTaekLee" className='no-underline'>
        <img src={require("./../img/GitHub.png")} className="imgSize" />
        </a>
        
        <a href="https://blog.naver.com/developer_taek" className='no-underline'>
        <img src={require("./../img/Naver.png")} className="imgSize" />
        </a>
      </div>
    </div>
  )
}

export default LinkComponent;
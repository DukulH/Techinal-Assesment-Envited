import React from 'react'
function CardCommonItem(props) {
  return (
     <div className='d-flex align-items-center justify-content-start mt-3'>
            <div className='w-25'><h1 className='ms-4'>{props.icon}</h1></div>
            <div className='w-50'>
              <p style={{color:'#240D57', fontWeight:'bold'}}>{props.firstText} <br/><span style={{color:'#4F4F4F', fontWeight:'normal'}}>{props.secondText}</span><span style={{color:'#4F4F4F',fontWeight:'bold'}}>{props.thirdText}</span></p>
            </div>
            <div className='w-25'><p className='ms-5' style={{alignContent:"end"}}>{props.arrowIcon}</p></div>
          </div>
  
  );
}

export default CardCommonItem;

import {useState} from 'react';

export const Contact=function(){
  const [contactSize, setContactSize]=useState([120,200]);
  //Format should be as such: [width, height]

  return(
    <div 
      id='contact' 
      className='desktopBox'          
      onMouseEnter={()=>{
        setContactSize([600,300])
      }}

      onMouseLeave={()=>{
        setContactSize([120,200])
      }}
            
      style={{
        minWidth: contactSize[0],
        height: contactSize[1],
      }}>
        Contact
    </div>
  );
};
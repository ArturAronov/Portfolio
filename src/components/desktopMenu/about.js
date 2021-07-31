import {useState} from 'react';

export const About=function(){
  const [aboutSize, setAboutSize]=useState([120,200]);
  //Format should be as such: [width, height]

  return(
    <div 
      id='about' 
      className='desktopBox'          
      onMouseEnter={()=>{
        setAboutSize([600,300])
      }}

      onMouseLeave={()=>{
        setAboutSize([120,200])
      }}
            
      style={{
        minWidth: aboutSize[0],
        height: aboutSize[1],
      }}>
        About
    </div>
  );
};
import {useState} from 'react';

export const Projects=function(){
  const [projectsSize, setProjectsSize]=useState([120,200]);
  //Format should be as such: [width, height]

  return(
    <div 
      id='projects' 
      className='desktopBox'          
      onMouseEnter={()=>{
        setProjectsSize([600,300])
      }}

      onMouseLeave={()=>{
        setProjectsSize([120,200])
      }}
            
      style={{
        minWidth: projectsSize[0],
        height: projectsSize[1],
      }}>
        Projects
    </div>
  );
};
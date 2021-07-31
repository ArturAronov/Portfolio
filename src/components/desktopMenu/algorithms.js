import {useState} from 'react';

export const Algorithms=function(){  
  const [algorithmsSize, setAlgorithmsSize]=useState([120,200]);
  //Format should be as such: [width, height]

  return(
    <div 
      id='algorithms' 
      className='desktopBox'          
      onMouseEnter={()=>{
        setAlgorithmsSize([600,300])
      }}

      onMouseLeave={()=>{
        setAlgorithmsSize([120,200])
      }}
            
      style={{
        minWidth: algorithmsSize[0],
        height: algorithmsSize[1],
      }}>
        Algorithms
    </div>
  );
};
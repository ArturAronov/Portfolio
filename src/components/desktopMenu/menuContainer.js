import {useState} from 'react';
import Video1 from '../../vids/1.mp4'
import Video2 from '../../vids/2.mp4'
import {test, lol} from './../../utils/test'
/* 
import {Algorithms} from './algorithms';
import {About} from './about';
import {Contact} from './contact';
import {Projects} from './projects';
 */
import {Vid1} from './vid1';
import {Vid2} from './vid2';

export const MenuContainer=function(){
  const [headerMenu, setHeaderMenu]=useState('none');
  const [bodyMenu, setBodyMenu]=useState('flex');

  const [aboutSize, setAboutSize]=useState([120,200]);
  const [projectsSize, setProjectsSize]=useState([120, 200]);
  const [algorithmsSize, setAlgorithmsSize]=useState([120,200]);
  const [contactSize, setContactSize]=useState([120, 200]);
  const [videoDisplay, setVideoDisplay]=useState('');

  const [aboutOrder, setAboutOrder]=useState(1);
  const [projectsOrder, setProjectsOrder]=useState(3);
  const [algorithmsOrder, setAlgorithmsOrder]=useState(4);
  const [contactOrder, setContactOrder]=useState(6);



  //Format should be as such: [width, height]

  return(
    <div id='menuContainer'>
      <div id='desktopMenu'>
        <div 
          id='about' 
          className='desktopBox' 
          onClick={()=>{
            test()
            console.log(lol)
          }
          }
          
          onMouseEnter={()=>{
            setAboutSize([600,300])
            setVideoDisplay('none')
          }}
          onMouseLeave={()=>{
            setAboutSize([120,200])
            setVideoDisplay('')

          }}
            
          style={{
            minWidth: aboutSize[0],
            height: aboutSize[1],
            order: aboutOrder
          }}>
            {console.log(test())}
          About
        </div>

        <div 
          className='vidContainer' 
          style={{
            display: videoDisplay,
            order: 2
          }}
        >
          <video 
            id='v1'
            className='video'
            autoPlay 
            muted 
            loop src={Video1} 
            type='video/mp4'
          />
        </div>

        <div 
          id='projects' 
          className='desktopBox' 
          onMouseEnter={()=>{
            setProjectsSize([600,300])
            setVideoDisplay('none')
            setProjectsOrder(1)
            setAboutOrder(3)
          }}
          onMouseLeave={()=>{
            setProjectsSize([120,200])
            setVideoDisplay('')
            setProjectsOrder(3)
            setAboutOrder(1)
          }}
            
          style={{
            minWidth: projectsSize[0],
            height: projectsSize[1],
            order: projectsOrder,
          }}>
          Projects 
        </div>

        <div 
          id='algorithms' 
          className='desktopBox' 
          onMouseEnter={()=>{
            setAlgorithmsSize([600,300])
            setVideoDisplay('none')
            setAlgorithmsOrder(6)
            setContactOrder(4)

          }}
          onMouseLeave={()=>{
            setAlgorithmsSize([120,200])
            setVideoDisplay('')
            setAlgorithmsOrder(4)
            setContactOrder(6)
          }}
          style={{
            minWidth: algorithmsSize[0],
            height: algorithmsSize[1],
            order: algorithmsOrder,
          }}>
          Algorithms
        </div>

        <div 
          className='vidContainer' 
          style={{
            display: videoDisplay,
            order: 5
          }}
        >
          <video 
            id='v2'
            className='video'
            autoPlay 
            muted 
            loop src={Video2} 
            type='video/mp4'
          />
        </div>

        <div 
          id='contact' 
          className='desktopBox' 
          onMouseEnter={()=>{
            setContactSize([600,300])
            setVideoDisplay('none')

          }}
          onMouseLeave={()=>{
            setContactSize([120,200])
            setVideoDisplay('')

          }}
          style={{
            minWidth: contactSize[0],
            height: contactSize[1],
            order: contactOrder
          }}>
          Contact
        </div>

      </div>
    </div>
  )
}
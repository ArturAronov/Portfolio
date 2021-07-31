import {useState} from 'react';

import {Algorithms} from './desktopMenu/algorithms';
import {About} from './desktopMenu/about';
import {Contact} from './desktopMenu/contact';
import {Projects} from './desktopMenu/projects';


import {Vid1} from './desktopMenu/vid1';
import {Vid2} from './desktopMenu/vid2';

import {Heading} from './header/heading';
import {HeaderMenu} from './header/headerMenu';

import {toggleColors, toggleIcons} from './../utils/headerToggles';
import {darkHeader, lightHeader, lightTxt, darkTxt, darkBody, lightBody} from './../utils/colors';

import {MoonFill, Sun} from 'react-bootstrap-icons';



export const App=function(){
  const [background, setBackground]=useState(darkHeader);
  const [text, setText]=useState(lightTxt);
  const [body, setBody]=useState(darkBody);
  const [sunDisplay, setSunDisplay]=useState('flex');
  const [moonDisplay, setMoonDisplay]=useState('none');

  const [aboutOrder, setAboutOrder]=useState(1);
  const [projectsOrder, setProjectsOrder]=useState(3);
  const [algorithmsOrder, setAlgorithmsOrder]=useState(4);
  const [contactOrder, setContactOrder]=useState(6);

  const [videoDisplay, setVideoDisplay]=useState('');

  const [screenWidth, setScreenWidth]=useState(window.innerWidth);
  const [screenHeight, setScreenHeight]=useState(window.innerHeight);

  const [test, setTest]=useState('translateY(0px)')

  

  return(
    <div 
      id='desktopContainer'
      style={{
        backgroundColor: body,
        color: text
      }}
      >
      <div 
        id='desktopHeading' 
        style={{
          backgroundColor: background, 
          color: text
        }}>
        <div id='header'>
          <Heading/>
          <div 
            className='toggle'
            onClick={()=>{
              toggleColors(background, setBackground, darkHeader, lightHeader);
              toggleColors(text, setText, darkTxt, lightTxt);
              toggleColors(body, setBody, lightBody, darkBody);
              toggleIcons(sunDisplay, setSunDisplay, 'flex', 'none')
              toggleIcons(moonDisplay, setMoonDisplay, 'flex', 'none')
            }}>
              <Sun size={20} style={{display: sunDisplay}}/>
              <MoonFill size={20} style={{display: moonDisplay}}/>
          </div>
        </div>
        <div>
          <HeaderMenu/>
        </div>
        
      </div>
      <div>

      </div>
      <div id='desktopMenu'>
        <div id='menuContainer'>
          <div 
            style={{order: aboutOrder}}
            onMouseEnter={()=>{setVideoDisplay('none')}}
            onMouseLeave={()=>{setVideoDisplay('')}}
          >
            <About/>
          </div>
          
          <div 
            style={{
              order: 2,
              display: videoDisplay
            }}
          >
            <Vid1/> 
          </div>

          <div 
            style={{order: projectsOrder}}
            onMouseEnter={()=>{
              setVideoDisplay('none')
              setProjectsOrder(1)
              setAboutOrder(3)
            }}
            onMouseLeave={()=>{
              setVideoDisplay('')
              setProjectsOrder(3)
              setAboutOrder(1)
            }}
              
          >
            <Projects/>
          </div>
         
          <div 
            style={{order: algorithmsOrder}}
            onMouseEnter={()=>{
              setVideoDisplay('none')
              setAlgorithmsOrder(6)
              setContactOrder(4)
            }}
            onMouseLeave={()=>{
              setVideoDisplay('')
              setAlgorithmsOrder(4)
              setContactOrder(6)
            }}
          >
            <Algorithms/>
          </div>
          
          
          <div
            style={{
              order: 5,
              display: videoDisplay,
            }}
          >
            <Vid2/>
          </div>
          
          <div 
            style={{order: contactOrder}}
            onMouseEnter={()=>{setVideoDisplay('none')}}
            onMouseLeave={()=>{setVideoDisplay('')}}
          >
            < Contact/>
          </div>
          </div>
        </div>
      </div>

  );
};
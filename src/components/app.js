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

import {MoonFill} from 'react-bootstrap-icons';
import {Sun} from 'react-bootstrap-icons';



export const App=function(){
  const [background, setBackground]=useState(darkHeader);
  const [text, setText]=useState(lightTxt);
  const [body, setBody]=useState(darkBody);
  const [sunDisplay, setSunDisplay]=useState('flex');
  const [moonDisplay, setMoonDisplay]=useState('none');

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
        <HeaderMenu/>
      </div>
      <div id='menuContainer'>
        <div id='desktopMenu'>
          <About/>
          <Vid1/>
          <Algorithms/>
          <Projects/>
          <Vid2/>
          <Contact/>
        </div>
      </div>
    </div>
  );
};
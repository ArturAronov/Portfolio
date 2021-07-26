import {useState} from 'react';

import {Algorithms} from './desktopMenu/algorithms';
import {About} from './desktopMenu/about';
import {Contact} from './desktopMenu/contact';
import {Projects} from './desktopMenu/projects';

import {Vid1} from './desktopMenu/vid1';
import {Vid2} from './desktopMenu/vid2';

import {Heading} from './header/heading';
import {Icons} from './header/icons';
import {HeaderMenu} from './header/headerMenu';

import {changeBackGround, changeText, changeBody} from './../utils/darkLight';
import {darkHeader, lightHeader, lightTxt, darkTxt, darkBody, lightBody} from './../utils/colors'



export const App=function(){
  const [background, setBackground]=useState(darkHeader);
const [text, setText]=useState(lightTxt);
const [body, setBody]=useState(darkBody);
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
            changeBackGround(background, setBackground, darkHeader, lightHeader);
            changeText(text, setText, darkTxt, lightTxt);
            changeBody(body, setBody, lightBody, darkBody)
          }}>
            <Icons/>
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
import {Algorithms} from './desktopMenu/algorithms';
import {About} from './desktopMenu/about';
import {Contact} from './desktopMenu/contact';
import {Projects} from './desktopMenu/projects';

import {Vid1} from './desktopMenu/vid1';
import {Vid2} from './desktopMenu/vid2';

import {Heading} from './header/heading';
import {Icons} from './header/icons';
import {HeaderMenu} from './header/headerMenu';

export const App=function(){
  return(
    <div id='desktopContainer'>
      <div id='desktopHeading'>
        <div id='header'>
          <Heading/>
          <Icons/>
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
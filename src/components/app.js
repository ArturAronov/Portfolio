import {Algorithms} from './algorithms';
import {About} from './about';
import {Contact} from './contact';
import {Projects} from './projects';
import {Heading} from './heading';
import {Vid1} from './vid1';
import {Vid2} from './vid2';

export const App=function(){
  return(
    <div id='container'>
      <div id='desktopHeading'>
        <Heading/>
      </div>
      <div id='desktopMenu'>
      
        <About/>
        <Vid1/>
        <Algorithms/>
        <Projects/>
        <Vid2/>
        <Contact/>
      </div>
    </div>
  );
};
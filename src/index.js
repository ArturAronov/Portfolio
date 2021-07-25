import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app';
import './components/css/index.css';
import './components/css/desktopMenu.css';
import './components/css/video.css';
import './components/css/header.css';

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
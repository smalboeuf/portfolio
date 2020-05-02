import React, { useState } from 'react';
import './App.scss';

import { Link, animateScroll as scroll } from "react-scroll";

import Sidebar from "../Sidebar/Sidebar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Skills from "../Skills/Skills";
import WebProjects from "../WebProjects/WebProjects";
import GameProjects from "../GameProjects/GameProjects";

const WELCOME = 'WELCOME';
const ABOUT = 'ABOUT';
const SKILLS = 'SKILLS';
const WEB_PROJECTS = 'WEB_PROJECTS';
const GAME_PROJECTS = 'GAME_PROJECTS';
const ALL_ONE = 'ALL_ONE';



function App() {

  const [state, setState] = useState({
    view: ALL_ONE
  });


  return (
    <div className="App">
      <Sidebar />
      <MobileNavbar />
      {state.view === ALL_ONE && (
        <div className='mainProgram'>
          <Welcome />
          <About />
          <Skills />
          <WebProjects />
          <GameProjects />
        </div>
      )}

    </div>
  );
}

export default App;

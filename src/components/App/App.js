import React, { useState } from 'react';
import './App.scss';

import Sidebar from "../Sidebar/Sidebar";
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


  const changeView = (viewName) => {
    setState({
      ...state,
      view: viewName
    })
  }


  return (
    <div className="App">

      <Sidebar
        onWelcome={() => changeView(WELCOME)}
        onAbout={() => changeView(ABOUT)}
        onSkills={() => changeView(SKILLS)}
        onWebProjects={() => {
          changeView(WEB_PROJECTS)
        }}
        onGameProjects={() => changeView(GAME_PROJECTS)} />

      {state.view === WELCOME && (
        <Welcome />
      )}
      {state.view === ABOUT && (
        <About />
      )}
      {state.view === SKILLS && (
        <Skills />
      )}
      {state.view === WEB_PROJECTS && (
        <WebProjects />
      )}
      {state.view === GAME_PROJECTS && (
        <GameProjects />
      )}
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

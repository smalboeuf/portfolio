import React, { useState } from 'react';
import './App.scss';

import Sidebar from "../Sidebar/Sidebar";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";

const WELCOME = 'WELCOME';
const ABOUT = 'ABOUT';
const PROJECTS = 'PROJECTS';
const SKILLS = 'SKILLS';
const RESUME = 'RESUME';





function App() {

  const [state, setState] = useState({
    view: WELCOME
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
        onProjects={() => changeView(PROJECTS)}
        onSkills={() => changeView(SKILLS)
        } />

      {state.view === WELCOME && (
        <Welcome />
      )}


    </div>
  );
}

export default App;

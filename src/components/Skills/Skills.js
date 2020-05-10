import React from "react";
import "./Skills.scss";

export default function Skills(props) {
  return (
    <div className="skillsPage" id="skills">
      <h2>Skills</h2>
      <div className="skillsBox">
        <div className="category">
          <h4>Languages</h4>
          <p>JavaScript</p>
          <p>C#</p>
          <p>Java</p>
          <p>Ruby</p>
          <p>CSS</p>
          <p>SQL</p>
          <p>HTML5</p>
        </div>

        <div className="category">
          <h4>Frameworks/Libraries</h4>
          <p>ReactJS</p>
          <p>NodeJS</p>
          <p>Express</p>
          <p>Ruby on Rails</p>
          <p>JQuery</p>
          <p>Ajax</p>
          <p>Axios</p>
          <p>Active Record</p>
          <p>SASS</p>
        </div>

        <div className="category">
          <h4>Databases</h4>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          <p>GraphQL</p>
        </div>
      </div>
    </div>
  );
}

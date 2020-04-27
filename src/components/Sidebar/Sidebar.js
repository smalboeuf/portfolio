import React from "react";
import './Sidebar.scss';

export default function Sidebar(props) {

  return (
    <section className="sidebar">
      <img className="mainPic" src="/images/profilePic.jpg"></img>
      <div className="sidebarDescription">
        <h3>Sheldon Malboeuf</h3>
        <p><a href="mailto:smalboeuf01@gmail.com?Subject=Inquiry" target="_top">smalboeuf01@gmail.com</a></p>
      </div>
      <div className="social"></div>
    </section>
  );

}
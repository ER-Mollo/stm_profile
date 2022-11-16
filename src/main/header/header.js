// import logo from './logo.svg';
import React from "react";
import './header.scss'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div className="main">
      <div className="info">
        <div className="info_content">
            <img src={logo}/>
        </div>
        <div className="info_buttons">
            <button className="button">About Me</button><br/>
            <button className="button">View Profile</button>
        </div>
      </div>
    </div>

  );
}

export default Header;

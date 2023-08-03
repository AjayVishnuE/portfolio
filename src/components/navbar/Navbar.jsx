import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/av-logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
            <ul className="navbar-ul_container">
              <li><a href="#about">About</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#achievements">Achievments</a></li>
              <li><a href="#resume">See My Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">About</a></p>
            <p><a href="#wgpt3">Certifications</a></p>
            <p><a href="#possibility">Achievments</a></p>
            <p><a href="#blog">See My Resume</a></p>
            <p><a href="#features">Contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
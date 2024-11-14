import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../assets/style/header.scss';
import logo from '../assets/images/site-logo.png';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <>
      <header className={`top-header ${isOpen ? "open" : ""}`}>

        <button className={`menu-btn ${isOpen ? "close" : ""}`} onClick={toggleMenu}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </button>

        <nav className="top-nav">
          <NavLink to={'/'}>
            <img src={logo} alt="logo" className="site-logo" onClick={closeMenu}/>
          </NavLink>
          <ul className={`site-links ${isOpen ? "open" : ""}`}>
            <li className="link-item">
              <NavLink to={'/'} exact='true' className="site-link nav-txt lt-txt" activeclassname="active" onClick={closeMenu}>hem</NavLink>
            </li>
            <li className="link-item">
              <NavLink to={'/tjanster'} className="site-link nav-txt lt-txt" activeclassname="active" onClick={closeMenu}>tjänster</NavLink>
            </li>
            <li className="link-item">
              <NavLink to={'/om-oss'} className="site-link nav-txt lt-txt" activeclassname="active" onClick={closeMenu}>om oss</NavLink>
            </li>
            <li className="link-item">
              <NavLink to={'/kontakt'} className="site-link nav-txt lt-txt" activeclassname="active" onClick={closeMenu}>kontakt</NavLink>
            </li>
            <li className="link-item ">
              <NavLink to={'/felanmalan'}>
                <button className="m-btn prim" onClick={closeMenu}>felanmälan</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
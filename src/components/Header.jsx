import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../assets/style/header.scss';
import logo from '../assets/images/site-logo.png';
import { services } from "./services-page/ServiceSelections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(isDropdownOpen ? false : true);
    // setIsDropdownOpen(true);
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  }

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
            <li className="link-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown} onClick={toggleDropdown}>
              <NavLink to={'/tjanster'} className="site-link nav-txt lt-txt" activeclassname="active" onClick={closeMenu}>
                tjänster
              </NavLink>
              <FontAwesomeIcon icon={faChevronDown} className="small-arrow" />
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {services.map((service) => (
                     <li key={service.id}>
                      <Link to={`/tjanster/${service.id}`}><h3 className="nav-txt dk-txt" onClick={toggleMenu}>{service.name}</h3></Link>
                     </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="link-item">
              <NavLink to={'/bostader-och-lokaler'} className="site-link nav-txt lt-txt" activeclassname="active" onClick={closeMenu}>ledigt</NavLink>
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
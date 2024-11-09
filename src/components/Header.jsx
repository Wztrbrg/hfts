import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/style/header.scss';
import logo from '../assets/images/site-logo.png';

const Header = () => {
  return (
    <>
      <header className={"top-header"}>
        <nav className="top-nav">
          <NavLink to={'/'}>
            <img src={logo} alt="logo" className="site-logo" />
          </NavLink>
          <ul className="site-links">
            <li className="link-item">
              <NavLink to={'/'} exact='true' className="site-link nav-txt lt-txt" activeclassname="active">hem</NavLink>
            </li>
            <li className="link-item">
              <NavLink to={'/tjanster'} className="site-link nav-txt lt-txt" activeclassname="active">tjänster</NavLink>
            </li>
            {/* <li className="link-item">
              <NavLink to={'/bostader-och-lokaler'} className="site-link nav-txt lt-txt" activeclassname="active">lediga bostäder & lokaler</NavLink>
            </li> */}
            <li className="link-item">
              <NavLink to={'/om-oss'} className="site-link nav-txt lt-txt" activeclassname="active">om oss</NavLink>
            </li>
            <li className="link-item">
              <NavLink to={'/kontakt'} className="site-link nav-txt lt-txt" activeclassname="active">kontakt</NavLink>
            </li>
            <li className="link-item ">
              <NavLink to={'/felanmalan'}>
                <button className="m-btn prim">felanmälan</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
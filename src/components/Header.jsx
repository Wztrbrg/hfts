import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/header.scss';
import logo from '../assets/images/site-logo.png';

const Header = () => {

  return (
    <>
      <header className="top-header">
        <nav className="top-nav">
          <Link to={'/'}>
            {/* <div className="site-logo"></div> */}
            <img src={logo} alt="logo" className="site-logo" />
          </Link>
          <ul className="site-links">
            <li className="link-item">
              <Link to={'/tjanster'} className="site-link nav-txt lt-txt">tjänster</Link>
            </li>
            <li className="link-item">
              <Link to={'/bostader-och-lokaler'} className="site-link nav-txt lt-txt">lediga bostäder & lokaler</Link>
            </li>
            <li className="link-item">
              <Link to={'/om-oss'} className="site-link nav-txt lt-txt">om oss</Link>
            </li>
            <li className="link-item">
              <Link to={'/kontakt'} className="site-link nav-txt lt-txt">kontakt</Link>
            </li>
            <li className="link-item ">
              <Link to={'/felanmalan'}>
                <button className="s-btn prim">felanmälan</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
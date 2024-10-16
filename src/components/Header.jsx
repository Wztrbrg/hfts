import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/header.scss';

const Header = () => {

  return (
    <>
      <header className="top-header">
        <nav className="top-nav">
          <div className="site-logo"></div>
          <ul className="site-links">
            <li className="link-item">
              <a href="#" className="site-link nav-txt lt-txt">tjänster</a>
            </li>
            <li className="link-item">
              <a href="#" className="site-link nav-txt lt-txt">lediga bostäder & lokaler</a>
            </li>
            <li className="link-item">
              <a href="#" className="site-link nav-txt lt-txt">om oss</a>
            </li>
            <li className="link-item">
              <a href="#" className="site-link nav-txt lt-txt">kontakt</a>
            </li>
            <li className="link-item ">
              <button className="s-btn prim">felanmälan</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
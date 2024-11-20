import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/footer.scss';
import logo from '../assets/images/site-logo.png';

const Footer = () => {

  return (
    <>
        <footer className="bottom-footer lt-txt">
            <div className="footer-content">
                <div className="footer-col">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="site-logo" />
                    </Link>
                </div>
                
                <div className="footer-col">
                    <h2 className="lf-h">NAVIGERA</h2>
                    
                    <ul className="lf-p">
                        <li>
                        <Link to={'/tjanster'} className="lt-txt">Tjänster</Link>
                        </li>
                        {/* <li>
                        <Link to={'/bostader-och-lokaler'} className="lt-txt">Lediga bostäder & lokaler</Link>
                        </li> */}
                        <li>
                        <Link to={'/om-oss'} className="lt-txt">Om oss</Link>
                        </li>
                        <li>
                        <Link to={'/kontakt'} className="lt-txt">Kontakt</Link>
                        </li>
                        <li>
                        <Link to={'/felanmalan'} className="lt-txt">Felanmälan</Link>
                        </li>
                    </ul>
                
                </div>
                <div className="footer-col">
                    <h2 className="lf-h">KONTAKTA OSS</h2>
                    <p className="lf-p">
                        Har du frågor? Kontakta oss gärna via e-post på <a href="mailto:info@hallbarservice.se">info@hallbarservice.se</a><br /> Eller ring oss på <a href="tel:+46720255360">072 025 53 60</a><br/>Du hittar oss på c/o R2 FASTIGHETER AB<br/>GREV TUREGATAN 13 B<br/>114 46 Stockholm<br/>Vi ser fram emot att höra från dig!
                    </p>
                </div>

            </div>

            <div className="copyright-text">
                <p className="lf-p">
                    © 2024 Hållbar Fastighetsservice Syd.
                </p>
            </div>

        </footer>
    </>
  )
}

export default Footer;
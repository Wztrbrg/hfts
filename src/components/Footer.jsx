import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/footer.scss';

const Footer = () => {

  return (
    <>
        <footer className="bottom-footer lt-txt">
            <div className="footer-content">
                
                <div className="footer-col">
                    <h2 className="lf-h">NAVIGERA</h2>
                    
                    <ul className="lf-p">
                        <li>
                        <Link to={'/tjanster'} className="lt-txt">Tjänster</Link>
                        </li>
                        <li>
                        <Link to={'/bostader-och-lokaler'} className="lt-txt">Lediga bostäder & lokaler</Link>
                        </li>
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
                    <h2 className="lf-h">GRYM HEADING</h2>
                    <p className="lf-p">
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Explicabo,
                        qui voluptates blanditiis
                    </p>
                </div>
                <div className="footer-col">
                    <h2 className="lf-h">KONTAKTA OSS</h2>
                    <p className="lf-p">
                        Har du frågor? Kontakta oss gärna via e-post på [email@example.com] eller ring oss på [123-456-7890]. Du hittar oss på [Gatuadress, Stad]. Vi ser fram emot att höra från dig!
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
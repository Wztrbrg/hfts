import '../../assets/style/home-page/hero-section.scss';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section-overlay bg-dk-overlay">
          <article className="hero-content">
            <h1 className="hero-heading h-h lt-txt">
              Välkommen till Hållbar <span className="pr-txt">Fastighetsservice Syd</span> 
            </h1>
            <p className="hero-subheading h-sub lt-txt">
              Hållbar fastighetsförvaltning som gör skillnad. Vi tar 
              hand om din fastighet med fokus på långsiktigt värde och 
              miljövänliga lösningar. Trygg, effektiv och klimatsmart 
              service för en grönare framtid.
            </p>
            <div className="hero-btn-container">
              <Link to={'/kontakt'}>
                <button className="l-btn acc">Kontakta Oss</button>
              </Link>
              <Link to={'/felanmalan'}>
                <button className="l-btn prim">Felanmälan</button>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default HeroSection;
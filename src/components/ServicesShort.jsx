import '../assets/style/services-short.scss';
import ServiceImage from '../assets/images/about.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServicesShort = () => {
  return (
    <section className="services-short-section">
      <div className="wave-edge"></div>
      <h1 className="services-short-heading l-h dk-txt">Våra hållbara tjänster</h1>
      <div className="services-short-content">
        <article className="services-short-card">
          <img 
            src={ServiceImage} 
            alt="bild som symboliser en tjänst som vi 
            tillhandahåller" 
            className='services-short-card-img'
          />
          <div className="text-container">
            <h3 className='lc-h dk-txt'>
              Fastighetsskötsel & Drift
              </h3>
            <p className="lc-p dk-txt">
              Vi tar hand om den dagliga skötseln av din 
              fastighet för att säkerställa att allt fungerar 
              smidigt och effektivt. Vårt team av erfarna 
              tekniker övervakar och underhåller viktiga system 
              som värme, ventilation och vatten, vilket 
              garanterar högsta möjliga standard och minskad 
              energiförbrukning. Genom regelbundna inspektioner 
              och proaktivt underhåll hjälper vi dig att 
              förebygga problem innan de uppstår, vilket sparar 
              tid och pengar samtidigt som vi bidrar till en 
              hållbar fastighetsdrift.
            </p>
            <Link to={'/bostader-och-lokaler'}>Läs mer <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </article>
        <article className="services-short-card">
          <img 
            src={ServiceImage} 
            alt="bild som symboliser en tjänst som vi 
            tillhandahåller" 
            className='services-short-card-img'
          />
          <div className="text-container">
            <h3 className='lc-h dk-txt'>
              Fastighetsförvaltning & Projektledning
            </h3>
            <p className="lc-p dk-txt">
              Vår tjänst inom fastighetsförvaltning och 
              projektledning är utformad för att maximera värdet 
              på din fastighet genom strategisk planering och 
              effektiv projektledning. Oavsett om du behöver 
              hjälp med budgetering, hyresgästanpassningar eller 
              större renoveringsprojekt, ser vi till att arbetet 
              utförs inom tidsramar och budget. Med vårt 
              hållbarhetsfokus säkerställer vi att alla projekt 
              drivs med miljövänliga metoder och energieffektiva 
              lösningar, vilket skapar långsiktiga vinster både 
              för din fastighet och miljön.
            </p>
            <Link to={'/bostader-och-lokaler'}>Läs mer <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ServicesShort;
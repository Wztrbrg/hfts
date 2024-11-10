import '../../assets/style/home-page/about-short.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutContent = () => {
  return (
    <>
      <section className="about-short-section">

        <div className='about-short-content'>
            <div className="image"></div>
            <div className="text-wrapper">
              <h3 className="l-tag acc-txt">
                Om Hållbar Fastighetsservice Syd
              </h3>
              <h1 className="l-h dk-txt">
                Din partner inom hållbar fastighets&shy;förvaltning
              </h1>
              <p className="l-p dk-txt">
                Välkommen till Hållbar Fastighetsservice Syd – ett fastighetsförvaltningsbolag där hållbarhet och kvalitet står i fokus. Vi arbetar för att erbjuda långsiktiga och miljömedvetna lösningar för fastighetsägare och bostadsrättsföreningar som vill bidra till ett mer hållbart samhälle.
              </p> 
              <Link to={'/om-oss'} >
                <h3 className='c-h acc-txt'>Läs mer <FontAwesomeIcon icon={faArrowRight} /></h3>
              </Link>  
            </div>
        </div>

      </section>
    </>
  )
}

export default AboutContent;
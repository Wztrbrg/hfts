import '../../assets/style/home-page/services-short.scss';
import ServiceImageFirst from '../../assets/images/service-img5.jpeg';
import ServiceImageSecond from '../../assets/images/service-img4.jpeg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { services } from '../services-page/ServiceSelections';

const ServicesShort = () => {
  return (
    <section className="services-short-section">
      <h1 className="services-short-heading l-h dk-txt">Här är några av våra hållbara tjänster</h1>
      <div className="services-short-content">
        {services.slice(0, 4).map((service) => (
          <article key={service.id} className='services-short-card'>
            <div className="services-short-img-container">
              <img 
                src={service.heroImage} 
                alt="Bild som symboliserar tjänst vi tillhandahåller"
                className='services-short-img'
              />
            </div>
            <div className="text-container">
              <h3 className='lc-h dk-txt'>
                {service.name}
              </h3>
              <p className="lc-p dk-txt">
                {service.description}
              </p>
              <Link to={`/tjanster/${service.id}`}>Läs mer <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
          </article>
        ))}
        <Link to={'/tjanster'}>
          <button className="l-btn acc">Visa alla tjänster <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </Link>
      </div>
    </section>
  )
}

export default ServicesShort;
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/home-page/testimonial-section.scss';
import CardSlider from './CardSlider';



const TestimonialSection = () => {


  return (
    <section className="testimonial-section">
      <div className="testimonial-section-content">
        <div className="bg-blur-blob left"></div>
        <div className="bg-blur-blob center"></div>
        <article className="testimonial-text">
          <h3 className='lc-h acc-txt'>kunden i fokus</h3>
          <h1 className="l-h dk-txt">vi satsar på hållbara relationer</h1>
          <p className="l-p dk-txt">
            Ta en titt på vad några av våra nöjda kunder har att säga om oss. Fortfarande inte övertygad? Kontakta oss så kan vi komma fram till hur vi kan hjälpa just dig!
          </p>
          <Link to={'/kontakt'}>
            <button className="l-btn acc">Kontakta oss</button>
          </Link>
        </article>
        <div className="testimonial-container">
          <div className="fade-out-box"></div>
          <CardSlider />
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection;
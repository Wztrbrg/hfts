import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/testimonial-section.scss';
import CardSlider from './CardSlider';



const TestimonialSection = () => {


  return (
    <section className="testimonial-section">
      <div className="testimonial-section-content">
        <div className="bg-blur-blob left"></div>
        <div className="bg-blur-blob center"></div>
        <article className="testimonial-text">
          <h3 className='lc-h acc-txt'>flertalet nöjda kunder</h3>
          <h1 className="l-h dk-txt">vi satsar på hållbara relationer</h1>
          <p className="l-p dk-txt">
            Fortfarande inte övertygad? Se vad några av våra sammarbetspartners tycker om oss och våra tjänster
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
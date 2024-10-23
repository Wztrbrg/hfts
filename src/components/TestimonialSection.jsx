import React from 'react';
import '../assets/style/testimonial-section.scss';
import CardSlider from './CardSlider';



const TestimonialSection = () => {


  return (
    <section className="testimonial-section">
      <div className="testimonial-section-content">
        <article className="testimonial-text">
          <h1 className="l-h dk-txt">kundreferenser</h1>
          <p className="l-p dk-txt">
            Här kan du se vad några av våra sammarbetspartners
            tycker om oss och våra tjänser
          </p>
        </article>
        <div className="testimonial-container">
          <CardSlider />
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection;
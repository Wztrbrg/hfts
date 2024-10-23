import React from "react";
import Slider from "react-slick";
import '../assets/style/card-slider.scss';

const CardSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1.5, // Show one full card and half of the next
    slidesToScroll: 1,
    centerMode: false,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, image: "https://i.pravatar.cc/110?img=3", title: "titel", desc: "Jättebra service och trevligt bemötande! Håller alltid vad dom lovar" },
    { id: 2, image: "https://i.pravatar.cc/110?img=20", title: "titel", desc: "Jättebra service och trevligt bemötande! Håller alltid vad dom lovar" },
    { id: 3, image: "https://i.pravatar.cc/110?img=13", title: "titel", desc: "Jättebra service och trevligt bemötande! Håller alltid vad dom lovar" },
    { id: 4, image: "https://i.pravatar.cc/110?img=42", title: "titel", desc: "Jättebra service och trevligt bemötande! Håller alltid vad dom lovar" },
  ];

  return (
      <Slider {...settings} className="testimonial-slider">
        {cards.map((card) => (
          <div key={card.id} className="testimonial-card">
            <img className="testimonial-card-img" src={card.image} alt="Porträtt av person som lämnat recension" />
            <div className="testimonial-card-content">
              <h3 className="testimonial-card-title c-h dk-txt">
                {card.title}
              </h3>
              <p className="testimonial-card-desc c-p dk-txt">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </Slider>
  );
};

export default CardSlider;
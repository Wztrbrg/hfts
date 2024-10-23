import React from "react";
import Slider from "react-slick";
import '../assets/style/card-slider.scss';

const CardSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Show one full card and half of the next
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
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
    { id: 1, title: "Card 1", desc: "Card description" },
    { id: 2, title: "Card 2", desc: "Card description" },
    { id: 3, title: "Card 3", desc: "Card description" },
    { id: 4, title: "Card 4", desc: "Card description" },
  ];

  return (
      <Slider {...settings} className="testimonial-slider">
        {cards.map((card) => (
          <div key={card.id} className="testimonial-card">
            <h3 className="testimonial-card-title c-h dk-txt">
              {card.title}
            </h3>
            <p className="testimonial-card-desc c-p dk-txt">
              {card.desc}
            </p>
          </div>
        ))}
      </Slider>
  );
};

export default CardSlider;
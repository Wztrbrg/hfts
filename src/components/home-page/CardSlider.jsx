import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../../assets/style/home-page/card-slider.scss';

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
          // centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, image: "https://lh3.googleusercontent.com/a/ACg8ocL92pA2GHyvdOrcy5IsB-9t6mIwxB80WHZHNi24KG_9jVWwew=w54-h54-p-rp-mo-br100", title: "Jonathan Andersson", desc: "Utmärkt service och trevligt bemötande!" },
    { id: 2, image: "https://lh3.googleusercontent.com/a/ACg8ocLwgGk0jhyGri_tuw6Vm2bmDWlmpKuIY6fPf-M1AezUKF8RKw=w54-h54-p-rp-mo-br100", title: "Rene Makula", desc: "Professionell och pålitlig fastighetsservice med snabb respons och hög kvalitet. Arbetet utförs noggrant och med stor omtanke om både fastigheten och hyresgästerna. Rekommenderas starkt!!!" },
    { id: 3, image: "https://lh3.googleusercontent.com/a-/ALV-UjXeGrCOO7q_SdRQVEF94PHkEndiMF8VB75uF_Uo-qNFTVmweAYY=w54-h54-p-rp-mo-br100", title: "Johan Leskelä", desc: "Jag är otroligt nöjd med Hållbar Fastighetsservice Syd AB. De är pålitliga, professionella och håller alltid hög kvalitet." },
    { id: 4, image: "https://lh3.googleusercontent.com/a-/ALV-UjXgJ8kZfW7vAR1IRTATQikeVau9G01He1eEeZaX85kjLV5zytq0=w54-h54-p-rp-mo-br100", title: "Malin Nordin", desc: "Fick hjälp att få tillbaka värmen i huset samt tips på hur vi kan få ner energiförbrukningen" },
    { id: 5, image: "https://lh3.googleusercontent.com/a-/ALV-UjUza5ZhVy53Sh-B6Rwvz_IJ6gkU4wJCA31g4n0V4D2SRjw6li3c=w54-h54-p-rp-mo-br100", title: "Kristian Trpkoski", desc: "Kompetenta konsulter med väldigt bra service. Kommer fortsätta samarbetet 5/5" },
    { id: 6, image: "https://lh3.googleusercontent.com/a/ACg8ocJ_Z6RkCieeA9VjCQRxVDHm3boiHYSChrKla68qGaKO2XaMPw=w54-h54-p-rp-mo-br100", title: "Ann-Sofie Göransson", desc: "Kompetent och trevlig personal. Kan starkt rekommenderas" },
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
              <div className="star-container">
                <FontAwesomeIcon icon={ faStar } />
                <FontAwesomeIcon icon={ faStar } />
                <FontAwesomeIcon icon={ faStar } />
                <FontAwesomeIcon icon={ faStar } />
                <FontAwesomeIcon icon={ faStar } />
              </div>
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
import React from "react";
import { useParams } from "react-router-dom";
import { services } from "./ServiceSelections";
import '../../assets/style/services-page/specific-service.scss';
import { Link } from "react-router-dom";

const SpecificService = () => {
  const { serviceId } = useParams();

  // Find the specific service from the array
  const service = services.find((s) => s.id === serviceId);

  // Handle invalid service ID
  if (!service) {
    return <h1>Service not found</h1>;
  }

  return (
    <>
      {/* Hero Section */}
      <div
        className="specific-service-hero"
        style={{
          backgroundImage: `url(${service.heroImage})`,
        }}
      >
        <div className="specific-service-hero-content">
          <div className="heading-container">
            <h1 className="h-h lt-txt">{service.name}</h1>
          </div>
        </div>
      </div>

      <section className="specific-service-section">
        <div className="specific-service-content">
          {/* Description Section */}
          <div className="content-container">
            <div className="tag"></div>
            <h2 className="l-h dk-txt">Om tjänsten</h2>
            <p className="l-p dk-txt">{service.description}</p>
            <ul>
              {service.includes.map((item, index) => (
                <li key={index} className="l-p dk-txt">{item}</li>
              ))}
            </ul>
            <p className="l-p dk-txt">Vill du veta mer om hur vi kan skräddarsy tjänsten för just dig eller få en kostnadsfri offert?</p>
            <Link to={'/kontakt'}>
              <button className="l-btn acc">Kontakta oss</button>
            </Link>
          </div>

          {/* Includes Section */}
          <div className="content-container">
            {/* <div className="tag"></div> */}
            {/* <h3 className="m-h dk-txt">Detta ingår i tjänsten:</h3> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecificService;

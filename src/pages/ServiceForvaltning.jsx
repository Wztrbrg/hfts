import ServiceHero from "../components/services-page/ServiceHero";
import ServiceSelections from "../components/services-page/ServiceSelections";

const Services = () => {
  return (
    <div className="page-wrapper">
      <ServiceHero />
      <ServiceSelections />
    </div>
  )
}

export default Services;
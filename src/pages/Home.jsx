import HeroSection from "../components/HeroSection";
import ValuesBox from "../components/ValuesBox";
import AboutShort from "../components/AboutShort";
import ServicesShort from "../components/ServicesShort";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <ValuesBox />
      <AboutShort/>
      <ServicesShort />
      <TestimonialSection />
    </div>
  )
}

export default Home;
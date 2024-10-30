import HeroSection from "../components/home-page/HeroSection";
import ValuesBox from "../components/home-page/ValuesBox";
import AboutShort from "../components/home-page/AboutShort";
import ServicesShort from "../components/home-page/ServicesShort";
import TestimonialSection from "../components/home-page/TestimonialSection";

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
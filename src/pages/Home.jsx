import HeroSection from "../components/HeroSection";
import ValuesBox from "../components/ValuesBox";
import AboutContent from "../components/AboutContent";

const Home = () => {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <ValuesBox />
      <AboutContent/>
    </div>
  )
}

export default Home;
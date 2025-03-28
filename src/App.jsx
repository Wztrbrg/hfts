import Header from './components/Header'
import './assets/style/globals/global.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Listings from './pages/Listings'
import About from './pages/About'
import Contact from './pages/Contact'
import Report from './pages/Report'
import Footer from './components/Footer'
import CookiePopup from './components/CookiePopup';
import GDPR from './pages/GDPR';
import SpecificService from './components/services-page/SpecificService';



function App() {

  return (
    <>
    <CookiePopup />
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tjanster' element={<Services />} />
      <Route path='/lagenheter-och-lokaler' element={<Listings />} />
      <Route path='/om-oss' element={<About />} />
      <Route path='/kontakt' element={<Contact />} />
      <Route path='/felanmalan' element={<Report />} />
      <Route path='/GDPR' element={<GDPR />} />
      <Route path='/tjanster/:serviceId' element={<SpecificService />}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

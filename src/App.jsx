import Header from './components/Header'
import './assets/style/globals/global.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Listings from './pages/Listings'
import About from './pages/About'
import Contact from './pages/Contact'
import Report from './pages/Report'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tjanster' element={<Services />} />
      <Route path='/bostader-och-lokaler' element={<Listings />} />
      <Route path='/om-oss' element={<About />} />
      <Route path='/kontakt' element={<Contact />} />
      <Route path='/felanmalan' element={<Report />} />
    </Routes>
    </>
  )
}

export default App

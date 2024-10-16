import Header from './components/Header'
import './assets/style/globals/global.scss'

function App() {

  return (
    <>
    <Header/>
    <div className="hero-section">
      <div className="hero-content">
        <h1 className='h-h lt-txt'>hero heading</h1>
        <p className="h-sub dk-txt">hero subheading</p>
        <h2 className="l-h lt-txt">large heading</h2>
        <p className="l-p dk-txt">large paragraph</p>
        <h3 className="c-h lt-txt">card heading</h3>
        <p className="c-p dk-txt">card para</p>
        <button className="l-btn acc">kontakta oss</button>
        <button className="s-btn prim">kontakta oss</button>
      </div>
    </div>
    </>
  )
}

export default App

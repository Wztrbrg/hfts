import '../../assets/style/about-page/about-hero.scss';
import '../../assets/style/globals/global.scss';


const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="bg-img-overlay"></div>
      <article className="about-hero-content">
        <div className="bg-blur-blob left"></div>
        <div className="bg-blur-blob center"></div>
        <header className='heading-container'>
          <h3 className="l-tag acc-txt">Om oss</h3>
          <h1 className="h-h lt-txt">
            Passionerade kring <span className='pr-txt'>hållbara lösningar</span> med över 20 års erfarenhet
          </h1>
        </header>
      </article>
    </div>
  )
}

export default AboutHero;
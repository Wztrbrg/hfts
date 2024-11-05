import '../../assets/style/about-page/about-hero.scss';
import '../../assets/style/globals/global.scss';


const ContactHero = () => {
  return (
    <div className="about-hero">
      <div className="bg-img-overlay"></div>
      <article className="about-hero-content">
        <div className="bg-blur-blob left"></div>
        <div className="bg-blur-blob center"></div>
        <header className='heading-container'>
          <h3 className="l-tag acc-txt">KONTAKTA OSS</h3>
          <h1 className="h-h lt-txt">
            Har du frågor? Kontakta oss gärna via <span className='pr-txt'>E-post</span> eller <span className='pr-txt'>formuläret</span>
          </h1>
        </header>
      </article>
    </div>
  )
}

export default ContactHero;
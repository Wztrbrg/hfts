import '../../assets/style/contact-page/contact-hero.scss';
import '../../assets/style/globals/global.scss';


const ContactHero = () => {
  return (
    <div className="contact-hero">
      <div className="bg-img-overlay"></div>
      <article className="contact-hero-content">
        <div className="bg-blur-blob left"></div>
        <div className="bg-blur-blob center"></div>
        <header className='heading-container'>
          <h3 className="l-tag acc-txt">KONTAKTA OSS</h3>
          <h1 className="h-h lt-txt">
            Välkommen att <span className='pr-txt'>kontakta oss</span> vid frågor och funderingar
          </h1>
        </header>
      </article>
    </div>
  )
}

export default ContactHero;
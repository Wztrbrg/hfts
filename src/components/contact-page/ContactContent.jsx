// import '../../assets/style/about-page/about-content.scss';
import '../../assets/style/contact-page/contact-content.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ContactContent = () => {
  return (
    <section className="about-content-section">
      <div className="content">
        <article className='about-card-full'>
          <div className="about-card-img"></div>
          <header className="text">
            <h3 className="l-tag acc-txt">
              Om Hållbar Fastighetsservice Syd
            </h3>
            <h1 className="l-h dk-txt">
              Din partner inom hållbar fastighetsförvaltning
            </h1>
            <p className="l-p dk-txt">
              Välkommen till Hållbar Fastighetsservice Syd – ett fastighetsförvaltningsbolag där hållbarhet och kvalitet står i fokus. Vi arbetar för att erbjuda långsiktiga och miljömedvetna lösningar för fastighetsägare och bostadsrättsföreningar som vill bidra till ett mer hållbart samhälle.
            </p>
          </header>
        </article>

        <section className='contact-form-section'>
          <form>
            <div className='double-input-row'>
              <div className="left">
                <label htmlFor="">Förnamn</label>
                <input type="text" />
              </div>
              <div className="right">
                <label htmlFor="">Efternamn</label>
                <input type="text" />
              </div>
            </div>
            
            <label htmlFor="">E-POST</label>
            <input type="text" />
            <label htmlFor="">Meddelande</label>
            <textarea type="text" rows={5}/>
            <button className='s-btn prim'>SKICKA</button>
          </form>
        </section>

        
        {/* <section className="why-section">
          <div className="bg-img-overlay"></div>
          <article className="why-content">
            <header className='heading-container'>
              <h1 className="h-h lt-txt">
                Varför välja <span className="pr-txt">Hållbar Fastighetsservice Syd</span>?
              </h1>
            </header>
            <div className="text">
              <p className="h-sub lt-txt">
                Att välja Hållbar Fastighetsservice Syd innebär att du väljer en långsiktig partner som sätter miljön och kvaliteten i första rummet. Vi tror på att skapa fastighetsvärden som håller över tid, både ekonomiskt och ekologiskt.
              </p>
              <ul>
                <li>
                  <p className="l-p lt-txt">Lång erfarenhet inom fastighetsförvaltning</p>
                </li>
                <li>
                  <p className="l-p lt-txt">Miljöanpassade lösningar för en minskad klimatpåverkan</p>
                </li>
                <li>
                  <p className="l-p lt-txt">Kundnära service med engagemang och lyhördhet för våra kunders behov</p>
                </li>
              </ul>
            </div>

          </article>
        </section>
         */}
      </div>
    </section>
  )
}

export default ContactContent;
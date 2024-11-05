import '../../assets/style/about-page/about-content.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const AboutContent = () => {
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

        <section className='about-card-section'>
          <div className="bg-blur-blob left"></div>
          <div className="bg-blur-blob center"></div>
          <article className='about-card'>
            <h3 className="lc-h acc-txt">
              Vårt uppdrag
            </h3>
            <div className="text">
              <h1 className="m-h dk-txt">
                Att skapa hållbara och trivsamma fastighetsmiljöer för framtiden
              </h1>
              <p className="l-p dk-txt">
                Vi brinner för att förvalta och utveckla fastigheter på ett sätt som minimerar negativ miljöpåverkan samtidigt som vi bibehåller högsta möjliga standard för våra kunder. Medan vi tar hand om allt från teknisk drift och skötsel till ekonomisk förvaltning, ser vi alltid till att våra tjänster är energieffektiva och hållbara i varje detalj.
              </p>
            </div>
          </article>

          <article className='about-card'>
            <h3 className="lc-h acc-txt">
              Våra värderingar
            </h3>
            <div className="text">
              <h1 className="m-h dk-txt">
                Hållbarhet, kvalitet och engagemang
              </h1>
              <p className="l-p dk-txt">
                Hållbarhet är vårt ledord i alla delar av verksamheten. Genom att arbeta med noggrant utvalda leverantörer, miljövänliga material och energieffektiva metoder, strävar vi efter att minska miljöpåverkan. Kvalitet och engagemang är djupt förankrade i vårt team och driver oss att leverera tjänster som inte bara uppfyller våra kunders behov, utan också gör en positiv skillnad för miljön.
              </p>
            </div>
          </article>
        </section>

        <section className="approach-section">
          <header>
            <h1 className="l-h dk-txt">Vår metod för hållbar fastighetsförvaltning</h1>
          </header>
          <section className="approach-grid">

            <article className="approach-box">
              <h1 className="l-h acc-txt">1.</h1>
              <div className="text">
                <h2 className="lc-h dp-txt">
                  Energieffektiva lösningar
                </h2>
                <p className="lc-p dp-txt">
                  Genom att använda modern teknik och innovativa lösningar ser vi till att fastigheterna vi förvaltar är så energieffektiva som möjligt. Vi erbjuder rådgivning och genomför åtgärder som sänker energiförbrukningen och därmed driftkostnaderna.
                </p>
              </div>
            </article>
            <div className="v-divider"></div>
            <article className="approach-box">
              <h1 className="l-h acc-txt">2.</h1>
              <div className="text">
                <h2 className="lc-h dp-txt">
                  Miljövänliga material och arbetssätt
                </h2>
                <p className="lc-p dp-txt">
                  För att minimera vår miljöpåverkan använder vi oss av miljöcertifierade och hållbara material i allt från fastighetsskötsel till renovering och underhåll.
                </p>
              </div>
            </article>
            <div className="v-divider"></div>
            <article className="approach-box">
              <h1 className="l-h acc-txt">3.</h1>
              <div className="text">
                <h2 className="lc-h dp-txt">
                  Digitalisering för en bättre miljö
                </h2>
                <p className="lc-p dp-txt">
                  Vi använder digitala verktyg och system för att optimera vårt arbete och minska pappersförbrukningen. Genom digital kommunikation och fjärrövervakning av fastighetssystem kan vi säkerställa en effektiv och resursbesparande förvaltning.
                </p>
              </div>
            </article>

          </section>
        </section>

        <section className="why-section">
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
      </div>
    </section>
  )
}

export default AboutContent;
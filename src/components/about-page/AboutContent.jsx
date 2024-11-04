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
            <h3 className="m-h acc-txt">
              Vårt uppdrag
            </h3>
            <div className="text">
              <h1 className="l-h dk-txt">
                Att skapa hållbara och trivsamma fastighetsmiljöer för framtiden
              </h1>
              <p className="l-p dk-txt">
                Vi brinner för att förvalta och utveckla fastigheter på ett sätt som minimerar negativ miljöpåverkan samtidigt som vi bibehåller högsta möjliga standard för våra kunder. Medan vi tar hand om allt från teknisk drift och skötsel till ekonomisk förvaltning, ser vi alltid till att våra tjänster är energieffektiva och hållbara i varje detalj.
              </p>
            </div>
          </article>

          <article className='about-card'>
            <h3 className="m-h acc-txt">
              Våra värderingar
            </h3>
            <div className="text">
              <h1 className="l-h dk-txt">
                Hållbarhet, kvalitet och engagemang
              </h1>
              <p className="l-p dk-txt">
                Hållbarhet är vårt ledord i alla delar av verksamheten. Genom att arbeta med noggrant utvalda leverantörer, miljövänliga material och energieffektiva metoder, strävar vi efter att minska miljöpåverkan. Kvalitet och engagemang är djupt förankrade i vårt team och driver oss att leverera tjänster som inte bara uppfyller våra kunders behov, utan också gör en positiv skillnad för miljön.
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}

export default AboutContent;
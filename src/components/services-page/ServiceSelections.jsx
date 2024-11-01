import serviceImage1 from '../../assets/images/service-image1.jpg';
import serviceImage2 from '../../assets/images/service-image2.jpg';
import '../../assets/style/services-page/service-selections.scss';


const ServiceSelections = () => {
  return (
    <div className="service-selections-section">
      <div className="service-selections-content">
        {/* <h1 className="l-h dk-txt">Våra hållbara tjänster</h1> */}

        <article className="service-article">
          <img src={serviceImage1} alt="Exempelbild av tjänst som tillhandahålls" className="service-img" />
          <div className="service-text-container">
            <div className="heading-container">
              <h2 className="m-h dk-txt service-heading">
                Fastighetsskötsel & Drift
              </h2>
              <p className="l-p dk-txt service-desc">
                Vi tar hand om den dagliga skötseln av din 
                fastighet för att säkerställa att allt fungerar 
                smidigt och effektivt. Vårt team av erfarna 
                tekniker övervakar och underhåller viktiga system 
                som värme, ventilation och vatten, vilket 
                garanterar högsta möjliga standard och minskad 
                energiförbrukning. Genom regelbundna inspektioner 
                och proaktivt underhåll hjälper vi dig att 
                förebygga problem innan de uppstår, vilket sparar 
                tid och pengar samtidigt som vi bidrar till en 
                hållbar fastighetsdrift.
              </p>
            </div>
            <div className="cta-container">
              <button className="s-btn prim">Kontakta oss för mer info</button>
            </div>
          </div>
        </article>

        <article className="service-article">
          <div className="service-text-container">
            <div className="heading-container">
              <h2 className="m-h dk-txt service-heading">
                Fastighetsförvaltning & Projektledning
              </h2>
              <p className="l-p dk-txt service-desc">
                Vår tjänst inom fastighetsförvaltning och 
                projektledning är utformad för att maximera värdet 
                på din fastighet genom strategisk planering och 
                effektiv projektledning. Oavsett om du behöver 
                hjälp med budgetering, hyresgästanpassningar eller 
                större renoveringsprojekt, ser vi till att arbetet 
                utförs inom tidsramar och budget. Med vårt 
                hållbarhetsfokus säkerställer vi att alla projekt 
                drivs med miljövänliga metoder och energieffektiva 
                lösningar, vilket skapar långsiktiga vinster både 
                för din fastighet och miljön.
              </p>
            </div>
            <div className="cta-container">
              <button className="s-btn prim">Kontakta oss för mer info</button>
            </div>
          </div>
          <img src={serviceImage2} alt="Exempelbild av tjänst som tillhandahålls" className="service-img" />
        </article>
      </div>
    </div>
  )
}

export default ServiceSelections;
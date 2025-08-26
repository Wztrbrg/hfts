import '../../assets/style/services-page/service-selections.scss';
import serviceImage1 from '../../assets/images/skotsel.jpeg';
import serviceImage2 from '../../assets/images/projekt.jpg';
import serviceImage3 from '../../assets/images/cleaning.jpg';
import serviceImage4 from '../../assets/images/garden.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
  { 
    id: "fastighetsskotsel", 
    name: "Fastighetsskötsel",
    heroImage: `${serviceImage1}`,
    description: "Vi tar hand om den dagliga skötseln av din fastighet för att säkerställa att allt fungerar smidigt och effektivt. Vårt team av erfarna tekniker övervakar och underhåller viktiga system som värme, ventilation och vatten, vilket garanterar högsta möjliga standard och minskad energiförbrukning. Genom regelbundna inspektioner och proaktivt underhåll hjälper vi dig att förebygga problem innan de uppstår, vilket sparar tid och pengar samtidigt som vi bidrar till en hållbar fastighetsdrift.",
    includes: [
      "Trädgårdsskötsel",
      "Trädgårdsservice",
      "Anläggning",
      "Snickare/Målare",
      "Snöröjning",
      "Vicevärd",
      "Teknisk förvaltare",
      "Lekplatsbesiktning"
    ],
  },
  { 
    id: "fastighetsforvaltning", 
    name: "Fastighetsförvaltning", 
    heroImage: `${serviceImage2}`,
    description: "Vår tjänst inom fastighetsförvaltning är utformad för att maximera värdet på din fastighet genom strategisk planering och effektiv projektledning. Oavsett om du behöver hjälp med budgetering, hyresgästanpassningar eller större renoveringsprojekt, ser vi till att arbetet utförs inom tidsramar och budget. Med vårt hållbarhetsfokus säkerställer vi att alla projekt drivs med miljövänliga metoder och energieffektiva lösningar, vilket skapar långsiktiga vinster både för din fastighet och miljön.",
    includes: [
      "Tillsyn av rondering",
      "Årsplan/Underhållsplan",
      "Upphandling av tjänster",
      "Besiktningar",
      "Kontroll av värme och ventilation",
      "Kontroll av hissar",
      "Kontroll av elundercentraler",
      "Reparationer"
    ],
  },
  { 
    id: "stadning", 
    name: "Städning", 
    heroImage: `${serviceImage3}`,
    description: "Professionell och pålitlig städservice. Vi erbjuder omfattande städtjänster för bostadsrättsföreningar och fastighetsägare. Våra tjänster inkluderar allt från trappstädning och gemensamma utrymmen till kontors- och lokalstädning. Vi använder miljövänliga produkter och noggranna rutiner för att garantera en ren och trivsam miljö för boende och besökare.",
    includes: [
      "Trapphusstädning", 
      "Städning av tvättstugor och förråd", 
      "Kontorsstädning",
      "Fönsterputsning",
      "Specialstädning vid behov",
      "Vi skräddarsyr städupplägg efter era behov, alltid med fokus på kvalitet och hållbarhet.",
    ],
  },
  { 
    id: "tradgardsskotsel", 
    name: "Trädgårdsskötsel",
    heroImage: `${serviceImage4}`,
    description: "Grönskande och välskötta utemiljöer. Vi hjälper dig att hålla utemiljöerna i toppskick året runt. Vår trädgårdsservice omfattar allt från gräsklippning och häcktrimning till skötsel av planteringar. Vi skapar trivsamma och funktionella utomhusmiljöer som ökar fastighetens värde och boendekvalitet.",
    includes: [
      "Gräsklippning och kanttrimning", 
      "Häckklippning och beskärning", 
      "Ogräsbekämpning",
      "Plantering och underhåll av rabatter",
      "Höst- och vårstädning av trädgårdar",
      "Vi anpassar våra tjänster efter säsong och era specifika önskemål.",
    ],
  },
  { 
    id: "ekonomisk-forvaltning", 
    name: "Ekonomisk förvaltning",
    heroImage: `${serviceImage4}`,
    description: "Grönskande och välskötta utemiljöer. Vi hjälper dig att hålla utemiljöerna i toppskick året runt. Vår trädgårdsservice omfattar allt från gräsklippning och häcktrimning till skötsel av planteringar. Vi skapar trivsamma och funktionella utomhusmiljöer som ökar fastighetens värde och boendekvalitet.",
    includes: [
      "Gräsklippning och kanttrimning", 
      "Häckklippning och beskärning", 
      "Ogräsbekämpning",
      "Plantering och underhåll av rabatter",
      "Höst- och vårstädning av trädgårdar",
      "Vi anpassar våra tjänster efter säsong och era specifika önskemål.",
    ],
  },
  { 
    id: "energi-och-miljotjanster", 
    name: "Ekonomi & Miljötjänster",
    heroImage: `${serviceImage4}`,
    description: "Grönskande och välskötta utemiljöer. Vi hjälper dig att hålla utemiljöerna i toppskick året runt. Vår trädgårdsservice omfattar allt från gräsklippning och häcktrimning till skötsel av planteringar. Vi skapar trivsamma och funktionella utomhusmiljöer som ökar fastighetens värde och boendekvalitet.",
    includes: [
      "Gräsklippning och kanttrimning", 
      "Häckklippning och beskärning", 
      "Ogräsbekämpning",
      "Plantering och underhåll av rabatter",
      "Höst- och vårstädning av trädgårdar",
      "Vi anpassar våra tjänster efter säsong och era specifika önskemål.",
    ],
  },
  { 
    id: "teknisk-forvaltning", 
    name: "Teknisk förvaltning",
    heroImage: `${serviceImage4}`,
    description: "Grönskande och välskötta utemiljöer. Vi hjälper dig att hålla utemiljöerna i toppskick året runt. Vår trädgårdsservice omfattar allt från gräsklippning och häcktrimning till skötsel av planteringar. Vi skapar trivsamma och funktionella utomhusmiljöer som ökar fastighetens värde och boendekvalitet.",
    includes: [
      "Gräsklippning och kanttrimning", 
      "Häckklippning och beskärning", 
      "Ogräsbekämpning",
      "Plantering och underhåll av rabatter",
      "Höst- och vårstädning av trädgårdar",
      "Vi anpassar våra tjänster efter säsong och era specifika önskemål.",
    ],
  },
  { 
    id: "bygg", 
    name: "Bygg",
    heroImage: `${serviceImage4}`,
    description: "Grönskande och välskötta utemiljöer. Vi hjälper dig att hålla utemiljöerna i toppskick året runt. Vår trädgårdsservice omfattar allt från gräsklippning och häcktrimning till skötsel av planteringar. Vi skapar trivsamma och funktionella utomhusmiljöer som ökar fastighetens värde och boendekvalitet.",
    includes: [
      "Gräsklippning och kanttrimning", 
      "Häckklippning och beskärning", 
      "Ogräsbekämpning",
      "Plantering och underhåll av rabatter",
      "Höst- och vårstädning av trädgårdar",
      "Vi anpassar våra tjänster efter säsong och era specifika önskemål.",
    ],
  },
];

const ServiceSelections = () => {

  return (
    <div className="service-selections-section">
      <div className="service-selections-content">
        <ul className='services-list'>
          {services.map((service) => (
            <li key={service.id}>
                <article className="service-article">
                  <div className="service-img-container">
                    <img src={service.heroImage} alt="Exempelbild av tjänst som tillhandahålls" className='service-img' />
                  </div>
                  <div className="service-text-container">
                    <div className="heading-container">
                      <h2 className="m-h dp-txt service-heading">{service.name}</h2>
                      {/* <p className="l-p dp-txt service-desc">{service.description}</p> */}
                    </div>
                    <div className="cta-container">
                      <Link to={`/tjanster/${service.id}`}>
                        <button className="s-btn acc">Läs om tjänst <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                      </Link>
                    </div>
                  </div>
                </article>
            </li>
          ))}
        </ul>

        {/* <article className="service-article">
          <img src={serviceImage1} alt="Exempelbild av tjänst som tillhandahålls" className="service-img" />
          <div className="service-text-container">
            <div className="heading-container">
              <h2 className="m-h dp-txt service-heading">
                Fastighetsskötsel & Drift
              </h2>
              <p className="l-p dp-txt service-desc">
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
            <div className="cta-container right">
              <Link to={"/tjanster/fastighetsskotsel-och-drift"}>
                <button className="s-btn acc">Kontakta oss för mer info</button>
              </Link>
            </div>
          </div>
        </article>

        <article className="service-article">
          <div className="service-text-container">
            <div className="heading-container">
              <h2 className="m-h dp-txt service-heading">
                Fastighetsförvaltning & Projektledning
              </h2>
              <p className="l-p dp-txt service-desc">
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
              <Link to={"/tjanster/fastighetsforvaltning-och-projektledning"}>
                <button className="s-btn acc">Kontakta oss för mer info</button>
              </Link>
            </div>
          </div>
          <img src={serviceImage2} alt="Exempelbild av tjänst som tillhandahålls" className="service-img" />
        </article>

        <article className="service-article">
          <img src={serviceImage1} alt="Exempelbild av tjänst som tillhandahålls" className="service-img" />
          <div className="service-text-container">
            <div className="heading-container">
              <h2 className="m-h dp-txt service-heading">
                Städning
              </h2>
              <p className="l-p dp-txt service-desc">
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
            <div className="cta-container right">
              <Link to={"/tjanster/stadning"}>
                <button className="s-btn acc">Kontakta oss för mer info</button>
              </Link>
            </div>
          </div>
        </article>

        <article className="service-article">
          <div className="service-text-container">
            <div className="heading-container">
              <h2 className="m-h dp-txt service-heading">
                Trädgårdsskötsel
              </h2>
              <p className="l-p dp-txt service-desc">
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
              <Link to={"/tjanster/tradgardsskotsel"}>
                <button className="s-btn acc">Kontakta oss för mer info</button>
              </Link>
            </div>
          </div>
          <img src={serviceImage2} alt="Exempelbild av tjänst som tillhandahålls" className="service-img" />
        </article> */}

      </div>
    </div>
  )
}

export default ServiceSelections;

export { services };
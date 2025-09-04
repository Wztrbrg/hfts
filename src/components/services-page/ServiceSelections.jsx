import '../../assets/style/services-page/service-selections.scss';
import serviceImage1 from '../../assets/images/skotsel.jpeg';
import serviceImage2 from '../../assets/images/projekt.jpg';
import serviceImage3 from '../../assets/images/cleaning.jpg';
import serviceImage4 from '../../assets/images/garden.jpg';
import serviceImage5 from '../../assets/images/ekonomi.jpg';
import serviceImage6 from '../../assets/images/energi.jpg';
import serviceImage7 from '../../assets/images/bygg.jpg';
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
    layout: "list"
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
    layout: "list"
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
    layout: "list"
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
    layout: "list"
  },
  { 
    id: "ekonomisk-forvaltning", 
    name: "Ekonomisk förvaltning",
    heroImage: `${serviceImage5}`,
    description: "Vi erbjuder professionell ekonomisk förvaltning för bostadsrättsföreningar och fastighetsägare. Med vår hjälp får ni full kontroll över föreningens ekonomi, trygg hantering av bokföring och fakturering samt tydlig rapportering. Vi arbetar proaktivt för att optimera era kostnader och säkerställa långsiktig ekonomisk stabilitet.",
    includes: [
      "Löpande bokföring och redovisning",
      "Fakturahantering och betalningsbevakning",
      "Budgetering och ekonomisk planering",
      "Upprättande av årsredovisning",
      "Rapportering till styrelse och medlemmar",
      "Rådgivning kring lån och investeringar",
      "Vi skräddarsyr ekonomiska lösningar efter era behov och erbjuder personlig service med fokus på trygghet och transparens.",
    ],
    layout: "list"
  },
  { 
    id: "energi-och-miljotjanster", 
    name: "Energi & Miljötjänster",
    heroImage: `${serviceImage6}`,
    description: "Vi hjälper fastighetsägare, byggherrar och bostadsrättsföreningar att bygga och förvalta hållbara fastigheter. Med rätt analyser, beräkningar och certifieringar kan du både sänka energikostnader, minska klimatpåverkan och skapa en bättre inomhusmiljö för de som bor eller arbetar i byggnaden.",
    includes: [
      {
        title: "Energiberäkning:",
        content: "Genom energiberäkningar får du en tydlig bild av hur mycket energi en byggnad använder och var det finns potential till förbättring. Beräkningen används ofta i projekteringsfasen för att säkerställa att byggnaden uppfyller Boverkets byggregler och andra krav.",
      },
      {
        title: "Energideklaration:",
        content: "En energideklaration är ett krav vid försäljning eller uthyrning av byggnader och visar byggnadens energiprestanda. Vi tar fram underlaget och hjälper dig att förstå vilka åtgärder som kan minska energikostnaderna.",
      },
      {
        title: "Dagsljusberäkning:",
        content: "Rätt mängd dagsljus skapar trivsel, välmående och kan till och med påverka hälsan positivt. Med våra beräkningar får du svart på vitt om byggnaden uppfyller gällande dagsljuskrav.",
      },
      {
        title: "Solstudie & Solvärmelast:",
        content: "Vi analyserar hur solens strålning påverkar fastigheten under olika tider på året. Det ger beslutsunderlag kring placering av fönster, solskydd och lösningar för att undvika övertemperaturer.",
      },
      {
        title: "VSC & Utblick:",
        content: "Vi utför tekniska beräkningar som visar både kvaliteten på dagsljuset inomhus och hur boende eller användare upplever utsikten från byggnaden.",
      },
      {
        title: "Klimatberäkning:",
        content: "Vi tar fram livscykelanalyser (LCA) för att beräkna byggnadens totala klimatpåverkan – från materialval till drift. Detta är en viktig del i att minska fastighetens miljöavtryck.",
      },
      {
        title: "Klimatdeklaration:",
        content: "Sedan 2022 är det krav på klimatdeklaration för nybyggnation i Sverige. Vi hjälper dig med hela processen så att deklarationen blir korrekt och godkänd.",
      },
      {
        title: "Klimatriskanalys:",
        content: "Vi analyserar hur framtida klimatförändringar kan påverka byggnaden, till exempel risk för värmeböljor, översvämningar eller fuktskador. På så sätt kan du planera smartare åtgärder redan idag.",
      },
      {
        title: "LFM30:",
        content: "Vi arbetar enligt Malmös färdplan för klimatneutralt byggande till år 2030 och kan vägleda ditt projekt mot de mål som satts upp för en mer hållbar byggsektor.",
      },
      {
        title: "Certifieringar:",
        content: "Att miljöcertifiera en byggnad ger inte bara ett kvitto på hållbarhet – det höjer även fastighetens värde och attraktionskraft. Vi erbjuder stöd i flera certifieringssystem: Miljöbyggnad – Sveriges mest använda certifiering för byggnader. Svanen – välkänd nordisk miljömärkning. BREEAM – internationellt system som används världen över. WELL – med fokus på hälsa och välmående inomhus. EU-taxonomi – hållbarhetsklassificering enligt EU:s regelverk. NollCO₂ – certifiering för klimatneutralitet. Vi guidar dig genom hela processen – från förstudie till färdig certifiering.",
      },
      {
        title: "Termiskt klimat (PPD):",
        content: "Vi analyserar temperaturförhållanden för att säkerställa att inomhusmiljön upplevs behaglig för de som vistas i byggnaden.",
      },
      {
        title: "Kyleffekt:",
        content: "Våra beräkningar visar om fastigheten har tillräcklig kyleffekt för att motverka övertemperaturer under sommaren.",
      },
      {
        title: "Yttemperatur:",
        content: "Vi kontrollerar och analyserar yttemperaturer på golv, väggar och fönster för att upptäcka obalanser som kan påverka komfort och energiförbrukning.",
      },
    ],
    layout: "accordion"
  },
  {
    id: "bygg",
    name: "Bygg",
    heroImage: `${serviceImage7}`,
    description: "Vi erbjuder professionella bygg- och renoveringstjänster för bostadsrättsföreningar, fastighetsägare och företag. Vårt erfarna team av snickare och hantverkare utför allt från mindre reparationer till större ombyggnationer och totalrenoveringar. Vi arbetar med hög kvalitet, tydlig kommunikation och fokus på hållbara lösningar för att skapa trygga och funktionella miljöer.",
    includes: [
      "Snickeriarbeten och reparationer",
      "Renovering av lägenheter och lokaler",
      "Ombyggnation och tillbyggnad",
      "Köks- och badrumsrenovering",
      "Golvläggning och målning",
      "Projektledning och rådgivning",
      "Vi skräddarsyr byggprojekt efter era behov och erbjuder helhetslösningar från idé till färdigställande.",
    ],
    layout: "list"
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
      </div>
    </div>
  )
}

export default ServiceSelections;

export { services };
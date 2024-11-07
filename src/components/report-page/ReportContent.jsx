import '../../assets/style/report-page/report-content.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const ReportContent = () => {
  return (
    <section className="report-content-section">
      <div className="content">
        <article className="content-container">
          <div className="tag"></div>
          <h1 className="l-h dk-txt">
            Vi ser fram emot att hjälpa dig med dina fastighetsbehov
          </h1>
          <p className="l-p dk-txt">
            Oavsett om du är fastighetsägare, medlem i en bostadsrättsförening, eller en företagare som söker hållbara lösningar, finns vi här för att bistå. Vi på Hållbar Fastighetsservice Syd tror på personlig och engagerad service som bidrar till långsiktiga och miljövänliga lösningar.
          </p>
        </article>
        <article className="content-container">
          <div className="tag"></div>
          <h1 className="l-h dk-txt">
            Hur kan vi hjälpa dig?
          </h1>
          <p className="l-p dk-txt">
            Vår expertis sträcker sig över hela fastighetsförvaltningen – från teknisk och ekonomisk förvaltning till energieffektiva renoveringar. Tveka inte att höra av dig om du har frågor om våra tjänster eller vill diskutera hur vi kan samarbeta för att förvalta din fastighet hållbart.
          </p>
        </article>
      </div>
    </section>
  )
}

export default ReportContent;
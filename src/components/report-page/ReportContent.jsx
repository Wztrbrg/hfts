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
            Använd formuläret nedan eller <a href="tel:+720255360" className='dk-txt'>ring oss</a>.
            Vid <strong>akuta</strong> ärenden efter normal arbetstid ska ni ringa <a href="tel:+#" className='dk-txt'>jouren</a>.
          </p>
        </article>
      </div>
    </section>
  )
}

export default ReportContent;
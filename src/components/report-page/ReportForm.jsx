import '../../assets/style/report-page/report-form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const ReportForm = () => {
  return (
    <section className="report-form-section">
      <div className="content">
        <article className="contact-info">
          <div className="info-container">
            <FontAwesomeIcon icon={faPhone} className='info-icon acc-txt' />
            <div className="info">
              <h1 className="m-h dp-txt">Telefon</h1>
              <a href="tel:+46720255360" className='l-p dp-txt'>072-0255360</a>
            </div>
          </div>
          <div className="info-container">
            <FontAwesomeIcon icon={faEnvelope} className='info-icon acc-txt' />
            <div className="info">
              <h1 className="m-h dp-txt">E-post</h1>
              <a href="mailto:info@hallbarservice.se" className='l-p dp-txt'>info@hallbarservice.se</a>
            </div>
          </div>
          <div className="info-container">
            <FontAwesomeIcon icon={faLocationDot} className='info-icon acc-txt' />
            <div className="info">
              <h1 className="m-h dp-txt">Besöksadress</h1>
              <p className="l-p dp-txt">
                c/o R2 FASTIGHETER AB<br/>
                GREV TUREGATAN 13 B<br/>
                114 46 Stockholm
              </p>
            </div>
          </div>
        </article>
        <form>
          <div className='double-input-row'>
            <div className="left">
              <label htmlFor="förnamn">Förnamn</label>
              <input type="text" name='förnamn' placeholder='Anders' />
            </div>
            <div className="right">
              <label htmlFor="efternamn">Efternamn</label>
              <input type="text" name='efternamn' placeholder='Persson' />
            </div>
          </div>
            
          <label htmlFor="e-postadress">E-postadress</label>
          <input type="text" name='e-postadress' placeholder='anders.persson@exempel.se'/>
          <label htmlFor="meddelande">Meddelande</label>
          <textarea type="text" rows={5} name='meddelande' placeholder='Här kan du skriva dina frågor eller funderingar'/>
          <button className='l-btn acc'>SKICKA</button>
        </form>
      </div>
    </section>
  )
}

export default ReportForm;
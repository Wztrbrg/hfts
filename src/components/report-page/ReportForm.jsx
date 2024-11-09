import '../../assets/style/report-page/report-form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const ReportForm = () => {
  return (
    <section className="report-form-section">
      <div className="content">
        <article className="report-info">
          <div className="info">
            <h1 className="m-h dp-txt">Viktig information</h1>
            <ul className="info-list">
              <li className="info-item">
                <p className="l-p dp-txt">
                  Tänk på att en felanmälan är en beställning och kan 
                  komma att leda till kostnader för dig som beställare.  
                </p>
              </li>
              <li className="info-item">
                <p className="l-p dp-txt">
                  Du ansvarar själv för att ta reda på vilka kostnader 
                  som åligger dig.
                </p>
              </li>
              <li className="info-item">
                <p className="l-p dp-txt">
                  Akuta felanmälningar 
                  hanteras utan dröjsmål vilket kan göra att mindre 
                  akuta fel åtgärdas efter prioritet.
                </p>
              </li>
              <li className="info-item">
                <p className="l-p dp-txt">
                  du som är bostadsrättsinnehavare 
                  har rätt att anlita vilket företag du önskar för 
                  arbeten inne i den egna bostadsrätten.
                </p>
              </li>
              <li className="info-item">
                <p className="l-p dp-txt">
                  Vid felanmälan 
                  och beställningar så behöver vi registrera dina 
                  personuppgifter, mer information om detta <a href="#" className='dp-txt'>här</a>. 
                </p>
              </li>
            </ul>
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
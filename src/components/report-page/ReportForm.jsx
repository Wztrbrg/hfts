import '../../assets/style/report-page/report-form.scss';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const ReportForm = () => {

  const [isSent, setIsSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Firstname:", form.current.förnamn.value);
    console.log("Lastname:", form.current.efternamn.value);
    console.log("Telefon:", form.current.telefon.value);
    console.log("Email:", form.current.email.value);
    console.log("Adress:", form.current.adress.value);
    console.log("Lägenhet:", form.current.lagenhetsnummer.value);
    console.log("Beskrivning:", form.current.beskrivning.value);
    
    emailjs
      .sendForm('service_m0cc7hc', 'template_nqbt35j', form.current, 'wwJg1FgSLud6yDF7W')
      .then(
        () => {
          console.log('Email successfully sent');
          setIsSent(true);
        },
        (error) => {
          console.log('Email service failed: ', error.text);
        },
      );
  };

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
                  Du som är bostadsrättsinnehavare 
                  har rätt att anlita vilket företag du önskar för 
                  arbeten inne i den egna bostadsrätten.
                </p>
              </li>
              <li className="info-item">
                <p className="l-p dp-txt">
                  Vid felanmälan 
                  och beställningar så behöver vi registrera dina 
                  personuppgifter, dessa raderas löpande ur våra system efter att ärendet har hanterats</p>
              </li>
            </ul>
          </div>
        </article>
        <form ref={form} onSubmit={sendEmail}>
          <div className='double-input-row'>
            <div className="left">
              <label htmlFor="förnamn">Förnamn</label>
              <input type="text" name='förnamn' placeholder='Anders' required />
            </div>
            <div className="right">
              <label htmlFor="efternamn">Efternamn</label>
              <input type="text" name='efternamn' placeholder='Persson' required />
            </div>
          </div>
          <label htmlFor="telefon">Telefonnummer</label>
          <input type="tel" name="telefon" placeholder='070-123 45 67' required />
          <label htmlFor="email">E-postadress</label>
          <input type="text" name='email' placeholder='anders.persson@exempel.se' required />
          <label htmlFor="adress">Adress</label>
          <input type="text" name="adress" placeholder='Gröna Gatan 1b' required />
          <label htmlFor="lagenhetsnr">Lägenhetsnummer</label>
          <input type="text" name="lagenhetsnummer" placeholder='1101' required />
          <label htmlFor="beskrivning">Beskrivning</label>
          <textarea type="text" rows={5} name='beskrivning' placeholder='Här beskriver du felet. Exempelvis: "Droppande kran i köket"' required />
          {isSent &&
            <p className="l-p acc-txt"><strong>Vi har tagit emot din felanmälan och kommer att hantera den så snart som möjligt!</strong></p>
          }
          <button className='l-btn acc'>SKICKA</button>
        </form>
      </div>
    </section>
  )
}

export default ReportForm;
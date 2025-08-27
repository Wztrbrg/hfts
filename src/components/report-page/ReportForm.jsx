import '../../assets/style/report-page/report-form.scss';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const ReportForm = () => {

  const [isSent, setIsSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Firstname:", form.current.user_name.value);
    console.log("Lastname:", form.current.user_lastname.value);
    console.log("Telefon:", form.current.user_phone.value);
    console.log("Email:", form.current.user_email.value);
    console.log("Adress:", form.current.user_address.value);
    console.log("Lägenhet:", form.current.user_apartment.value);
    console.log("Beskrivning:", form.current.user_description.value);
    
    emailjs
      .sendForm('service_felanmalan', 'template_felanmalan', form.current, 'wwJg1FgSLud6yDF7W')
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
              <label htmlFor="user_name">Förnamn</label>
              <input type="text" id='user_name' name='user_name' placeholder='Anders' required />
            </div>
            <div className="right">
              <label htmlFor="user_lastname">Efternamn</label>
              <input type="text" id='user_lastname' name='user_lastname' placeholder='Persson' required />
            </div>
          </div>
          <label htmlFor="user_phone">Telefonnummer</label>
          <input type="tel" id='user_phone' name="user_phone" placeholder='070-123 45 67' required />
          <label htmlFor="user_email">E-postadress</label>
          <input type="text" id='user_email' name='user_email' placeholder='anders.persson@exempel.se' required />
          <label htmlFor="user_address">Adress</label>
          <input type="text" id='user_address' name="user_address" placeholder='Gröna Gatan 1b' required />
          <label htmlFor="user_apartment">Lägenhetsnummer</label>
          <input type="text" id='user_apartment' name="user_apartment" placeholder='1101' required />
          <label htmlFor="user_description">Beskrivning</label>
          <textarea type="text" id='user_description' rows={5} name='user_description' placeholder='Här beskriver du felet. Exempelvis: "Droppande kran i köket"' required />
          {isSent &&
            <div className="confirm-msg">
              <p className='l-p dp-txt'><strong>Vi har tagit emot din felanmälan och kommer att hantera den så snart som möjligt!</strong></p>
            </div>
          }
          <button className='l-btn acc'>SKICKA</button>
        </form>
      </div>
    </section>
  )
}

export default ReportForm;
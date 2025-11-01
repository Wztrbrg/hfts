import '../../assets/style/contact-page/contact-form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const ContactForm = () => {

  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSent, setIsSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Vänligen verifiera att du inte är en robot.");
      return;
    }
    
    emailjs
      .sendForm('service_kontakt', 'template_kontakt', form.current, 'wwJg1FgSLud6yDF7W')
      .then(
        () => {
          console.log('Email successfully sent');
          setIsSent(true);
          form.current.reset();
          setCaptchaValue(null);
        },
        (error) => {
          console.log('Email service failed: ', error.text);
        },
      );
  };

  return (
    <section className="contact-form-section">
      <div className="content">
        <article className="contact-info">
          <div className="info-container">
            <FontAwesomeIcon icon={faPhone} className='info-icon acc-txt' />
            <div className="info">
              <h1 className="m-h dp-txt">Telefon</h1>
              <a href="tel:040302000" className='l-p dp-txt' target="blank">040-30 20 00</a>
            </div>
          </div>
          <div className="info-container">
            <FontAwesomeIcon icon={faEnvelope} className='info-icon acc-txt' />
            <div className="info">
              <h1 className="m-h dp-txt">E-post</h1>
              <a href="mailto:info@hallbarservice.se" className='l-p dp-txt' target="blank">info@hallbarservice.se</a>
            </div>
          </div>
          <div className="info-container">
            <FontAwesomeIcon icon={faLocationDot} className='info-icon acc-txt' />
            <div className="info">
              <h1 className="m-h dp-txt">Besöksadress</h1>
              <p className="l-p dp-txt">
                Amiralsgatan 68<br/>
                214 37 MALMÖ
              </p>
            </div>
          </div>
        </article>
        <form ref={form} onSubmit={sendEmail}>
          <div className='double-input-row'>
            <div className="left">
              <label htmlFor="user_name">Förnamn</label>
              <input type="text" name='user_name' id='user_name' placeholder='Anders' />
            </div>
            <div className="right">
              <label htmlFor="user_lastname">Efternamn</label>
              <input type="text" name='user_lastname' id='user_lastname' placeholder='Persson' />
            </div>
          </div>
            
          <label htmlFor="user_phone">Telefonnummer</label>
          <input type="tel" id='user_phone' name="user_phone" placeholder='070-123 45 67' required />
          <label htmlFor="user_email">E-postadress</label>
          <input type="text" name='user_email' id='user_email' placeholder='anders.persson@exempel.se'/>
          <label htmlFor="user_message">Meddelande</label>
          <textarea type="text" rows={5} name='user_message' id='user_message' placeholder='Här kan du skriva dina frågor eller funderingar'/>
          <ReCAPTCHA
            sitekey="6LdiH_crAAAAAI9ktVa7wISGj9OhytniiPuSXWg6"
            onChange={(value) => setCaptchaValue(value)}
            className="recaptcha"
            style={{ marginBottom: "20px"}}
          />
          {isSent &&
            <div className="confirm-msg">
              <p className='l-p dp-txt'><strong>Tack för ditt meddelande!</strong></p>
            </div>
          }
          <button type="submit" className='l-btn acc'>SKICKA</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;
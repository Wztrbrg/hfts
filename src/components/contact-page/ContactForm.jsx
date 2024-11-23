import '../../assets/style/contact-page/contact-form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const ContactForm = () => {

  const [isSent, setIsSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Firstname:", form.current.firstname.value);
    console.log("Lastname:", form.current.lastname.value);
    console.log("Email:", form.current.email.value);
    console.log("Message:", form.current.message.value);
    
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
    <section className="contact-form-section">
      <div className="content">
        <article className="contact-info">
          <div className="info-container">
            <FontAwesomeIcon icon={faPhone} className='info-icon acc-txt' />
            <div className="info">
              <h1 className="m-h dp-txt">Telefon</h1>
              <a href="tel:040302000" className='l-p dp-txt'>040-30 20 00</a>
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
                Amiralsgatan 68<br/>
                214 37 MALMÖ
              </p>
            </div>
          </div>
        </article>
        <form ref={form} onSubmit={sendEmail}>
          <div className='double-input-row'>
            <div className="left">
              <label htmlFor="förnamn">Förnamn</label>
              <input type="text" name='firstname' placeholder='Anders' />
            </div>
            <div className="right">
              <label htmlFor="efternamn">Efternamn</label>
              <input type="text" name='lastname' placeholder='Persson' />
            </div>
          </div>
            
          <label htmlFor="e-postadress">E-postadress</label>
          <input type="text" name='email' placeholder='anders.persson@exempel.se'/>
          <label htmlFor="meddelande">Meddelande</label>
          <textarea type="text" rows={5} name='message' placeholder='Här kan du skriva dina frågor eller funderingar'/>
          {isSent &&
            <p className="l-p acc-txt"><strong>Tack för ditt meddelande!</strong></p>
          }
          <button type="submit" className='l-btn acc'>SKICKA</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;
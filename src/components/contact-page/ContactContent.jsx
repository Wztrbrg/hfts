import '../../assets/style/contact-page/contact-content.scss';


const ContactContent = () => {
  return (
    <section className="about-form-section">
      <div className="content">
          <form>
            <div className='double-input-row'>
              <div className="left">
                <label htmlFor="">Förnamn</label>
                <input type="text" />
              </div>
              <div className="right">
                <label htmlFor="">Efternamn</label>
                <input type="text" />
              </div>
            </div>
            
            <label htmlFor="">E-POST</label>
            <input type="text" />
            <label htmlFor="">Meddelande</label>
            <textarea type="text" rows={5}/>
            <button className='s-btn prim'>SKICKA</button>
          </form>
      </div>
    </section>
  )
}

export default ContactContent;
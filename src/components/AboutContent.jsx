import '../assets/style/about-content.scss';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/about.jpg';

const AboutContent = () => {
  return (
    <>
      <section className="about-content-section">

        <div className='card'>
            {/* <img src={aboutImg} alt="" /> */}
            <div className="image"></div>
            <div className="text-wrapper">
                <h2 className='h-h dk-txt'>vi på hållbar fastighetsservice syd</h2>
                <p className='l-p dk-txt'>Är passionerade kring att skapa hållbara lösningar för framtidens fastigheter. Med över 20 års erfarenhet inom fastighetsförvaltning arbetar vi för att optimera både driftsäkerhet och miljöpåverkan. Vår vision är att vara en ledande aktör inom klimatsmart fastighetsförvaltning där vi genom innovativa energibesparingar och miljömedvetna åtgärder bidrar till en mer hållbar värld.</p>
                <p className='l-p dk-txt'>Genom att samarbeta med experter inom grön teknik och certifieringar som LEED och BREEAM hjälper vi fastighetsägare att minska sina koldioxidutsläpp och maximera energieffektiviteten, utan att kompromissa med kvalitet eller komfort. För oss handlar hållbarhet inte bara om miljön, utan om långsiktig lönsamhet och ett ansvar gentemot kommande generationer.</p>
                <p className='l-p dk-txt'>Låt oss förvalta din fastighet med samma omsorg för planeten som vi har för dig.</p>
            </div>
        </div>

      </section>
    </>
  )
}

export default AboutContent;
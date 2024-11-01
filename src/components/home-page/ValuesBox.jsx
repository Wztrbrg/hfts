import '../../assets/style/home-page/values-box.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faBolt, faCity  } from '@fortawesome/free-solid-svg-icons';

const ValuesBox = () => {
  return (
    <section className="values-box">
      <article className="value">
        <FontAwesomeIcon icon={faEarthAmericas} className="value-ico" />
        <h3 className="value-heading c-h dk-txt">
          Miljövänlighet
        </h3>
        <p className="value-para c-p dk-txt">
          Vi strävar efter att minimera vår miljöpåverkan.
        </p>
      </article>
      <div className="v-divider"></div>
      <article className="value">
        <FontAwesomeIcon icon={faBolt} className="value-ico" />
        <h3 className="value-heading c-h dk-txt">
          Effektivitet
        </h3>
        <p className="value-para c-p dk-txt">
          Vår expertis hjälper dig att optimera fastighetsdriften och minska kostnader.
        </p>
      </article>
      <div className="v-divider"></div>
      <article className="value">
        <FontAwesomeIcon icon={faCity} className="value-ico" />
        <h3 className="value-heading c-h dk-txt">
          Långsiktig förvaltning
        </h3>
        <p className="value-para c-p dk-txt">
          Med fokus på hållbarhet skapar vi långsiktigt värde för 
          din fastighet.
        </p>
      </article>
    </section>
  )
}

export default ValuesBox;
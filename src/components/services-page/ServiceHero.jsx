import '../../assets/style/services-page/services-hero.scss';
import '../../assets/style/globals/global.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const ServiceHero = () => {
  return (
    // <div className="service-hero">
    //   <div className="service-overlay">
    //     <article className="service-hero-content">
    //       <FontAwesomeIcon className='bg-icon' icon={faScrewdriverWrench} />
    //       {/* <div className="bg-blur-blob left"></div>
    //       <div className="bg-blur-blob center"></div> */}
    //       <header className='heading-container'>
    //         <h3 className="l-tag lt-txt">Tjänster</h3>
    //         <h1 className="h-h lt-txt">
    //           Vi erbjuder ett stort antal <span className='pr-txt'>tjänster</span> för alla dina behov
    //         </h1>
    //       </header>
    //     </article>
    //   </div>
    // </div>
    // <div className="service-hero">
    //   <div className="service-bg-overlay">
    //     <article className="service-hero-content">
    //       <FontAwesomeIcon className='bg-icon' icon={faScrewdriverWrench} />
    //         {/* <div className="bg-blur-blob left"></div>
    //         <div className="bg-blur-blob center"></div> */}
    //         <header className='heading-container'>
    //         <h3 className="h-sub acc-txt">Tjänster</h3>
    //         <h1 className="h-h dk-txt">
    //           Vi erbjuder ett stort antal tjänster för alla dina behov
    //         </h1>
    //       </header>
    //     </article>
    //   </div>
    // </div>
<header className='heading-container'>
  <h1 className="h-h dk-txt">Tjänster</h1>
  <p className="h-sub dk-txt">
    Vi erbjuder ett stort antal tjänster för alla dina behov
  </p>
</header>
)}

export default ServiceHero;
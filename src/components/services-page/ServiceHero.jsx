import '../../assets/style/services-page/services-hero.scss';
import '../../assets/style/globals/global.scss';


const ServiceHero = () => {
  return (
    <div className="service-hero">
      <article className="service-hero-content">
        <div className="bg-blur-blob left"></div>
        <div className="bg-blur-blob center"></div>
        <header className='heading-container'>
          <h3 className="l-tag acc-txt">Tjänster</h3>
          <h1 className="h-h dk-txt">
            Vi erbjuder ett stort antal tjänster för alla <span>dina behov</span>
          </h1>
        </header>
      </article>
    </div>
  )
}

export default ServiceHero;
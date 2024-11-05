import '../../assets/style/listings-page/listings-hero.scss';
import '../../assets/style/globals/global.scss';


const ListingsHero = () => {
  return (
    <div className="listings-hero">
      <div className="bg-img-overlay"></div>
      <article className="listings-hero-content">
        <div className="bg-blur-blob left"></div>
        <div className="bg-blur-blob center"></div>
        <header className='heading-container'>
          <h3 className="l-tag acc-txt">Ledigt</h3>
          <h1 className="h-h lt-txt">
            Hos oss bor du i <span className='pr-txt'>hållbart förvaltade</span> fastigheter
          </h1>
        </header>
      </article>
    </div>
  )
}

export default ListingsHero;
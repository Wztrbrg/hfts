import '../../assets/style/report-page/report-hero.scss';
import '../../assets/style/globals/global.scss';


const ReportHero = () => {
  return (
    <div className="report-hero">
      <div className="bg-img-overlay"></div>
      <article className="report-hero-content">
        <div className="bg-blur-blob left"></div>
        <div className="bg-blur-blob center"></div>
        <header className='heading-container'>
          <h3 className="l-tag acc-txt">Felanmälan</h3>
          <h1 className="h-h lt-txt">
            Har något gått sönder eller behöver ses över? Gör en <span className='pr-txt'>felanmälan</span>
          </h1>
        </header>
      </article>
    </div>
  )
}

export default ReportHero;
import '../../assets/style/listings-page/listings-content.scss';
import ListingCards from './ListingCards';

const ListingsContent = () => {

  return (
    <section className="listings-section">
      <div className="listings-content">
        <header>
          <h1 className="l-h dk-txt">Lediga bostäder och lokaler</h1>
          <p className="l-p dk-txt">Här kan du se vilka bostäder och lokaler som finns tillgängliga just nu.</p>
        </header>
          <ListingCards />
      </div>
    </section>
  )
}

export default ListingsContent;
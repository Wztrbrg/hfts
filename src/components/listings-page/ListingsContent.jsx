import '../../assets/style/listings-page/listings-content.scss';
// import Preview from '../../assets/images/listing-img.jpg';

const ListingsContent = () => {

  const listings = [
    {
      id: 1,
      city: "Lomma, Lomma",
      address: "Elevenborgsvägen 1",
      price: "4733",
      date: "2024-11-16",
      rooms: "1",
      size: "14",
      url: "https://www.homeq.se/lagenhet/136910-1rum-lomma-skane-lan-elevenborgsvagen-1?ht_source=individual.136910&ht_container=highlighted_search_results&ht_position=0&ht_details=&recommId=undefined&boost_value=14.35",
    },
    {
      id: 2,
      city: "Lomma, Lomma",
      address: "Elevenborgsvägen 1",
      price: "4733",
      date: "2024-11-16",
      rooms: "1",
      size: "14",
      url: "https://www.homeq.se/lagenhet/136910-1rum-lomma-skane-lan-elevenborgsvagen-1?ht_source=individual.136910&ht_container=highlighted_search_results&ht_position=0&ht_details=&recommId=undefined&boost_value=14.35",
    },
    {
      id: 3,
      city: "Lomma, Lomma",
      address: "Elevenborgsvägen 1",
      price: "4733",
      date: "2024-11-16",
      rooms: "1",
      size: "14",
      url: "https://www.homeq.se/lagenhet/136910-1rum-lomma-skane-lan-elevenborgsvagen-1?ht_source=individual.136910&ht_container=highlighted_search_results&ht_position=0&ht_details=&recommId=undefined&boost_value=14.35",
    },
    {
      id: 4,
      city: "Lomma, Lomma",
      address: "Elevenborgsvägen 1",
      price: "4733",
      date: "2024-11-16",
      rooms: "1",
      size: "14",
      url: "https://www.homeq.se/lagenhet/136910-1rum-lomma-skane-lan-elevenborgsvagen-1?ht_source=individual.136910&ht_container=highlighted_search_results&ht_position=0&ht_details=&recommId=undefined&boost_value=14.35",
    },
    {
      id: 5,
      city: "Lomma, Lomma",
      address: "Elevenborgsvägen 1",
      price: "4733",
      date: "2024-11-16",
      rooms: "1",
      size: "14",
      url: "https://www.homeq.se/lagenhet/136910-1rum-lomma-skane-lan-elevenborgsvagen-1?ht_source=individual.136910&ht_container=highlighted_search_results&ht_position=0&ht_details=&recommId=undefined&boost_value=14.35",
    },
    {
      id: 6,
      city: "Lomma, Lomma",
      address: "Elevenborgsvägen 1",
      price: "4733",
      date: "2024-11-16",
      rooms: "1",
      size: "14",
      url: "https://www.homeq.se/lagenhet/136910-1rum-lomma-skane-lan-elevenborgsvagen-1?ht_source=individual.136910&ht_container=highlighted_search_results&ht_position=0&ht_details=&recommId=undefined&boost_value=14.35",
    },
  ];

  return (
    <section className="listings-section">
      <div className="listings-content">
        <header>
          <h1 className="l-h dk-txt">Lediga bostäder och lokaler</h1>
          <p className="l-p dk-txt">Här kan du se vilka bostäder och lokaler som finns tillgängliga just nu.</p>
        </header>
        <div className="listings-container">
          <h2 className="m-h dk-txt">{listings.length} lediga lägenheter</h2>
          {listings.map((listing) => (
            <article key={listing.id} className="listing-card">
              {/* <img src={Preview} alt="Bild på lägenhetshus" /> */}
              <div className="text">
                <div className="card-header">
                  <p className="c-p dk-txt">{listing.city}</p>
                  <h3 className="c-h dk-txt">{listing.address}</h3>
                </div>
                <div className="card-content">
                  <p className="c-p dk-txt"><strong className='acc-txt'>{listing.price} kr</strong> / mån</p>
                  <p className="c-p dk-txt">Inflytt: {listing.date}</p>
                  <div className="size-container">
                    <p className="c-p dk-txt">{listing.rooms} rum</p>
                    <p className="spacer">•</p>
                    <p className="c-p dk-txt"> {listing.size}m²</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListingsContent;
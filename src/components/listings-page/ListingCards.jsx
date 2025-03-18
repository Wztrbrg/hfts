import React, { useState, useEffect } from "react";
import "../../assets/style/listings-page/listing-card.scss";

const ListingCards = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://hallbarservice.se/fetch_listings.php")
      .then((response) => response.json())
      .then((data) => setListings(data.results))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  return (
    <>
      <section className="listing-cards">
        {listings.map((listing) => (
            <a href={`https://homeq.se${listing.uri}`} target="_blank">
              <article key={listing.id} className="card">
                <img src={listing.images[0].image} className="card-img" alt="förhandsgranskning av fastighet" />
                <div className="card-text-container">
                  <header className="card-header">
                    <p className="card-text">{listing.municipality}, {listing.city}</p>
                    <h3 className="card-title">{listing.title}</h3>
                  </header>
                  <div className="card-info-container">
                    <p className="card-text"><b>{listing.rent}kr</b> / mån</p>
                    <p className="card-text">Inflytt: Efter överenskommelse</p>
                    <p className="card-text">{listing.rooms} rum • {listing.area}m²</p>
                  </div>
                </div>
              </article>
            </a>
        ))}
      </section>
    </>
  );
};

export default ListingCards;
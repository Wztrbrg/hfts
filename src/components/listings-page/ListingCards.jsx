import React, { useState, useEffect } from "react";
import "../../assets/style/listings-page/listing-card.scss";

const ListingCards = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://hallbarservice.se/fetch_listings.php")
      .then((response) => response.json())
      .then((data) => {
        setListings(data.results);
      })
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  return (
    <>
        <section className="listing-cards">
          {listings.filter(listing => listing.county === "Skåne län").length > 0 ? (
            listings
            .filter(listing => listing.county === "Skåne län")
            .map((listing) => (
              <a key={listing.id} href={`https://homeq.se${listing.uri}`} target="_blank" rel="noopener noreferrer">
                <article className="card">
                  <img src={listing.images[0].image} className="card-img" alt="förhandsgranskning av fastighet" />
                  <div className="card-text-container">
                    <header className="card-header">
                      <p className="card-text">{listing.county}, {listing.city}</p>
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
            ))
          ) : (
            <p className="no-listings dk-txt l-p">Just nu finns det inga lediga lägenheter eller lokaler.</p>
          )}
        </section>
    </>
  );
};

export default ListingCards;
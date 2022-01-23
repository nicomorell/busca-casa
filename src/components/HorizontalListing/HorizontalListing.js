import "./HorizontalListing.scss";
import { useState } from "react";
import Bedrooms from "../../assets/bedrooms.svg";
import Furnished from "../../assets/furnished.svg";
import Calendar from "../../assets/calendar.svg";
import SquaredMeters from "../../assets/squared-meters.svg";

import { useHistory } from "react-router";

export default function HorizontalListing(listing) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="horizontal_listing-container">
      <div className="image-listing">
        <img src={listing.listingItem.defaultImage}></img>
      </div>
      <div className="information-listing">
        <div className="listing-title">{listing.listingItem.title}</div>
        <div className="listing-address">{listing.listingItem.address}</div>
        <div className="listing-description">
          {listing.listingItem.description}
        </div>

        <div class="lower-information">
          <div>
            <img
              className="sidebar-icon"
              alt="billing icon"
              src={SquaredMeters}
            />
            <span>{listing.listingItem.area}</span>
          </div>
          <div>
            <img className="sidebar-icon" alt="billing icon" src={Bedrooms} />
            <span>{listing.listingItem.bedrooms}</span>
          </div>
          <div>
            <img className="sidebar-icon" alt="billing icon" src={Furnished} />
            <span>{listing.listingItem.furnished}</span>
          </div>
        </div>
      </div>
      <div className="right-information">
          <div className = "price">
            <span>{listing.listingItem.price} </span>
          </div>
          <div className = "favourites">
            Añadir a Favoritos
          </div>
        </div>
    </div>
  );
}

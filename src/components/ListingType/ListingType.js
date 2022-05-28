import "./ListingType.scss";
import { useState } from "react";
import React from 'react'

import SantoDomingo from "../../assets/santo_domingo_default.jpg";
import PuertoPlata from "../../assets/puerto_plata_default.jpg"
import Santiago from "../../assets/santiago_default.jpg";
import LaAltagracia from "../../assets/la_altagracia_default.jpg";
import Calendar from "../../assets/calendar.svg";
import SquaredMeters from "../../assets/squared-meters.svg";
import { useHistory } from "react-router";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function ListingType(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
    const listings = [
      {
        province: "Santo Domingo",
        defaultImage: SantoDomingo,
      },
      {
        province: "La Altagracia",
        defaultImage: LaAltagracia,
      },
      {
        province: "Santiago de los caballeros",
        defaultImage: Santiago,
      },
      {
        province: "Puerto Plata",
        defaultImage: PuertoPlata,
      }
    ];
  const [numberUsers, setNumberUsers] = useState('100+');
  const [numberSold, setNumberSold] = useState("1100+");

  const [numberRent, setNumberRent] = useState('800+');
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return <React.Fragment>

<button  onClick={() => next()} aria-label="Go to next slide" class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" type="button"></button>
<button  onClick={() => previous()} aria-label="Go to previous slide" class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left" type="button"></button>
</React.Fragment>

  };
  return (
    
<div className="listing-type_container">
<div className = "listing-type_wrapper">
  
 <div className="saved-wrapper">
 <h1>Provincias Mas Buscadas</h1>
                    {listings &&
                    listings.map((listing, listingIndex) => {
                      return (
                        <div className="saved-container">
                          <div className = "image-container">
                            <img src = {listing.defaultImage} />
                          </div>
                          <div className = "province-information">
                            <span class = "title">{listing.province}</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
    </div>
    </div>

  );
}

import "./FeaturedSell.scss";
import { useState } from "react";
import React from 'react'

import LandingPhoto from "../../assets/landing-photo.jpg";
import SearchBar from "../SearchBar/SearchBar"
import Bedrooms from "../../assets/bedrooms.svg";
import Furnished from "../../assets/furnished.svg";
import Calendar from "../../assets/calendar.svg";
import SquaredMeters from "../../assets/squared-meters.svg";
import { useHistory } from "react-router";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function FeaturedSell(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
    const listings = [
      {
        title: "Apartmentamento Avenida Winston Churchill",
        area: 60,
        defaultImage:
          "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
        bedrooms: 2,
        furnished: "Si",
        address: "Julieta Morales",
        price: "720",
      },
      {
        title: "Casa Villa Mella",
        area: 24,
        defaultImage:
          "https://www.casadecampo.com.do/wp-content/uploads/2019/06/Costa-Mar-Oceanfront-Villa.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
        bedrooms: 4,
        furnished: "Si",
        address: "Villa Mella",
        price: "450",
      },
      {
        title: "Excelente, moderno apartamento",
        area: 79,
        defaultImage:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gingerbread-house2-4f4ce25.jpg?quality=90&resize=504,458?quality=90&resize=504,458",
        description: "Lorem ipsum dolo",
        bedrooms: 1,
        furnished: "No",
        address: "Evaristo Morales, Santo Domingo",
        price: "900",
      },
      {
        title: "Apartmentamento Avenida Winston Churchill",
        area: 60,
        defaultImage:
          "https://pic.le-cdn.com/thumbs/520x390/101/1/properties/Property-92d8d2726b06e4d41cd75727440e5eda-19206121.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
        bedrooms: 2,
        furnished: "Si",
        address: "Julieta Morales, Distrito Nacional, Santo Domingo",
        price: "720",
      },
      {
        title: "Excelente, moderno apartamento",
        area: 79,
        defaultImage:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gingerbread-house2-4f4ce25.jpg?quality=90&resize=504,458?quality=90&resize=504,458",
        description: "Lorem ipsum dolo",
        bedrooms: 1,
        furnished: "No",
        address: "Evaristo Morales, Santo Domingo",
        price: "900",
      },
      {
        title: "Apartmentamento Avenida Winston Churchill",
        area: 60,
        defaultImage:
          "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
        bedrooms: 2,
        furnished: "Si",
        address: "Julieta Morales, Distrito Nacional, Santo Domingo",
        price: "720",
      },
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
    
<div className="landing-featured-sell">  
 <div className="saved-w">
 <h1>Featured Listings For Sale</h1>

 <Carousel
arrows={false}
centerMode={false}
className=""
autoPlay={false}
containerClass="container"
dotListClass=""
infinite={false}
shouldResetAutoplay={false}
itemClass="padding:1rem;"
responsive={responsive}
renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
>
{listings &&
                    listings.map((listing, listingIndex) => {
                      return (
                        <div className="saved-container">
                          <div className = "image-container">
                            <img src = {listing.defaultImage} />
                          </div>
                          <div className = "text-information">
                          <span class = "address">{listing.address}</span>
                          <div className="lower-information">
                            <div>
                              <span>{listing.area}m&#178;</span>
                            </div>
                            -
                            <div>
                            
                              <span>{listing.bedrooms} hab</span>
                            </div>
                            -
                            <div>
                              <span>{listing.furnished} Amuebl</span>
                            </div>
                          </div>
                          <span class = "description">{listing.description}</span>

                          <div className = "prices">
                            <div className = "original">${listing.price} <span>(99,999)</span></div>
                          </div>
</div>
                        </div>
                      );
                    })}
</Carousel>
                </div>
    </div>
  );
}

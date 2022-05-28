import "./LandingPage.scss";
import { useState, useEffect } from "react";
import LandingPhoto from "../../assets/landing-photo.jpg";
import LandingVideo from "../../assets/landing_video.mp4";

import SearchBar from "../SearchBar/SearchBar"

import { useHistory } from "react-router";
import ListingType from "../ListingType/ListingType";
import FeaturedRent from "../FeaturedRent/FeaturedRent";
import FeaturedSell from "../FeaturedSell/FeaturedSell";

export default function LandingPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  window.addEventListener('load', async () => {
    let video = document.querySelector('video');
    try {
      await video.play();
    } catch (err) {
    }
  });
  
  useEffect(()=>{ 
    let video = document.querySelector('video');

    try {
      video.play();
    } catch (err) {
    }
      },[])
  return (
    <div class = "container">
      <div className="landing_page-container">
        <video className ="landing-photo" muted autoplay loop playsinline>
          <source src={`${LandingVideo}#t=5`} type="video/mp4"/>
        </video>
        <SearchBar></SearchBar>
      </div>
      <ListingType></ListingType>
      <FeaturedRent></FeaturedRent>
      <FeaturedSell></FeaturedSell>

    </div>

  );

}

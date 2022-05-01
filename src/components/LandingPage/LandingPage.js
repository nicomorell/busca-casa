import "./LandingPage.scss";
import { useState } from "react";
import LandingPhoto from "../../assets/landing-photo.jpg";
import SearchBar from "../SearchBar/SearchBar"

import { useHistory } from "react-router";
import LandingStatistics from "../LandingStatistics/LandingStatistics";
import FeaturedRent from "../FeaturedRent/FeaturedRent";
import FeaturedSell from "../FeaturedSell/FeaturedSell";

export default function LandingPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="landing_page-container">
        <img className="landing-photo" src={LandingPhoto}>
        </img>
        <SearchBar></SearchBar>
      </div>
      <LandingStatistics></LandingStatistics>
      <FeaturedRent></FeaturedRent>
      <FeaturedSell></FeaturedSell>

    </div>

  );

}

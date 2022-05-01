import "./LandingStatistics.scss";
import { useState } from "react";
import LandingPhoto from "../../assets/landing-photo.jpg";
import SearchBar from "../SearchBar/SearchBar"

import { useHistory } from "react-router";

export default function LandingStatistics(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [numberUsers, setNumberUsers] = useState('100+');
  const [numberSold, setNumberSold] = useState("1100+");

  const [numberRent, setNumberRent] = useState('800+');

  return (
    <div className="landing-statistics_container">
      <div className = "number-card">
        <div className = "number-topic">
          <div className = "number-stat">{numberRent}</div>
          <h2>Listings for Rent</h2>
        </div>
      </div>
      <div className = "number-card">
      <div className = "number-topic">
        <div className = "number-stat">{numberSold}</div>
        <h2>Listings for Sales</h2>

      </div>
      </div>
      <div className = "number-card">
      <div className = "number-topic">
        <div className = "number-stat">{numberUsers}</div>
        <h2>Number of Users</h2>
        </div>
      </div>
    </div>
  );
}

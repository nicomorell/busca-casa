import "./LandingPage.scss";
import { useState } from "react";
import LandingPhoto from "../../assets/landing-photo.jpg";

import { useHistory } from "react-router";

export default function LandingPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="landing_page-container">
      <img className="landing-photo" src={LandingPhoto}></img>
    </div>
  );
}

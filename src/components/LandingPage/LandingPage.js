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
      <img className="landing-photo" src={LandingPhoto}>
      </img>
      <div className = "search-container">
          <div className = "option-container">
            <div>
              <input
                type="radio"
                className="option-checkbox"
                name="comprar"
                value="comprar"
              />
              <label>Comprar</label>
            </div>
            <div>
              <input
                type="radio"
                className="option-checkbox"
                name="alquiler"
                value="alquiler"
              ></input>
              <label>Alquiler</label>
            </div>
          </div>
          <div className = "input-container">
              <input placeholder = "¿Que quiere encontrar?" type="text" className = "input-search"></input>
          </div>
          <div className = "region-selector">
              
          </div>
          <div className = "search_button-container">
            <button>Busca</button>
          </div>
        </div>
    </div>
  );
}

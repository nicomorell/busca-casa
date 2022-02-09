import "./SearchBar.scss";
import { useState } from "react";

import { useHistory } from "react-router";

export default function LandingPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;


  return (
    <div className="search-bar">
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
              <a href = "/resultados">
              <button>Busca</button>
              </a>
          </div>
        </div>
    </div>
  );
}

import "./Footer.scss";
import { useState } from "react";

import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

import SearchBar from "../SearchBar/SearchBar"

import { useHistory } from "react-router";
import ListingType from "../ListingType/ListingType";
import FeaturedRent from "../FeaturedRent/FeaturedRent";
import FeaturedSell from "../FeaturedSell/FeaturedSell";

export default function Footer(props) {
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
  return (
    <div class = "footer-container">
      <div className = "footer-wrapper">

      <div>
      <ul>
        <li className ="list-item">
          <span>Busqueda</span>
        </li>
        <li className ="list-item">
          Casas
        </li>
        <li className ="list-item">
          Apartamentos
        </li>
        <li className ="list-item">
          Solares
        </li>
        <li className ="list-item">
          Oficinas
        </li>
        </ul>
      </div>
      <div>
      <ul>
      <li className ="list-item">
          <span>Cuenta</span>
        </li>
        <li className ="list-item">
          Iniciar Sesion
        </li>
        <li className ="list-item">
         Crear Cuenta
        </li>
        <li className ="list-item">
          Solares
        </li>
        <li className ="list-item">
          Oficinas
        </li>
        </ul>
      </div>
      <div>
      <ul>
      <li className ="list-item">
          <span>Legal</span>
        </li>
        <li className ="list-item">
          Privacidad
        </li>
        <li className ="list-item">
          Contactanos
        </li>
        <li className ="list-item">
          Solares
        </li>
        <li className ="list-item">
          Oficinas
        </li>
        </ul>
       </div>
       <div className = "follow-section">
         <div className = "header">Siguenos!</div>
         <ul class="list-social" role="list">
           <li class="list-social_item">
                    <a href="https://twitter.com/buscana" class="list-social__link" aria-describedby="a11y-external-message">
                    <Twitter className="contact-icon" src={Twitter} />
                    </a>
                    </li><li class="list-social__item">
                    <a href="https://www.facebook.com/buscana" class="list-social__link" aria-describedby="a11y-external-message">
                    <Facebook className="contact-icon" src={Facebook} />

                    </a>
                    </li><li class="list-social__item">
                    <a href="https://www.instagram.com/buscana/" class="list-social__link" aria-describedby="a11y-external-message">
                    <Instagram className="contact-icon" src={Instagram} />

                    </a>
                    </li>
                    </ul>
       </div>
    </div>
    </div>

  );

}

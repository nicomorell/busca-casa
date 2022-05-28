import "./Footer.scss";
import { useState, useEffect } from "react";

import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
export default function Footer(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
    const navigate = useNavigate();

    const location = useLocation();
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState(null);
  
  useEffect(()=>{ 
    console.log(location.pathname);
      if(location.pathname == '/sign-in' || location.pathname == '/register' ){
        setRegistration(true);
      }
      else {
        setRegistration(false);
      }

      },[location])
  return (
    <div class = {"footer-container " + (registration ? "hidden" : "")}>
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

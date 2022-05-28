import "./Navbar.scss";
import { useState, useEffect } from "react";
import LandingPhoto from "../../assets/landing-photo.jpg";
import Logo from "../../assets/buscacasa-horizontal.png";
import LogoWhite from "../../assets/buscacasa-horizontal-white.png";

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { useHistory } from "react-router";

export default function Navbar(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
    const [changeNavbar, setChangeNavbar] = useState(false);
    const [homePage, setHomePage] = useState(false)
    const [propertyPage, setPropertyPage] = useState(false)
    const navigate = useNavigate();

    const location = useLocation();

    useEffect(()=>{ 
      console.log(location.pathname);
        if(location.pathname == '/'){
          setPropertyPage(false);
          setHomePage(true);
        }
        else if(location.pathname == '/main-property'){
          setPropertyPage(true);
          setHomePage(false);

        }
        else {
          setPropertyPage(false);
          setHomePage(false);
        }
        },[location])
    const changeNavbarSize = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 500) {
        setChangeNavbar(true)
      } else {
        setChangeNavbar(false)
      }
    }
    useEffect(() => {
      console.log("TEST");
      changeNavbarSize()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeNavbarSize)
    })
    
  return (
    <div className={"navbar navbar-container" + (homePage ? " navbar-home" : "") + (propertyPage ? " hidden" : "")}>
           

      <div  onClick={() =>{ navigate('/')}} className="navbar-logo">
        <img src = {homePage ? LogoWhite : Logo}></img>
      </div>
      <div className = "navbar-components">
        <div className = "upper">
        <div onClick={() =>{ navigate('/register')}}>
          Español
        </div>
        <div onClick={() =>{ navigate('/sign-in')}}>
          Iniciar Sesion
        </div>
        </div>
        <div className = "lower">
        <div className = "navbar-advert">
          Publica un anuncio
        </div>
        <div className = "">
          Encontrar Propiedad
        </div>
        <div className = "">
          Por Que Nosotros?
        </div>
        <div className = "">
          Contáctanos
        </div>
        </div>
      </div>
    </div>
  );
}

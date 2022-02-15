import "./Navbar.scss";
import { useState, useEffect } from "react";
import LandingPhoto from "../../assets/landing-photo.jpg";
import SearchBar from "../SearchBar/SearchBar"
import { useLocation } from 'react-router-dom';

import { useHistory } from "react-router";

export default function Navbar(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
    const [changeNavbar, setChangeNavbar] = useState(false);
    const [homePage, setHomePage] = useState(false)

    const location = useLocation();

    useEffect(()=>
    { 
      console.log(location.pathname);
        if(location.pathname == '/'){
        setHomePage(true);
        }
    },[location])
    const changeNavbarSize = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 500) {
        console.log("TEST");
        setChangeNavbar(true)
      } else {
        setChangeNavbar(false)
      }
    }
    useEffect(() => {
      changeNavbarSize()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeNavbarSize)
    })
  return (
    <div className={(changeNavbar ? "navbar-search" : "navbar-container") + (homePage ? " navbar-home" : "")}>
      {!changeNavbar ? <> 
      <div className="navbar-logo">
        BUSCA CASA RD
      </div>
      <div className = "navbar-components">
        <div className = "navbar-advert">
          Publica un anuncio
        </div>
        <div>
          Iniciar Sesion
        </div>
      </div> </> : 
      <SearchBar></SearchBar> 
      }
    </div>
      
  );
}

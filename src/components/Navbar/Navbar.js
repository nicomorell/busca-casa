import "./Navbar.scss";
import { useState, useEffect } from "react";
import LandingPhoto from "../../assets/landing-photo.jpg";
import SearchBar from "../SearchBar/SearchBar"
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
          setHomePage(true);
        }
        else if(location.pathname == '/main-property'){
          setPropertyPage(true);
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
        BUSCA CASA RD
      </div>
      <div className = "navbar-components">
        <div className = "navbar-advert">
          Publica un anuncio
        </div>
        <div onClick={() =>{ navigate('/register')}}>
          Iniciar Sesion
        </div>
      </div>
    </div>
  );
}

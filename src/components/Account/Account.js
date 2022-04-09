import "./Account.scss";
import { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import Heart from "../../assets/heart.svg";

import ListItem from '@mui/material/ListItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { RadioGroup } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { views } from '../../helpers/app-views';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';

export default function Account(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [userInformation, setUserInformation] = useState(null);
  const [accordionFilters, setAccordionFilters] = useState(["saved", "listings", "statistics"]);
  const [view, setView] = useState(views.SETTINGS);

  const navigate = useNavigate();
  useEffect(()=>{ 
    setUserInformation({first_name:'Nicolas', last_name:'Morell', email: 'nicomorell1@hotmail.com', telephone: '+1 849 274 3502'});
  },[])
  const handleChange = (event) => {};
  console.log(accordionFilters)
  return (
    <div className="account-wrapper">
      <div class="top-information">
        <h1>Buenas Tardes, {userInformation && userInformation.first_name} </h1>
      </div>

      <div className="left-panel">
      <FormControl fullWidth>

      <Accordion className = "accordion" expanded={accordionFilters.includes("saved")}>
        <AccordionSummary
          onClick={() => accordionFilters.indexOf("saved") == -1 ? setAccordionFilters(accordionFilters => [...accordionFilters, ("saved")]) : setAccordionFilters(accordionFilters.filter(word => word !== "saved"))}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className = "accordion-title_wrapper">
            <img src = {Heart}></img>
            <div className = "accordion-title">Propiedades Guardadas</div>
          </div>

        </AccordionSummary>
        <AccordionDetails>
        <div className = "properties-saved">
          <div className = "empty">
            <img src = {Heart}></img>
            <p className = "bold">No tienes ninguna propiedad guardada</p>
            <p> Haz clic en el corazon de una propiedad para guardar tus propiedades favoritas y encuentralas aqui mas tarde.</p>
            <div className ="search-properties">
              Buscar
            </div>
          </div>
        </div>
        </AccordionDetails>
      </Accordion>

      <Accordion className = "accordion"  expanded={accordionFilters.includes("saved")}>
        <AccordionSummary
        onClick={() => accordionFilters.indexOf("saved") == -1 ? setAccordionFilters(accordionFilters => [...accordionFilters, ("saved")]) : setAccordionFilters(accordionFilters.filter(word => word !== "saved"))}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div className = "accordion-title_wrapper">
            <img src = {Heart}></img>
            <div className = "accordion-title">Propiedades Publicadas</div>
          </div>

        </AccordionSummary>
        <AccordionDetails>
        <div className = "properties-saved">
          <div className = "empty">
            <img src = {Heart}></img>
            <p className = "bold">No tienes ninguna propiedad publicada</p>
            <p> Haz clic en 'Publicar Propiedad' para agregar una propiedad.</p>
            <div className ="search-properties">
              Publicar Propiedad
            </div>
          </div>
        </div>
        </AccordionDetails>
      </Accordion>

      <Accordion className = "accordion" expanded={accordionFilters.includes("saved")}>
        <AccordionSummary
          onClick={() => accordionFilters.indexOf("saved") == -1 ? setAccordionFilters(accordionFilters => [...accordionFilters, ("saved")]) : setAccordionFilters(accordionFilters.filter(word => word !== "saved"))}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div className = "accordion-title_wrapper">
            <img src = {Heart}></img>
            <div className = "accordion-title">Estadisticas</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <div className = "properties-saved">
          <div className = "empty">
            <img src = {Heart}></img>
            <p className = "bold">No tienes ninguna propiedad guardada</p>
            <p> Haz clic en el corazon de una propiedad para guardar tus propiedades favoritas y encuentralas aqui mas tarde.</p>
            <div className ="search-properties">
              Buscar
            </div>
          </div>
        </div>
        </AccordionDetails>
      </Accordion>
      </FormControl>
      </div>
      <div className="right-panel">
        
        </div>
    </div>
  );
}

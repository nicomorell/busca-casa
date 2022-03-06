import "./ResultsPage.scss";
import { useState } from "react";
import FilterList from "../FilterList/FilterList"
import ResultsList from "../ResultsList/ResultsList"
import ResultsMap from "../ResultsMap/ResultsMap"
import SearchBar from "../SearchBar/SearchBar"

import FarmLand from "../../assets/farm-land.svg"
import House from "../../assets/house-door.svg"
import Building from "../../assets/building.svg"
import BriefCase from "../../assets/briefcase.svg"

import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


export default function ResultsPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
  const [expandProperties, setExpandProperties] = useState(false);
  const [expandFilters, setExpandFilters] = useState(false);
  const [propertyFilters, setPropertyFilters] = useState([]);
  const [featuresFilters, setFeaturesFilters] = useState([]);
  const [furnishedFilters, setFurnishedFilters] = useState([]);

console.log("propertyFilters");
console.log(featuresFilters);
  return (
    <>
     <div className = "filters-row">
        <input className = "location-input" placeholder="Avenida Winston Churchill">
        
        </input>
        <div className ="price-filter">
        <select
        defaultValue= "Min Precio"
        onChange={(event) => {}} 
      >
        <option value="Min Precio">Min Precio</option>
        <option value="0">0</option>
        <option value="100000">$100,000</option>
        <option value="100000">$200,000</option>
      
      </select>
<span>a</span>
<select
        defaultValue= "Max Precio"
        onChange={(event) => {}} 
      >
        <option value="Max Precio">Max Precio</option>
        <option value="100000">$100,000</option>
        <option value="100000">$200,000</option>

      </select>
</div>
<div className ="room-filter">

<select
        defaultValue= "Min Habitaciones"
        onChange={(event) => {}} 
      >
        <option value="Min Habitaciones">Min Camas</option>
        <option value="0">1</option>
        <option value="100">1</option>
        <option value="200">2</option>

      </select>
<span>a</span>
<select
        defaultValue= "Max Habitaciones"
        onChange={(event) => {}} 
      >
        <option value="Max Habitaicones">Max Camas</option>
        <option value="0">1</option>
        <option value="100">1</option>
        <option value="200">2</option>

      </select>
</div>

<div className ={"property-filter " + (expandProperties ? "expanded" : "")}>
<FormControl fullWidth>
<div   onClick={() =>{setExpandProperties(!expandProperties); setExpandFilters(false)}} className = "test">
Propiedades {expandProperties ? <ExpandLessIcon fill = "#f93e3e" /> : <ExpandMoreIcon fill = "#f93e3e" />}
</div>
</FormControl>
</div>
<div className ="filters">
<div   onClick={() =>{setExpandFilters(!expandFilters);setExpandProperties(false); }} className = "test">
Filtros {expandFilters ? <ExpandLessIcon fill = "#f93e3e"/> : <ExpandMoreIcon fill = "#f93e3e"/>}
</div>
</div>
      </div>

  <div className={"properties-filter " + (expandProperties ? "expand-properties" : "")}>
    <div className = "icon-container">
    <div onClick={() => propertyFilters.indexOf("House") == -1 ? setPropertyFilters(propertyFilters => [...propertyFilters, ("House")]) : setPropertyFilters(propertyFilters.filter(word => word !== "House"))} className ={"house-icon " + (propertyFilters.indexOf("House") > -1 ? "selected" : "")}>
        <img src = {House}></img>
        <span>Casa</span>
      </div>
      <div onClick={() => propertyFilters.indexOf("Building") == -1 ? setPropertyFilters(propertyFilters => [...propertyFilters, ("Building")]) : setPropertyFilters(propertyFilters.filter(word => word !== "Building"))} className ={"building-icon " + (propertyFilters.indexOf("Building") > -1 ? "selected" : "")}>
        <img src = {Building}></img>
        <span>Apartamento</span>
      </div>
      <div onClick={() => propertyFilters.indexOf("Land") == -1 ? setPropertyFilters(propertyFilters => [...propertyFilters, ("Land")]) : setPropertyFilters(propertyFilters.filter(word => word !== "Land"))} className ={"land-icon " + (propertyFilters.indexOf("Land") > -1 ? "selected" : "")}>
       <img src = {FarmLand}></img>
        <span>Terreno</span>
      </div>

      <div onClick={() => propertyFilters.indexOf("Garage") == -1 ? setPropertyFilters(propertyFilters => [...propertyFilters, ("Garage")]) : setPropertyFilters(propertyFilters.filter(word => word !== "Garage"))} className ={"garage-icon " + (propertyFilters.indexOf("Garage") > -1 ? "selected" : "")}>
      <GarageOutlinedIcon />
      <span>Garaje</span>
      </div>
      <div onClick={() => propertyFilters.indexOf("Office") == -1 ? setPropertyFilters(propertyFilters => [...propertyFilters, ("Office")])  : setPropertyFilters(propertyFilters.filter(word => word !== "Office"))} className ={"briefcase-icon " + (propertyFilters.indexOf("Office") > -1 ? "selected" : "")}>
       <img src = {BriefCase}></img>
        <span>Oficinas</span>
      </div>
    </div>
  </div>
  <div className={"more-filters " + (expandFilters ? "expand-filters" : "")}>
    <div className ="added-to">
    <h4>Añadido a la pagina: </h4>
    </div>
    <div className ="furnished">
    <h4>Amueblamiento</h4>
    <div onClick={() => furnishedFilters.indexOf("Furnished") == -1 ? setFurnishedFilters(furnishedFilters => [...furnishedFilters, ("Furnished")])  : setFurnishedFilters(furnishedFilters.filter(word => word !== "Furnished"))} className ={"filter-options " + (furnishedFilters.indexOf("Furnished") > -1 ? "selected" : "")}>
      Amueblado
    </div>
    <div onClick={() => furnishedFilters.indexOf("Unfurnished") == -1 ? setFurnishedFilters(furnishedFilters => [...furnishedFilters, ("Unfurnished")])  : setFurnishedFilters(furnishedFilters.filter(word => word !== "Unfurnished"))} className ={"filter-options " + (furnishedFilters.indexOf("Unfurnished") > -1 ? "selected" : "")}>
      No Amueblado
    </div>
    <div onClick={() => furnishedFilters.indexOf("Partial") == -1 ? setFurnishedFilters(furnishedFilters => [...furnishedFilters, ("Partial")])  : setFurnishedFilters(furnishedFilters.filter(word => word !== "Partial"))} className ={"filter-options " + (furnishedFilters.indexOf("Partial") > -1 ? "selected" : "")}>
      Parcial
    </div>
    <div onClick={() => furnishedFilters.indexOf("kitchenFurnished") == -1 ? setFurnishedFilters(furnishedFilters => [...furnishedFilters, ("furnishedKitchen")])  : setFurnishedFilters(furnishedFilters.filter(word => word !== "furnishedKitchen"))} className ={"filter-options " + (furnishedFilters.indexOf("furnishedKitchen") > -1 ? "selected" : "")}>
      Linea Blanca
    </div>
    </div>
    <div className ="features">
    <h4>Comodidades: </h4>
    <div onClick={() => featuresFilters.indexOf("Pool") == -1 ? setFeaturesFilters(featuresFilters => [...featuresFilters, ("Pool")])  : setFeaturesFilters(featuresFilters.filter(word => word !== "Pool"))} className ={"filter-options " + (featuresFilters.indexOf("Pool") > -1 ? "selected" : "")}>
    Piscina
    </div>
    <div onClick={() => featuresFilters.indexOf("Terrace") == -1 ? setFeaturesFilters(featuresFilters => [...featuresFilters, ("Terrace")])  : setFeaturesFilters(featuresFilters.filter(word => word !== "Terrace"))} className ={"filter-options " + (featuresFilters.indexOf("Terrace") > -1 ? "selected" : "")}>
    Terraza
    </div> 
    <div onClick={() => featuresFilters.indexOf("Garden") == -1 ? setFeaturesFilters(featuresFilters => [...featuresFilters, ("Garden")])  : setFeaturesFilters(featuresFilters.filter(word => word !== "Garden"))} className ={"filter-options " + (featuresFilters.indexOf("Garden") > -1 ? "selected" : "")}>
    Jardin
    </div>
    <div onClick={() => featuresFilters.indexOf("Generator") == -1 ? setFeaturesFilters(featuresFilters => [...featuresFilters, ("Generator")])  : setFeaturesFilters(featuresFilters.filter(word => word !== "Generator"))} className ={"filter-options " + (featuresFilters.indexOf("Generator") > -1 ? "selected" : "")}>
    Planta Electrica
    </div>
    <div onClick={() => featuresFilters.indexOf("Security") == -1 ? setFeaturesFilters(featuresFilters => [...featuresFilters, ("Security")])  : setFeaturesFilters(featuresFilters.filter(word => word !== "Security"))} className ={"filter-options " + (featuresFilters.indexOf("Security") > -1 ? "selected" : "")}>
    Seguridad
    </div>
    <div onClick={() => featuresFilters.indexOf("Parking") == -1 ? setFeaturesFilters(featuresFilters => [...featuresFilters, ("Parking")])  : setFeaturesFilters(featuresFilters.filter(word => word !== "Parking"))} className ={"filter-options " + (featuresFilters.indexOf("Parking") > -1 ? "selected" : "")}>
    Parking
    </div>
    </div>

  </div>
    <div className ="pagina-resultados">
     
      {/*<ResultsMap></ResultsMap>
    <SearchBar></SearchBar>*/}
    <div class = "horizontal-results">
      <span className = "number-results">
        Mostrando 9 resultados 
      </span>
      <div className = "order-by">
        <span>
        Ordenar por
        </span>
        <span>
        Relevancia
        </span> 
        <span>
        Mas barato
        </span>
        <span>
        Mas costoso
        </span>
        <span>
        Mas reciente
        </span>
      </div>
    </div>
    <div className="results-left">
    <ResultsList></ResultsList>
    </div>
    <div className="information-right">
    <ResultsMap></ResultsMap>
    </div>
    </div>
    </>
  );
}

import "./ResultsPage.scss";
import { useState } from "react";
import FilterList from "../FilterList/FilterList"
import ResultsList from "../ResultsList/ResultsList"
import ResultsMap from "../ResultsMap/ResultsMap"
import SearchBar from "../SearchBar/SearchBar"

import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { RadioGroup } from "@material-ui/core";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { useHistory } from "react-router";

export default function ResultsPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [expandProperties, setExpandProperties] = useState(false);
  const [expandFilters, setExpandFilters] = useState(false);

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

<div className ="property-filter">
<FormControl fullWidth>
<div   onClick={() =>setExpandProperties(!expandProperties)} className = "test">
Propiedades {expandProperties ? <ExpandLessIcon fill = "#f93e3e" /> : <ExpandMoreIcon fill = "#f93e3e" />}
</div>
</FormControl>
</div>
<div className ="filters">
<div   onClick={() =>setExpandFilters(!expandFilters)} className = "test">
Filtros {expandFilters ? <ExpandLessIcon fill = "#f93e3e"/> : <ExpandMoreIcon fill = "#f93e3e"/>}
</div>
</div>
      </div>

  <div className={"properties-filter " + (expandProperties ? "expand-properties" : "")}></div>
  <div className={"more-filters " + (expandFilters ? "expand-filters" : "")}></div>
    <div className ="pagina-resultados">
     
      <ResultsMap></ResultsMap>
    <SearchBar></SearchBar>
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
    <div className="filtro-izquierda">
     <FilterList></FilterList>
    </div>
    <div className="resultados-derecha">
    <ResultsList></ResultsList>
    </div>
    </div>
    </>
  );
}

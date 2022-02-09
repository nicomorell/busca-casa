import "./ResultsPage.scss";
import { useState } from "react";
import FilterList from "../FilterList/FilterList"
import ResultsList from "../ResultsList/ResultsList"
import ResultsMap from "../ResultsMap/ResultsMap"
import SearchBar from "../SearchBar/SearchBar"

import { useHistory } from "react-router";

export default function ResultsPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <ResultsMap></ResultsMap>
    <SearchBar></SearchBar>
    <div className ="pagina-resultados">
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

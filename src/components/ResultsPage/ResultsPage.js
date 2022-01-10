import "./ResultsPage.scss";
import { useState } from "react";
import FilterList from "../FilterList/FilterList"
import ResultsList from "../ResultsList/ResultsList"

import { useHistory } from "react-router";

export default function ResultsPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <div className ="pagina-resultados">
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

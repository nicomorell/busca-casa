import "./SearchBar.scss";
import { useState } from "react";
import { useAdminContext } from '../../context/admin-context';
import { useNavigate } from 'react-router';


export default function LandingPage(props) {

  var { searchEntry, setSearchEntry } = useAdminContext();
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
    const [inputValue, updateInputValue] = useState(null);
    const navigate = useNavigate();
    function searchProperties() {
      console.log(inputValue);
      setSearchEntry(inputValue);
      navigate('/resultados');
      console.log(searchEntry);
    }


  return (
    <div className="search-bar">
      <div className = "search-container">
          <div className = "option-container">
            <div>
              <input
                type="radio"
                className="option-checkbox"
                name="comprar"
                value="comprar"
              />
              <label>Comprar</label>
            </div>
            <div>
              <input
                type="radio"
                className="option-checkbox"
                name="alquiler"
                value="alquiler"
              ></input>
              <label>Alquiler</label>
            </div>
          </div>
          <div className = "input-container">
              <input onChange={evt => updateInputValue(evt.target.value)} placeholder = "¿Que quiere encontrar?" type="text" className = "input-search"></input>
          </div>
          <div className = "region-selector">
              
          </div>
          <div className = "search_button-container">
              <button onClick={() =>{searchProperties()}}>Busca</button>
          </div>
        </div>
    </div>
  );
}

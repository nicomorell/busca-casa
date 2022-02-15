import logo from "../../assets/logo.svg";
import LandingPage from "../LandingPage/LandingPage";
import ResultsPage from "../ResultsPage/ResultsPage";
import PropertyPage from "../PropertyPage/PropertyPage";

import Navbar from "../Navbar/Navbar";

import "./App.css";
import { Redirect, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar>        </Navbar>
        <Routes>
          <Route path="/" exact element={<LandingPage></LandingPage>}></Route>
          <Route path="/resultados" exact element={<ResultsPage></ResultsPage>}></Route>
          <Route path="/main-property" exact element={<PropertyPage></PropertyPage>}></Route>

        </Routes>
    </div>
  );
}

export default App;

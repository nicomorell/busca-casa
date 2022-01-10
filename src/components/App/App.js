import logo from "../../assets/logo.svg";
import LandingPage from "../LandingPage/LandingPage";
import ResultsPage from "../ResultsPage/ResultsPage";

import "./App.css";
import { Redirect, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<LandingPage></LandingPage>}></Route>
          <Route path="/resultados" exact element={<ResultsPage></ResultsPage>}></Route>
        </Routes>
    </div>
  );
}

export default App;

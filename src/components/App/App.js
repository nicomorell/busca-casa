import logo from "../../assets/logo.svg";
import LandingPage from "../LandingPage/LandingPage";
import { useState } from "react";
import ResultsPage from "../ResultsPage/ResultsPage";
import PropertyPage from "../PropertyPage/PropertyPage";
import Register from "../Register/Register";
import PropertyGallery from "../PropertyGallery/PropertyGallery";
import SignIn from "../SignIn/SignIn";
import AccountSettings from "../AccountSettings/AccountSettings";
import Account from "../Account/Account";


import { AdminContext } from "../../context/admin-context";

import Navbar from "../Navbar/Navbar";

import "./App.css";
import { Redirect, Route, Routes } from "react-router-dom";

function App() {
  const [searchEntry, setSearchEntry] = useState();

  return (
    <div className="App">
      <AdminContext.Provider
      value={{
        searchEntry,
        setSearchEntry: (input) => {
          setSearchEntry(input);
      },
      }}
    >
      <Navbar>        </Navbar>
        <Routes>
          <Route path="/" exact element={<LandingPage></LandingPage>}></Route>
          <Route path="/resultados" exact element={<ResultsPage></ResultsPage>}></Route>
          <Route path="/sign-in" exact element={<SignIn></SignIn>}></Route>
          <Route path="/settings" exact element={<AccountSettings></AccountSettings>}></Route>
          <Route path="/account" exact element={<Account></Account>}></Route>
          <Route path="/main-property/gallery" exact element={<PropertyGallery></PropertyGallery>}></Route>
          <Route path="/main-property" exact element={<PropertyPage></PropertyPage>}></Route>
          <Route path="/register" exact element={<Register></Register>}></Route>

        </Routes>
        </AdminContext.Provider>
    </div>
  );
}

export default App;

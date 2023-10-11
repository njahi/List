import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import login from "./Pages/login";
import home from "./Pages/home";
import about from "./Pages/about";
import service from "./Pages/service";
import asset from "./Pages/asset";
import reports from "./Pages/reports";
import documentation from "./Pages/documentation";
import inventorymanagement from "./Pages/inventorymanagement";
import settings from "./Pages/settings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            exact
            Component={login}
          />
          <Route
            path='/home'
            exact
            Component={home}
          />

          <Route
            path='/about'
            Component={about}
          />
          <Route
            path='/service'
            Component={service}
          />
          <Route
            path='/asset'
            Component={asset}
          />
          <Route
            path='/reports'
            Component={reports}
          />
          <Route
            path='/documentation'
            Component={documentation}
          />
          <Route
            path='/inventorymanagement'
            Component={inventorymanagement}
          />
          <Route
            path='/settings'
            Component={settings}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

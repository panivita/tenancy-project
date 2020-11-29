import React from "react";
import "./App.css";
import "./media.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AboutPage } from "./pages/About-page";
//import { TenanciesDetailsPage } from "./pages/Tenancies-details-page";
import { AddTenancyFormPage } from "./pages/Add-tenancy-page";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";

const App = ({onSubmit}) => {
  return (
    <Router>
      <nav className="navbar-container">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <Link to="/About">About</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Header />
          <Portfolio />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/add_tenancy/">
          <AddTenancyFormPage onSubmit={onSubmit}/>
        </Route>
        {/*<Route path="/tenancies/:id">
          <TenanciesDetailsPage />
        </Route>*/}
      </Switch>
    </Router>
  );
};

export default App;

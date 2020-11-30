import React from "react";
import "./App.css";
import "./media.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AboutPage } from "./pages/About-page";
import { TenanciesDetailsPage } from "./pages/Tenancies-details-page";
import { AddTenancyFormPage } from "./pages/Add-tenancy-page";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";

const App = () => {
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
        <Route path="/about">{/*<AboutPage />*/}</Route>
        <Route path="/add_tenancy">
          <AddTenancyFormPage />
        </Route>
        <Route path="/tenancy/:id">
          <TenanciesDetailsPage />
        </Route>
      </Switch>
      <footer>
        <h3 className="copyright">© 2020 Victoria Kush</h3>
      </footer>
    </Router>
  );
};

export default App;

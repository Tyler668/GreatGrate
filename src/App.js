import React from "react";
// import './sass/App.scss';
import { Route, NavLink } from "react-router-dom";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Purchase from "./components/Purchase";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import Recipes from "./components/Recipes";

import Footer from "./components/Footer";
// import { Router, Route, Switch } from 'react-router';

function App() {
  return (
    <div className="Base">
      <Navigation />
      <Banner />
      <Route exact path="/"></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/purchase" component={Purchase}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/recipes" component={Recipes}></Route>

      <Footer></Footer>
    </div>
  );
}

export default App;

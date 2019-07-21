import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HomePage from "./components/layout/HomePage";
import ShopChicken from "./components/shop/ShopChicken";
import ShopMutton from "./components/shop/ShopMutton";
import ShopFish from "./components/shop/ShopFish";
import ShopSeafood from "./components/shop/ShopSeafood";
import ShopBestsellers from "./components/shop/ShopBestsellers";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/chicken" component={ShopChicken} />
          <Route exact path="/shop/mutton" component={ShopMutton} />
          <Route exact path="/shop/fish" component={ShopFish} />
          <Route exact path="/shop/seafood" component={ShopSeafood} />
          <Route exact path="/shop/bestsellers" component={ShopBestsellers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

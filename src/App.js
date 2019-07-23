import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import LoginAndRegister from "./components/auth/LoginAndRegister";
import HomePage from "./components/layout/HomePage";
import ShopChicken from "./components/shop/ShopChicken";
import ShopMutton from "./components/shop/ShopMutton";
import ShopFish from "./components/shop/ShopFish";
import ShopSeafood from "./components/shop/ShopSeafood";
import ShopBestsellers from "./components/shop/ShopBestsellers";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/loginandregister"
              component={LoginAndRegister}
            />
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
}

export default App;

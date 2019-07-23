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

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // console.log(userAuth); // Complete data of logged in user
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef); Contains id of user to get snapShot of document id and data later
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot); // Contains id of document
          // console.log(snapShot.data()); // Contains all user data
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          // console.log(this.state); // Current user
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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

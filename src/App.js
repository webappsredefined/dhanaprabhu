import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Navbar from "./components/layout/Navbar";
import LoginAndRegister from "./components/auth/LoginAndRegister";
import HomePage from "./components/layout/HomePage";
import ShopChicken from "./components/shop/ShopChicken";
import ShopMutton from "./components/shop/ShopMutton";
import ShopFish from "./components/shop/ShopFish";
import ShopSeafood from "./components/shop/ShopSeafood";
import ShopBestsellers from "./components/shop/ShopBestsellers";
import CheckoutPage from "./components/layout/CheckoutPage";

import { setCurrentUser } from "./redux/actions/userActions";
import { selectCurrentUser } from "./redux/selectors/userSelectors";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // console.log(userAuth); // Complete data of logged in user
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef); Contains id of user to get snapShot of document id and data later
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot); // Contains id of document
          // console.log(snapShot.data()); // Contains all user data
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          // console.log(this.state); // Current user
        });
      } else {
        // console.log(userAuth); // Sets userAuth to null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/loginandregister"
              render={() =>
                currentUser ? <Redirect to="/" /> : <LoginAndRegister />
              }
            />
            <Route exact path="/shop/chicken" component={ShopChicken} />
            <Route exact path="/shop/mutton" component={ShopMutton} />
            <Route exact path="/shop/fish" component={ShopFish} />
            <Route exact path="/shop/seafood" component={ShopSeafood} />
            <Route exact path="/shop/bestsellers" component={ShopBestsellers} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

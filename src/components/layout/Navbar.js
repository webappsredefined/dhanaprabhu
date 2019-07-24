import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "../../styles/navbar.scss";

const Navbar = ({ currentUser }) => {
  // console.log(currentUser); // To check whether user is logged in or not
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop/bestsellers">
          {" "}
          BESTSELLERS{" "}
        </Link>
        <Link className="option" to="/contact">
          {" "}
          CONTACT{" "}
        </Link>
        <Link className="option" to="/cart">
          {" "}
          CART{" "}
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            Logout{" "}
          </div>
        ) : (
          <Link className="option" to="/loginandregister">
            {" "}
            LOGIN & REGISTER{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);

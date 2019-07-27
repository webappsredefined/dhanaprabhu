import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart/CartIcon";
import CartDropdown from "../cart/CartDropdown";
import { selectCartHidden } from "../../redux/selectors/cartSelectors";
import { selectCurrentUser } from "../../redux/selectors/userSelectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "../../styles/navbar.scss";

const Navbar = ({ currentUser, hidden }) => {
  // console.log(currentUser); // To check whether user is logged in or not
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          {" "}
          BESTSELLERS{" "}
        </Link>
        <Link className="option" to="/contact">
          {" "}
          CONTACT{" "}
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);

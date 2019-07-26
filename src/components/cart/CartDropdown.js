import React from "react";
import { connect } from "react-redux";

import CustomButton from "../helpers/CustomButton";
import CartItem from "../item/CartItem";

import "../../styles/cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton value="Go To Checkout" />
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);

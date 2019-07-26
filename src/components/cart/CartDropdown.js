import React from "react";

import CustomButton from "../helpers/CustomButton";

import "../../styles/cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton value="Go To Checkout" />
      </div>
    </div>
  );
};

export default CartDropdown;

import React from "react";

import "../../styles/custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, value, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-login" : ""} custom-button`}
      {...otherProps}
    >
      {children} {value}
    </button>
  );
};

export default CustomButton;

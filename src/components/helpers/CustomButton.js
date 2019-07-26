import React from "react";

import "../../styles/custom-button.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  value,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-login" : ""
      } custom-button`}
      {...otherProps}
    >
      {children} {value}
    </button>
  );
};

export default CustomButton;

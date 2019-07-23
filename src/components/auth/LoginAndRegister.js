import React from "react";
import Login from "./Login";
import Register from "./Register";

import "../../styles/login-and-register.scss";

const LoginAndRegister = () => {
  return (
    <div>
      <h1 className="content">Login or Register</h1>
      <div className="login-and-register">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default LoginAndRegister;

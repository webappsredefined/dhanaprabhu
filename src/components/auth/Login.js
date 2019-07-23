import React, { Component } from "react";
import FormInput from "../helpers/FormInput";
import CustomButton from "../helpers/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "../../styles/login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Login" />
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              value="Login with Google"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

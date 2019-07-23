import React, { Component } from "react";
import FormInput from "../helpers/FormInput";
import CustomButton from "../helpers/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "../../styles/login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
    }
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
        <h2 className="title">I have an account</h2>
        <span>Login with your email and password</span>

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

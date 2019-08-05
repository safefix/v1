import React, {Component} from 'react';
import Login from "../components/Login"
import auth0 from "@auth0/auth0-spa-js"

class LoginPage extends Component {
  render () {
  return (
        <div>
        <Login />
        </div>
  );
}
}

export default LoginPage;
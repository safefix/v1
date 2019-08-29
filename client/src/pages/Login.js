import React, {Component} from 'react';
import Login from "../components/Login";
import auth0 from "@auth0/auth0-spa-js";
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Hero from "../components/Hero";
import ProjectSelector from "../components/ProjectSelector";

class LoginPage extends Component {
  render () {
  return (
        <div>
          <Hero />
          <ProjectSelector />
          {/* <Login /> */}
          {/* <ProjectSelector /> */}
        </div>
  );
}
}

export default LoginPage;
import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProgressBar from "./components/ProgessBar";
import ProjectForm from './components/ProjectForm';
import SubmitBid from "./components/SubmitBid";
import Login from './components/Login';
import TenantForm from './components/TenantForm';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Nav />
      <Hero />
      <div class="container">
      <Login />
      <SubmitBid />
      <br/>
      <div class="row">
        <div class="col-6">
          <ProjectForm />
        </div>
        <div class="col-6">
          <TenantForm />
        </div>
      </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProgressBar from "./components/ProgessBar";
import ProjectForm from './components/ProjectForm';
import ContractorForm from "./components/ContractorForm";
import Login from './components/Login';
import TenantForm from './components/TenantForm';
import Calendly from './components/Calendly';
import CalendlyWidget from './components/CalendlyWidget';
import ProjectSelector from './components/ProjectSelector';


// const styleObj = {
//   width: "320px", 
//   height: "630px"
// };

class App extends Component {
  render() {
    return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="container">
      <Login />
      <ProjectSelector />
      <div className="row"></div>
      <ProjectForm />
      <br/>
      <div className="row">
        <div className="col-6">
          <ContractorForm />
        </div>
        <div className="col-6">
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

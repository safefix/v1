import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProgressBar from "./components/ProgessBar";
import ProjectForm from './components/ProjectForm';
import ContractorForm from "./components/ContractorForm";
//import Login from './components/Login';
import TenantForm from './components/TenantForm';
import Calendly from './components/Calendly';
import CalendlyWidget from './components/CalendlyWidget';
import ProjectSelector from './components/ProjectSelector';
import AllOwnerProjects from './components/AllOwnerProjects';

class App extends Component {

  state = {
    projectForm: false,
  }

  handleProjectFormClick = event => {

    if (this.state.projectForm) {
      this.setState.projectForm({
        projectForm: true
      })
    }
  }



  render(){
    
    return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="container">
      <AllOwnerProjects />
      </div>
      <div className="container">
      <ProjectSelector 
      handleProjectFormClick={this.handleProjectFormClick}/>
       <div className="row"></div>
      <ProjectForm 
      handleProjectFormClick={this.handleProjectFormClick}/>
      <br/> 
     <div className="row">
        <div className="col-6">
          <ContractorForm />
        </div>
        <div className="col-6">
          <TenantForm />
        </div>
    </div> 
      <ProgressBar />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <Footer /> */}
    </div>
  );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectForm from './components/ProjectForm';
import ContractorForm from "./components/ContractorForm";
import LoginPage from './pages/Login';
import TenantForm from './components/TenantForm';
import Calendly from './components/Calendly';
import GDrive from './components/GDrive'
import CalendlyWidget from './components/CalendlyWidget';
import ProjectSelector from './components/ProjectSelector';
import ProgressBar from './components/ProgessBar';
import AllOwnerProjects from './components/AllOwnerProjects';
import ContractorPage from './pages/Contractor';
import HomeownerPage from './pages/Homeowner';
import TenantPage from './pages/Tenant';
import HomeownerSaved from './pages/Homeowner-Saved';
import SavedProject from './components/SavedProject';
import HomeownerSavedProject from './pages/Homeowner-Saved-Project';
import NoMatchPage from './pages/NoMatch';


  // handleProjectFormClick = event => {

class App extends Component {

  render(){
    return (
        <Router>
          <div className="App">
            <Nav />
            {/* <Login /> */}
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route path="/homeowners" component={HomeownerPage} />
              <Route path="/contractors" component={ContractorPage} />
              <Route path="/tenants" component={TenantPage} />
              <Route path="/savedprojects" component={HomeownerSaved} />
              <Route path="/savedproject" component={HomeownerSavedProject} />
              <Route component={NoMatchPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      );

    // <div className="App">
    //   {/* <GDrive /> */}
    //   <Nav />
    //   <Hero />
    //   <div className="container">
    //   {/* {this.props.yourProject === true ? <AllOwnerProjects/>  : ''}
    //   {this.props.createProject === true ? <ProjectForm/>  : ''} */}
      
    //   <ProjectSelector 
    //   handleProjectClick={this.handleProjectClick}/>
    //    <div className="row"></div>
      
    //  <div className="row">
    //     <div className="col-6">
    //       <ContractorForm />
    //     </div>
    //     <div className="col-6">
    //       <TenantForm />
    //     </div>
    // </div> 
    //   <ProgressBar />
    //   </div>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   {/* <Footer /> */}
    // </div>
  
  }
}

export default App;

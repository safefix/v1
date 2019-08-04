import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectForm from './components/ProjectForm';
import ContractorForm from "./components/ContractorForm";
//import Login from './components/Login';
import TenantForm from './components/TenantForm';
import Calendly from './components/Calendly';
import GDrive from './components/GDrive'
import CalendlyWidget from './components/CalendlyWidget';
import ProjectSelector from './components/ProjectSelector';
import ProgressBar from './components/ProgessBar';
import AllOwnerProjects from './components/AllOwnerProjects';
import ContractorPage from './pages/Contractor';




class App extends Component {

  render(){
    return (
        <Router>
          <div className="App">
            <Nav />
            <Hero />
            <Switch>
              {/* <Route exact path="/" component={Home} />
              <Route path="/homeowners" component={HomeownerPage} /> */}
              <Route path="/contractors" component={ContractorPage} />
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

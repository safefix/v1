import React, {Component} from 'react';
import './App.css';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProjectSelector from '../components/ProjectSelector';
import ProjectForm from '../components/ProjectForm';
import ProgressBar from '../components/ProgessBar';
import Footer from '../components/Footer';

class Homeowner extends Component {
  render () {

  return (
        <div>
          <Nav />
          <Hero />
          <div className="container">
            <ProjectSelector />
            <div className="row">
              <div className="col-lg-4">
                <ProgressBar />
              </div>
              <div className="col-lg-8">
                <ProjectForm />
              </div>
            </div>
          </div>
          <br/>
          <Footer />
        </div>
  );
}
}

export default Homeowner;
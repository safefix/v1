import React, {Component} from 'react';
import ProjectSelector from '../components/ProjectSelector';
import ProjectForm from '../components/ProjectForm';
import ProgressBar from '../components/ProgessBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SavedProject from '../components/SavedProject';


function HomeownerPage (props) {

  return (
        <div>
        <Hero />
          <div className="container">
            {/* <h3 id="project-description">Welcome to handShake! Get started below.</h3>
            <br></br>
            {props.displayProjectForm}
            <button>Hello World!</button> */}
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

export default HomeownerPage;
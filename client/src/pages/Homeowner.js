import React, {Component} from 'react';
import ProjectSelector from '../components/ProjectSelector';
import ProjectForm from '../components/ProjectForm';
import ProgressBar from '../components/ProgessBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

class HomeownerPage extends Component {
  render () {

  return (
        <div>
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

export default HomeownerPage;
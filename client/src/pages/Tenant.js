import React, {Component} from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProgressBar from '../components/ProgessBar';
import Footer from '../components/Footer';
import TenantForm from '../components/TenantForm';

class TenantPage extends Component {
  render () {
  return (
        <div>
          <Hero />
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <ProgressBar />
              </div>
              <div className="col-lg-8">
                <TenantForm />
              </div>
            </div>
          </div>
          <br/> <br/> <br/> <br/> <br/> <br/>
          <Footer />
        </div>

  );
}
}

export default TenantPage;
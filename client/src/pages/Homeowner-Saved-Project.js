import React, {Component} from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProgressBar from '../components/ProgessBar';
import Footer from '../components/Footer';
import TenantForm from '../components/TenantForm';
import SavedProject from '../components/SavedProject';

class HomeownerSavedProject extends Component {
  render () {
  return (
        <div>
          <SavedProject />
          <Footer />
        </div>

  );
}
}

export default HomeownerSavedProject;
import React, {Component} from 'react';
// import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';

class NoMatch extends Component {
  render () {
  return (
        <div>
          <Nav />
          <Hero />
          <div className="col-12">
            <h1 className="text-center font-weight-bold">404 Page Not Found</h1>
            <hr></hr>
            <h4 className="text-center">Go back <ion-icon name="home"></ion-icon><a href="https://localhost:3000">Home</a>
            <ion-icon name="home"></ion-icon></h4>
          </div>
          <Footer />
        </div>
  );
}
}

export default NoMatch;
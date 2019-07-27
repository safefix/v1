import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectForm from './components/ProjectForm';
import SubmitBid from "./components/SubmitBid";
import Login from './components/Login';
import Calendar from './components/Calendar'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Nav />
      <Hero />
      <div class="container">
      <Login />
      <SubmitBid />
      <div class="row">
        <div class="col-6">
          <Calendar />
        </div>
        <div class="col-6">
          <ProjectForm />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
  }
}

export default App;

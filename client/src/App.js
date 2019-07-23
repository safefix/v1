import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/Form';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav />
          <Hero />
          <Login />
          <Form />
          <Footer />
        </div>  
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tenant from './components/Tenant';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Form />
      <Tenant />
      <Footer />
    </div>
  );
}

export default App;

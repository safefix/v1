import React from 'react';
import './App.css';
import Form from './components/Form';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

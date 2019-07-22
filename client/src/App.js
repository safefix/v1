import React from 'react';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProgressBar from "./components/ProgessBar";
import ProjectForm from './components/ProjectForm';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div class="row">
        <div class="col-6">
          <Form />
        </div>
        <div class="col-6">
          <ProjectForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

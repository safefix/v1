import React, { Component } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import API from "../utils/API";

class HomeownerSaved extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.getSavedProjects();
  }

  getSavedProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({
          projects: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleProjectDelete = id => {
    API.deleteProject(id).then(res => this.getSavedProjects());
  };

  render() {
    return (
    <div>
      <Nav />
      <Hero />
      <Footer />
    </div>
    );
  }
}

export default HomeownerSaved;
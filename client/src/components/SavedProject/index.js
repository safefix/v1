import React, {Component} from 'react';
import "./style.css";
import API from "../../utils/API"

class SavedProject extends Component {
  componentDidMount = id => {
    // let id = this.state.id;
    API.getProject({
      idprojects: id
    });
  };

  viewProjects = owner => {
    API.getProjects({
      ownerid: owner
    })
    // .then((projData) => {
    //   res.render(projData)})
  };

  deleteProject = id => {
    // let id = this.id;
    API.getProjects({
      idprojects: id
    })
    // .then((projData) => {
    //   res.render(projData)})
  };
  
  render () {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 left-column padding-0">
          <div className="card project-card">
            <div className="card-header"><h5 id="username">User Name: {this.state.username}</h5>
              </div>
                <div className="card-body">
                  <h2 className="card-title" id="project-title">Project Title: {this.state.projectname}</h2>
                  <h4 className="card-text" id="residential-address">Residential Address: {this.state.residentialAddress}</h4>
                  <h4 className="card-text" id="city">City: {this.state.city}</h4>
                  <h4 className="card-text" id="state">State:{this.state.state}</h4>
                  <h4 className="card-text" id="zip">Zip:{this.state.zip}</h4>
                  <h4 className="card-text" id="repair-cateogry">Repair Category:{this.state.repairCategory}</h4>
                  <h4 className="card-text" id="repair-timeline">Repair Timeline:{this.state.repairTimeline}</h4>
                    {/* <button type="button" className="btn project-button hvr-glow" id="invite-party">Invite a party</button> */}
                    <button type="button" className="btn project-button hvr-glow" id="view-project-files" onClick={this.viewProjects}>View project files</button>
                    <button type="button" className="btn project-button hvr-glow" id="edit-project">Edit this project</button>
                    <button type="button" className="btn project-button hvr-glow" id="delete-project" onClick={this.deleteProject}>Delete this project</button>
                </div>
                <div className="card-footer text-muted">
                  <h6 id="submitted-on">Project Submitted: 2 days ago</h6>
                </div>
            </div>

        </div>

        <div className="col-6 padding-0 right-column">
          <img src="/images/residential-neighborhood.png" alt="Neighborhood"/>
        </div>
      </div>             
    </div>
  );
}
}

export default SavedProject;
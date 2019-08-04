import React from 'react';
import "./style.css";

const styleObj = {
    width: "18rem",
}

function AllOwnerProjects () {
    return (
      <div>
        
        <div className="col mx-auto offset-*">
        <h2 id="current-projects-header">Your Current Projects:</h2>
        </div>

          <div className="card project-card hvr-reveal" style={styleObj}>
              <img className="card-img-top img-fluid project-image hvr-reveal" src="/images/home-repair-4.png" alt="Card cap"/>
                <div className="card-body">
                  <h3 className="card-title project-title">Project Title 1</h3>
                  <h5 className="card-text">Project Timeline:</h5>
                  <h5 className="card-text">Repair Timeline:</h5>
                    <div className="button-holder">
                      <button type="button" className="btn view-project">View Project</button>
                      <button type="button" className="btn delete-project">Delete Project</button>
                    </div>
                  
                </div>
            </div>

            <div className="card project-card hvr-reveal" style={styleObj}>
              <img className="card-img-top img-fluid project-image hvr-reveal" src="/images/home-repair-2.png" alt="Card cap"/>
                <div className="card-body">
                  <h3 className="card-title project-title">Project Title 2</h3>
                  <h5 className="card-text">Project Timeline:</h5>
                  <h5 className="card-text">Repair Timeline:</h5>
                    <div className="button-holder">
                      <button type="button" className="btn view-project">View Project</button>
                      <button type="button" className="btn delete-project">Delete Project</button>
                    </div>
                  
                </div>
            </div>

            <div className="card project-card hvr-reveal" style={styleObj}>
              <img className="card-img-top img-fluid project-image hvr-reveal" src="/images/home-repair-3.png" alt="Card cap"/>
                <div className="card-body">
                  <h3 className="card-title project-title">Project Title 3</h3>
                  <h5 className="card-text">Project Timeline:</h5>
                  <h5 className="card-text">Repair Timeline:</h5>
                    <div className="button-holder">
                      <button type="button" className="btn view-project">View Project</button>
                      <button type="button" className="btn delete-project">Delete Project</button>
                    </div>
                  
                </div>
            </div>
    
       </div>
    );
}

export default AllOwnerProjects;
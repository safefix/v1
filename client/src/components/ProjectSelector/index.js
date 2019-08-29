import React, {Component} from "react";
import "./style.css";
import HomeownerPage from "../../pages/Homeowner";
// import { useAuth0 } from "../../react-auth0-wrapper";


function ProjectSelector (props) {
// const {isAuthenticated} = useAuth0();
    
  
    return (
        <div className="project-selector-buttons">

          <button path="/homeowners" className="btn hvr-underline-from-left" id="create-project" >CREATE A PROJECT
          </button>

          <button onClick={props.handleOnClick} type="button" className="btn hvr-underline-from-left" id="view-project">VIEW YOUR PROJECTS
          </button>

        </div>
    )};



export default ProjectSelector;
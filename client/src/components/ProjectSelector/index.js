import React, {Component} from "react";
import "./style.css";
// import { useAuth0 } from "../../react-auth0-wrapper";


function ProjectSelector (props) {
// const {isAuthenticated} = useAuth0();
    
  
    return (
        <div className="project-selector-buttons">
          <button onClick={props.handleOnClick} type="button" className="btn hvr-underline-from-left">CREATE A PROJECT
          </button>

          <button onClick={props.handleOnClick} type="button" className="btn hvr-underline-from-left">VIEW YOUR PROJECTS
          </button>
        </div>
    )};



export default ProjectSelector;
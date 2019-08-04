import React from 'react';
import "./style.css";
import { getThemeProps } from '@material-ui/styles';
// import { useAuth0 } from "../../react-auth0-wrapper";


function ProjectSelector (props) {
// const {isAuthenticated} = useAuth0();

    if (!props.handleProjectFormClick) {
      return null;
    }

    return (
        <div className="col">
            <button type="button" className="btn hvr-underline-from-left">YOUR PROJECTS</button>

            <button type="button" className="btn hvr-underline-from-left" onClick={props.handleProjectFormClick}>CREATE A PROJECT</button>
        </div>
    );
}



export default ProjectSelector;
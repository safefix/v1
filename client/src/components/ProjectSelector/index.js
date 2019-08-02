import React from 'react';
import "./style.css";

function ProjectSelector () {
    return (
        <div className="col">
            <button type="button" className="btn hvr-underline-from-left">YOUR PROJECTS</button>

            <button type="button" className="btn hvr-underline-from-left" id="create-project-button">CREATE A PROJECT</button>
        </div>
    );
}

export default ProjectSelector;
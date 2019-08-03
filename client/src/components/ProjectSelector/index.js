import React, {Component} from 'react';
import "./style.css";

class ProjectSelector extends Component {

  handleOnClick = event => {
    event.preventDefault();
  }

  render() {

    return (
        <div className="col">
            <button type="button" className="btn hvr-underline-from-left" onClick={this.handleOnClick}>YOUR PROJECTS</button>

            <button type="button" className="btn hvr-underline-from-left" onClick={this.handleOnClick}>CREATE A PROJECT</button>
        </div>
    );
}
}

export default ProjectSelector;
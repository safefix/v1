import React, {Component} from "react";
import "./style.css";
// import { useAuth0 } from "../../react-auth0-wrapper";


class ProjectSelector extends Component {
// const {isAuthenticated} = useAuth0();

    state = {
        yourProject: false,
        createProject: false
    }
    

    // handleProjectClick = event => {
    //     if (event) {
    //     this.setState({
    //         yourProject: true
    //     })
    //     }
    //     else if (event){
    //         this.setState({
    //         createProject: true
    //         })
    //     }
    //     }
  
    render(){
        console.log(this.state.createProject);
    return (
        <div className="col">
            <button type="button" className="btn hvr-underline-from-left" onClick={this.setState({ yourProject: true})}>YOUR PROJECTS</button>

            <button type="button" className="btn hvr-underline-from-left" onClick={this.setState({ createProject: true})}>CREATE A PROJECT</button>
        </div>
    )};
}



export default ProjectSelector;
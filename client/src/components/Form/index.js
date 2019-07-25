/* eslint-disable no-unused-vars */
import React, {Component} from "react";
import Button from 'react-bootstrap/Button';

class Form extends Component{
    //initial state of the component
    state = {
        projectName: "",
        residenceNumber: "",
        residenceStreet: "",
        residenceAddr2: "",
        residenceCity: "",
        residenceState: "",
        residenceZip: "",
        repairCategory: "",
        repairDetail: "",
        repairTimeline: "", 
        otherComments: ""
    }

    handleInputChange = event => {
        const { name, value} = event.target;

        this.setState({
            [name]: value
          });
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
        alert(`Thank you, ${this.state.firstName}. Your project has been submited.`);
        this.setState({
            projectName: "",
            residenceNumber: "",
            residenceStreet: "",
            residenceAddr2: "",
            residenceCity: "",
            residenceState: "",
            residenceZip: "",
            repairCategory: "",
            repairDetail: "",
            repairTimeline: "", 
            otherComments: ""
        });
      };



    render() {
        return (
            <div>
                <form className="form">
                    <input
                    value={this.state.projectName}
                    name="projectName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Project Name"
                    />
                    <br/>
                    <input
                    value={this.state.residenceNumber}
                    name="residenceNumber"
                    onChange={this.handleInputChange}
                    type="text" pattern="[0-9]*"
                    placeholder="Residence Number"
                    />
                    <br/>
                    <input
                    value={this.state.residenceStreet}
                    name="residenceStreet"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Address Line 1"
                    />
                    <br/>                   
                    <input
                    value={this.state.residenceAddr2}
                    name="residenceAddr2"
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="Address Line 2"
                    />
                    <br/>
                    <input
                    value={this.state.residenceCity}
                    name="residenceCity"
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="City"
                    />
                    <br/>
                    <input
                    value={this.state.residenceState}
                    name="residenceState"
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="State"
                    />
                    <br/>
                    <input
                    value={this.state.residenceZip}
                    name="residenceZip"
                    onChange={this.handleInputChange}
                    type="text" pattern="[0-9]*" 
                    placeholder="Zip Code"
                    />
                    <br/>
                    <input
                    value={this.state.repairCategory}
                    name="repairCategory"
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="Repair Category"
                    />
                    <br/>
                    <input
                    value={this.state.repairDetail}
                    name="repairDetail"
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="Repair Detail"
                    />
                    <br/>
                    <input
                    value={this.state.timeline}
                    name="timeline"
                    onChange={this.handleInputChange}
                    type="date" 
                    placeholder="Timeline"
                    />
                    <br/>
                    <input
                    value={this.state.otherComments}
                    name="otherCoomments"
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="Additional Comment"
                    />
                    <br/>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;


//timeline needs to be a dropdown with options:
// Urgent/ASAP
// One to two weeks
// Two to four weeks
// Not time sensitive

// add fielcs based on the TableSchemas
// missing 3rd party comment field on schema


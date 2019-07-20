/* eslint-disable no-unused-vars */
import React, {Component} from "react";

class Form extends Component{
    //initial state of the component
    state = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        resAddress: "",
        serviceReq: "",
        budget: "",
        timeline: ""
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
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            resAddress: "",
            serviceReq: "",
            budget: "",
            timeline: ""
        });
      };



    render() {
        return (
            <div>
                <form className="form">
                    <input
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                    />
                    <br/>
                    <input
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    />
                    <br/>                   
                    <input
                    value={this.state.phoneNumber}
                    name="phoneNumber"
                    onChange={this.handleInputChange}
                    type="text" pattern="[0-9]*"
                    placeholder="Phone Number"
                    />
                    <br/>
                    <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="email" 
                    placeholder="Email"
                    />
                    <br/>
                    <input
                    value={this.state.resAddress}
                    name="resAddress"
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="Residential Address"
                    />
                    <br/>
                    <input
                    value={this.state.serviceReq}
                    name="serviceReq"
                    onChange={this.handleInputChange}
                    type="text" 
                    placeholder="Service Requested"
                    />
                    <br/>
                    <input
                    value={this.state.budget}
                    name="budget"
                    onChange={this.handleInputChange}
                    type="text" pattern="[0-9]*"
                    placeholder="Budget"
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
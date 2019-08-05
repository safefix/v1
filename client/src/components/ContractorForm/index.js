import React, {Component} from "react";
import "./style.css"
import CalendlyWidget from "../CalendlyWidget";
import API from "../../utils/API"

class ContractorForm extends Component {
    constructor (props) {
      super (props);
      this.state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        companyName: '',
        proposedPrice: '',
        projectTimeframe: '',
        projectNotes: ''
      }
    }

    handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
    }

    handleFormSubmit = event => {
      API.createContractor(this.state)
      event.preventDefault();
    }

    render () {
        return (
            <div>
            
            <form className="submit-bid-form text-left secondary-background">
                <h4 className="text-center" id="submit-bid-form-title">Contractor Form</h4>
                
                <div className="form-row">
                  <div className="form-group col-md-6 form-first-name">
                    <label for="input-first-name">First Name</label>
                    <input value={this.state.firstName} name="firstName" onChange={this.handleInputChange} type="text" className="form-control" id="bidder-first-name"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="input-last-name">Last Name</label>
                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleInputChange} className="form-control" id="bidder-last-name"/>
                  </div>

                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <ion-icon name="phone-portrait"></ion-icon>
                    <label for="phone-number">Phone Number</label>
                    <input type="tel" value={this.state.phone} name="phone" onChange={this.handleInputChange} className="form-control" id="bidder-phone-number"/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <ion-icon name="mail"></ion-icon>
                    <label for="email">Email</label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleInputChange} className="form-control" id="bidder-email"/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="company-name">Company Name</label>
                    <input type="text" value={this.state.companyName} name="companyName" onChange={this.handleInputChange} className="form-control" id="bidder-company-name"/>
                  </div>
                </div>

                <div className="form-row">

                  <div className="form-group col-md-9">
                    <ion-icon name="cash"></ion-icon>
                    <label for="proposed-price">Proposed Price</label>
                    <input type="text" value={this.state.proposedPrice} name="proposedPrice" onChange={this.handleInputChange} className="form-control" id="bidder-proposed-price"/>
                  </div>

                  <div className="form-group col-md-3 text-center">
                  <ion-icon name="attach"></ion-icon>
                  <label for="attach-images text-center">Attach Important Files</label>
                  

                    <div className="wrapper">
                      <div className="file-upload">
                        <input type="file" />
                        <ion-icon name="cloud-upload" id="upload-icon"></ion-icon>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group col-lg-6">
                    <ion-icon name="clock"></ion-icon>
                    <label for="project-timeframe">Project timeframe</label>
                    <select id="bidder-timeframe" value={this.state.projectTimeframe} name="projectTimeframe" onChange={this.handleInputChange} className="form-control">
                        <option value="A">Under 1 Week</option>
                        <option value="B">1-2 Weeks</option>
                        <option value="C">2-3 Weeks</option>
                        <option value="D">Other</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-6">
                    <CalendlyWidget />
                  </div>

                </div>

                <div className="form-group">
                  <ion-icon name="clipboard"></ion-icon>
                  <label for="project-notes">Project Notes</label>
                  <textarea className="form-control" value={this.state.projectNotes} name="projectNotes" onChange={this.handleInputChange}id="bidder-project-notes" rows="3"></textarea>
                </div>
            
                <div className="col text-center">
                  <button className="btn btn-block" type="submit" value="Submit" id="submit-form">
                    <ion-icon name="checkmark-circle-outline" id="contractor-submit-form-icon"></ion-icon>
                  Submit
                  </button>
                </div>

    
            </form>

            </div>
        )
    }

}

export default ContractorForm;
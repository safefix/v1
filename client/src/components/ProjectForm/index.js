import React, {Component} from "react";
import "./style.css"
import API from "../../utils/API"

class ProjectForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
        projectName: '',
        residenceAddr: '',
        residenceCity: '',
        residenceState: '',
        residenceZip: '',
        googleDrive: '',
        inviteTenant1: '',
        inviteTenant2: '',
        inviteThirdParty1: '',
        inviteThirdParty2: '',
        repairCategory: '',
        repairDetail: '',
        repairTimeline: '',
        repairComments: ''
        }
    }

    handleInputChange = event => {
       const {name, value} = event.target;
       this.setState({
           [name]: value
           });
        }

    handleFormSubmit = event => {
        API.createProject(this.state)
        event.preventDefault();

    }

render () {
    return (
        <div>
            <form className="text-left project-form secondary-background">
              <h4 className="text-center" id="form-title">Project Form</h4>
                <div className="form-group input-section">
                    <ion-icon name="construct" className="icons"></ion-icon>
                    <label for="projectName">Project Name</label>
                    <input value={this.state.projectName} name="projectName" onChange={this.handleInputChange} type="text" className="form-control" id="formGroupExampleInput" />
                </div>

                <div className="form-group">
                    <ion-icon name="home"></ion-icon>
                    <label for="residentialAddress">Residential Address</label>
                    <input value={this.state.residenceAddr} name="residenceAddr" onChange={this.handleInputChange} type="text" className="form-control" id="formGroupExampleInput"/>
                </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <ion-icon name="outlet"></ion-icon>
                    <label for="inputCity">City</label>
                    <input value={this.state.residenceCity} name="residenceCity" onChange={this.handleInputChange} type="text" className="form-control" id="inputCity"/>
                </div>

                <div className="form-group col-md-4">
                    <ion-icon name="pin"></ion-icon>
                    <label for="inputState">State</label>
                      <select id="inputState" value={this.state.residenceState} name="residenceState" onChange={this.handleInputChange} className="form-control">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                </div>

                <div className="form-group col-md-2">
                    <ion-icon name="compass"></ion-icon>
                    <label for="inputZip">Zip</label>
                    <input value={this.state.residenceZip} name="residenceZip" onChange={this.handleInputChange} type="text" className="form-control" id="inputZip"/>
                </div>
            </div>

            <div className="form-group">
                    <ion-icon name="logo-google"></ion-icon>
                    <label for="googleDrive">Google Drive Link</label>
                    <input value={this.state.googleDrive} name="googleDrive" onChange={this.handleInputChange} type="text" className="form-control" id="googleDriveLink"/>
            </div>

            <div className="form-row">

              <div className="form-group col-md-6">
                  <label for="inviteTenant1">Invite Tenant (Optional)</label>
                  <input value={this.state.inviteTenant1} name="inviteTenant1" onChange={this.handleInputChange} type="text" className="form-control" placeholder="tenant1@gmail.com" id="invite-tenant-1"/>
              </div>

              <div className="form-group col-md-6">
                  <label for="inviteTenant2">Invite 2nd Tenant (Optional)</label>
                  <input value={this.state.inviteTenant2} name="inviteTenant2" onChange={this.handleInputChange} type="text" className="form-control" placeholder="tenant2@gmail.com" id="invite-tenant-2"/>
              </div>

            </div>

            <div className="form-row">

            <div className="form-group col-md-6">
                <label for="3">Invite 3rd Party (Optional)</label>
                <input value={this.state.inviteThirdParty1} name="3" onChange={this.handleInputChange} type="text" className="form-control" placeholder="newparty1@gmail.com" id="invite-3rd-party-1"/>
            </div>

            <div className="form-group col-md-6">
                <label for="inviteThirdParty2">Invite Another 3rd Party (Optional)</label>
                <input value={this.state.inviteThirdParty2} name="inviteThirdParty2" onChange={this.handleInputChange} type="text" className="form-control" placeholder="newparty2@gmail.com" id="invite-3rd-party-2"/>
            </div>

            </div>

            <div className="form-row">

                <div className="form-group col-md-6">
                <ion-icon name="reorder"></ion-icon>
                <label for="repairCategory">Repair Category:</label>
                    <select value={this.state.repairCategory} name="repairCategory" onChange={this.handleInputChange} id="repair-category" className="form-control">
                      <option value="option-1">This</option>
                      <option value="option-2">That</option>
                      <option value="option-3">Or</option>
                      <option value="option-4">This and That</option>
                    </select>
                </div>

                <div className="form-group col-md-6">
                <ion-icon name="alarm"></ion-icon>
                <label for="repairTimeline">Repair Timeline:</label>
                    <select value={this.state.repairTimeline} name="repairTimeline" onChange={this.handleInputChange} id="repair-timeline" className="form-control">
                    <option value="ASAP">ASAP</option>
                    <option value="1week">Under 1 Week</option>
                    <option value="2weeks">Under 2 Weeks</option>
	                <option value="3weeks">Under 3 weeks</option>
	                <option value="4weeks">Under 4 weeks</option>

                    </select>
                </div>

            </div>

            <div className="form-group">
              <ion-icon name="clipboard"></ion-icon>
              <label for="repairDetail">Repair Detail</label>
              <textarea className="form-control" id="repairDetails" rows="2" placeholder="Please share any information that would help interested contractors submit a bid that best fits your needs." value={this.state.repairDetail} name="repairDetail" onChange={this.handleInputChange}></textarea> 
            </div>

            <div className="form-group">
                <ion-icon name="text"></ion-icon>
                <label for="repairComments">Repair Comments:</label>
                <textarea value={this.state.repairComments} onChange={this.handleInputChange} name="repairComments" class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Any additional comments? Let us know here."></textarea>
            </div>

            <div className="col text-center submit-button">
              <button onClick={this.handleFormSubmit} className="btn btn-block" type="submit" value="Submit" id="submit-form">
                <ion-icon name="checkmark-circle-outline" id="contractor-submit-form-icon"></ion-icon>Submit
              </button>
            </div>

            </form>
        </div>
    )
}

}

export default ProjectForm;
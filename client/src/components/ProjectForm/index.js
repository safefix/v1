import React, {Component} from "react";
import "./style.css"

class ProjectForm extends Component {
    state = {
        // fields on input form
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

    handleFormSubmit = event => {
        event.preventDefault();

        // update values to what user provided
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
        })
    }

render () {
    return (
        <div>
            <form className="text-left project-form secondary-background">
              <h4 className="text-center" id="form-title">Project Form</h4>
                <div className="form-group input-section">
                    <ion-icon name="construct" className="icons"></ion-icon>
                    <label for="projectName">Project Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"/>
                </div>

                <div className="form-group">
                    <ion-icon name="home"></ion-icon>
                    <label for="residentialAddress">Residential Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"/>
                </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <ion-icon name="outlet"></ion-icon>
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>

                <div className="form-group col-md-4">
                    <ion-icon name="pin"></ion-icon>
                    <label for="inputState">State</label>
                      <select id="inputState" class="form-control">
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
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>

            <div className="form-row">

                <div className="form-group col-md-6">
                <ion-icon name="reorder"></ion-icon>
                <label for="repairCategory">Repair Category:</label>
                    <select id="repair-category" class="form-control">
                      <option value="option-1">This</option>
                      <option value="option-2">That</option>
                      <option value="option-3">Or</option>
                      <option value="option-4">This and That</option>
                    </select>
                </div>

                <div className="form-group col-md-6">
                <ion-icon name="alarm"></ion-icon>
                <label for="repairTimeline">Repair Timeline:</label>
                    <select id="repair-timeline" className="form-control">
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
              <textarea className="form-control" id="repairDetails" rows="2" placeholder="Please share any information that would help interested contractors submit a bid that best fits your needs."></textarea> 
            </div>

            <div className="form-group">
                <ion-icon name="text"></ion-icon>
                <label for="repairComments">Repair Comments:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Any additional comments? Let us know here."></textarea>
            </div>

            <div className="col text-center submit-button">
            <input className="btn btn-block" type="submit" value="Submit" id="submit-form"/>
            </div>

            </form>
        </div>
    )
}

}

export default ProjectForm;
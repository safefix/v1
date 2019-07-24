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
                    <option selected>Choose...</option>
                    <option>...</option>
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
                    <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>

                <div className="form-group col-md-6">
                <ion-icon name="alarm"></ion-icon>
                <label for="repairTimeline">Repair Timeline:</label>
                    <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>

            </div>

            <div className="form-group">
              <ion-icon name="clipboard"></ion-icon>
              <label for="repairDetail">Repair Detail</label>
              <textarea className="form-control" id="repairDetails" rows="2"></textarea> 
            </div>

            <div className="form-group">
                <ion-icon name="text"></ion-icon>
                <label for="repairComments">Repair Comments:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>

            <div className="col text-center">
            <input className="btn btn-primary btn-block" type="submit" value="Submit" id="submit-form"/>
            </div>

            </form>
        </div>
    )
}

}

export default ProjectForm;
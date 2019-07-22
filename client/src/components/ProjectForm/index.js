import React, {Component} from "react";

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
            <h4>Project Form</h4>
            <form className="text-left">
                <div className="form-group">
                    <label for="projectName">Project Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Project Name"/>
                </div>

                <div className="form-group">
                    <label for="residentialAddress">Residential Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Residential Address"/>
                </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>

                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>

                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>

            <div className="form-row">

                <div className="form-group col-md-6">
                <label for="repairCategory">Repair Category:</label>
                    <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>

                <div className="form-group col-md-6">
                <label for="repairTimeline">Repair Timeline:</label>
                    <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>

            </div>

            <div className="form-group">
                <label for="repairComments">Repair Comments:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>

            </form>
        </div>
    )
}

}

export default ProjectForm;
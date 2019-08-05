import React, {Component} from "react";
import "./style.css"
import API from "../../utils/API"

class TenantForm extends Component {
    constructor (props) {
      super (props);
      this.state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        residenceAddr: '',
        residenceCity: '',
        residenceState: '',
        residenceZip: '',
        com00: ''
      }
    }

    handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
    }

    handleFormSubmit = event => {
      API.createTenant(this.state)
        event.preventDefault();
    }

render () {
    return (
    <div>

      <form className="text-left tenant-form secondary-background">

              <h4 className="text-center" id="tenant-form-header">Tenant Form</h4>

                <div className="form-row">

                    <div className="form-group col-md-6">
                      <label for="tenantFirstName">First Name</label>
                      <input type="text" value={this.state.firstName} onChange={this.handleInputChange} name="firstName" className="form-control" id="tenant-first-name-input"/>
                    </div>

                    <div className="form-group col-md-6">
                      <label for="tenantLastName">Last Name</label>
                      <input type="text" value={this.state.lastName} onChange={this.handleInputChange} name="lastName" className="form-control" id="tenant-last-name-input"/>
                    </div>

                </div>

                <div className="form-row">

                  <div className="form-group col-md-4">
                    <ion-icon name="phone-portrait"></ion-icon>
                    <label for="tenantPhoneNumber">Phone #</label>
                    <input type="text" value={this.state.phone} onChange={this.handleInputChange} name="phone" className="form-control" id="tenant-phone-number"/>
                  </div>

                  <div className="form-group col-md-8">
                    <ion-icon name="mail"></ion-icon>
                    <label for="tenantEmail">Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleInputChange} name="email" className="form-control" id="tenant-email-address"/>
                  </div>

                </div>

            <div className="form-group">
            <ion-icon name="home"></ion-icon>
              <label for="tenantResidentialAddress">Address of Repair Location</label>
              <input type="text" value={this.state.residenceAddr} onChange={this.handleInputChange} name="residenceAddr" className="form-control" id="tenant-repair-address"/> 
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <ion-icon name="outlet"></ion-icon>
                <label for="tenantCity">City</label>
                <input type="text" value={this.state.residenceCity} onChange={this.handleInputChange} name="residenceCity" class="form-control" id="tenant-city"/>
              </div>

              <div className="form-group col-md-4">
                <ion-icon name="pin"></ion-icon>
                <label for="tenantState">State</label>
                <select id="tenant-state" class="form-control" value={this.state.residenceState} onChange={this.handleInputChange} name="residenceState">
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
                <label for="tenantZip">Zip</label>
                <input type="text" value={this.state.residenceZip} onChange={this.handleInputChange} name="residenceZip" class="form-control" id="tenant-zip"/>
              </div>

            </div>

            <div className="form-group">
              <ion-icon name="text"></ion-icon>
              <label for="tenantRepairComments">Comments/Complaints</label>
              <textarea value={this.state.com00} onChange={this.handleInputChange} name="com00" className="form-control" id="tenant-repair-comments" rows="3" placeholder="Anything else? Let us know below."></textarea>
            </div>

            <div className="col text-center submit-button">
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

export default TenantForm;
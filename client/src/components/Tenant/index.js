/* eslint-disable no-unused-vars */
import React, {Component} from "react";

class Tenant extends Component{
   state = {
       fullName: "",
       comments: ""
   };

   handleInputChange = event => {
    const { name, value} = event.target;

    this.setState({
        [name]: value
      });
};


handleFormSubmit = event => {
    event.preventDefault();

    alert(`Thank you, ${this.state.fullName}. Your comment has been sent.`);
    this.setState({
        fullName: "",
        comments: ""
    });
  };

    render() {
        return(
            <div>
                <form className="form">
                    <input
                    value={this.state.fullName}
                    name="fullName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Full Name"
                    />
                    <br/>
                    <input
                    value={this.state.comments}
                    name="comments"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Insert your comment here"
                    />
                      <br/>
                <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <div class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false">
                Calendly.initInlineWidget({
                    url: 'https://calendly.com/terena-blasberg',
                    prefill: {},
                    utm: {}
                });
            </div>
          </div>
        )
    }
}


export default Tenant;
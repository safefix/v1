/* eslint-disable jsx-a11y/iframe-has-title */
import React, {Component} from "react";
import API from "../../utils/API";
var axios = require("axios");


class GDrive extends Component {
    state = {
      gDrive: ""
    }

    // https://drive.google.com/embeddedfolderview?id=1cse1H3HnHNAtH-2la6UG7FnbMXHuwH8e#grid
 
    componentDidMount() {
      API.getProject(this.state.ownerid)

        axios({
          method: "get",
          url: "/api/projects/{idprojects}/gdrive",
          }
        )
          .then(response => {
            if (response && response.data) {
              this.setState({ gDrive: response.data });
            }
          })
          .catch(error => console.log(error));
      };

      // --------------------------------------------
      
      
      render(){

        //manipulate the url
        const {gDrive} = this.state.gDrive;

        return (
            <div>
                <iframe src={gDrive} height="500" width="600" />   
            </div>           
        )
    }
}       

export default GDrive;
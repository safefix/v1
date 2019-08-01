/* eslint-disable jsx-a11y/iframe-has-title */
import React, {Component} from "react";
var axios = require("axios");


class GDrive extends Component {
    state = {
      gDrive: ""
    }

    // https://drive.google.com/embeddedfolderview?id=1cse1H3HnHNAtH-2la6UG7FnbMXHuwH8e#grid
 
    componentDidMount() {
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
        const {gDrive} = this.state;

        return (
            <div>
                <iframe src={gDrive} height="500" width="600" />         
            </div>           
        )
    }
}       

export default GDrive;
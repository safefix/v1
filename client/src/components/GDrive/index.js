/* eslint-disable jsx-a11y/iframe-has-title */
import React, {Component} from "react";
import API from "../../utils/API";
var axios = require("axios");


class GDrive extends Component {
    state = {
      gDrive: "",
      id:"",
      url: ""
    }
    // FORMAT FOR URL FOR IFRAME
    // https://drive.google.com/embeddedfolderview?id=1cse1H3HnHNAtH-2la6UG7FnbMXHuwH8e#grid

    // https://drive.google.com/drive/folders/1cse1H3HnHNAtH-2la6UG7FnbMXHuwH8e?usp=sharing
 
    componentDidMount() {
      API.getProject(this.state.ownerid)

        axios({
          method: "get",
          url: "/api/projects/{idprojects}/gdrive",
          }
        )
          .then(response => {
            if (response.data) {
            
            //check the correct response (object path)
                this.setState({
                   url: 'https://drive.google.com/embeddedfolderview?id=' + response.data.split("folders/")[1].split("?")[0] + '#grid'
                  });
            }
          })
          .catch(error => console.log(error));
      };

        render(){
          return (
            <div>
                <iframe src={this.state.url} height="500" width="600" />   
            </div>           
        )
    }
}       

export default GDrive;
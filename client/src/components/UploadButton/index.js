import React, {Component} from "react";



class UploadButton extends Component {

  
     clientId = "167026197339-9udiks4co90djelnkdg8vchrrjilk8rf.apps.googleusercontent.com";

     // redirect_uri of the project

     redirect_uri = "http://localhost/upload.html";

     // scope of the project

     scope = "https://www.googleapis.com/auth/drive";

     // the url to which the user is redirected to

     url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+this.redirect_uri
     +"&prompt=consent&response_type=code&client_id="+this.clientId+"&scope="+this.scope
     +"&access_type=offline";


    signIn(clientId,redirect_uri,scope,url){
    
        window.location = url;
    }


    render(){
        return(
            <button id="login" onClick={() =>
                this.signIn(this.clientId,this.redirect_uri,this.scope,this.url)        
            }>
            Upload Files to Drive
            </button>
        )
    }
}




export default UploadButton;
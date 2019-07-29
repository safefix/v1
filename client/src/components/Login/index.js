import React from "react";
import "./style.css";
import { useAuth0 } from "../../react-auth0-wrapper";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (

        <div id="holder">

        <div className="button">

        <button
          onClick={() =>
            loginWithRedirect({})
            
          }
        >
          <p className="btnText">LOGIN?</p>
          <div className="btnTwo">
            <p className="btnText2">GO!</p>
          </div>
        </button>

        </div>

        </div>


      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

    </div>
  );
};

export default Login;
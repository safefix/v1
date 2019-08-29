import React from "react";
import "./style.css";


function Footer () {
  return (
<nav className="navbar navbar-expand-sm sticky-footer" id="footer">
    {/* <ul className="navbar-nav mr-auto">
      <li className="nav-item active" id="footer-copyright">
        <a className="navbar-brand" href="https://localhost:3000">© hand<span id="shake-footer">Shake</span> 2019</a>
      </li>
    </ul> */}

    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item mr-auto">
        <a className="nav-link hvr-underline-reveal" id="saved-project" href="http://localhost:3000/savedproject">Homeowner Project</a>
      </li>

      <li className="nav-item mr-auto">
        <a className="nav-link hvr-underline-reveal" id="saved-projects" href="http://localhost:3000/savedprojects">Sample Projects</a>
      </li>

      <li className="nav-item mr-auto">
        <a className="nav-link hvr-underline-reveal" id="contact-us" href="mailto:handshake@gmail.com">Email Us</a>
      </li>
    </ul>
</nav>
  );
}

export default Footer;

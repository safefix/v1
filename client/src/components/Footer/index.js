import React from "react";
import "./style.css";


function Footer () {
  return (
<nav className="navbar navbar-expand-lg sticky-footer">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active" id="footer-copyright">
        <a className="nav-link" href="https://localhost:3000">© handShake 2019 <span className="sr-only">(current)</span></a>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="https://localhost:3000">Privacy Policy</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://localhost:3000">Sitemap</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://localhost:3000">For Developers</a>
      </li>
      
      <li className="nav-item mr-auto">
        <a className="nav-link" id="contact-us" href="https://localhost:3000">contactus@handshake.com</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Footer;

import React from "react";
import "./style.css";

function Nav (props) {
  return (
<nav className="navbar navbar-expand-sm sticky-top nav-background" id="top-nav">
    <img className="nav-logo" src="https://i.ibb.co/9njq0P2/handshake-logo-v5.png" alt="handshake" height="70px" width="65px"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  handShake Menu
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="navbar-brand" href="http://localhost:3000">hand<span id="shake-logo">Shake</span></a>
      </li>
    </ul>

    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link hvr-underline-reveal" href="http://localhost:3000/homeowners">Homeowners</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hvr-underline-reveal" href="http://localhost:3000/contractors">Contractors</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hvr-underline-reveal" href="http://localhost:3000/tenants">Tenants</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;

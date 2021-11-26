import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar sticky-top navbar-dark" >
        <span className="navbar-brand mb-0 h1">MalWart</span>

  
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Departments <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Account
            </a>
            <a className="nav-item nav-link" href="#">
              My Cart
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

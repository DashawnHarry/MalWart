import React from "react";
import './NavBar.css'

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className='navbar sticky-top navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>MalWart</span>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Departments <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Account</a>
            <a class="nav-item nav-link" href="#">My Cart</a>

          </div>
        </div>
      </nav>


      {/* <div className="navbar">
        <div className="malwart">Malwart</div>
        <button className="navbutton" variant="contained">
          Departments
        </button>
        <input className="navsearch" placeholder="Search..."></input>
        <button className="navbutton">My Items</button>
        <button className="navbutton">Account</button>
        <button className="cartbutton">My Cart</button>
      </div> */}
    </React.Fragment>
  );
};

export default NavBar;

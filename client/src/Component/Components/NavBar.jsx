import React from "react";
import './NavBar.css'

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="malwart">Malwart</div>
        <button className="navbutton" variant="contained">
          Departments
        </button>
        <input className="navsearch" placeholder="Search..."></input>
        <button className="navbutton">My Items</button>
        <button className="navbutton">Account</button>
        <button className="cartbutton">My Cart</button>
      </div>
    </React.Fragment>
  );
};

export default NavBar;

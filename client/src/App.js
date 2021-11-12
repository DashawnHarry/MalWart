import React, { Component } from "react";
import Button from "@mui/material/Button";
import $ from "jquery";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    $.get("/test").then((data) => console.log(data));
  }

  render() {
    return (
      <React.Fragment>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='carouselink'>
                <h1 className='carouselhead'>Shop at Malwart Today</h1>
                <button type="button" className="btn btn-primary">Shop Now</button>
              </div>
              <img className="d-block w-80" src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" alt="First slide"></img>
            </div>
            <div className="carousel-item">
              <div className='carouselink'>
                <h1 className='carouselhead'>Great selections for your needs</h1>
                <button type="button" className="btn btn-primary">Shop Now</button>
              </div>
              <img className="d-block w-80" src="https://www.wallpaperbetter.com/wallpaper/690/846/421/usa-maroon-bells-colorado-720P-wallpaper-middle-size.jpg" alt="Second slide"></img>
            </div>
            <div className="carousel-item">
              <div className='carouselink'>
                <h1 className='carouselhead'>Jump into these deals now!</h1>
                <button type="button" className="btn btn-primary">Shop Now</button>
              </div>
              <img className="d-block w-80" src="https://img.wallpapic.com/i8155-741-825/thumb/hanging-lake-waterfall-nature-colorado-wallpaper.jpg" alt="Third slide"></img>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="navbar">
          <div className='malwart'>Malwart</div>
          <button className="navbutton" variant="contained">Departments</button>
          <input className='navsearch' placeholder='Search...'></input>
          <button className='navbutton'>My Items</button>
          <button className='navbutton'>Account</button>
          <button className='cartbutton'>My Cart</button>
        </div>
      </React.Fragment>
    );
  }
}

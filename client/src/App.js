import React, { Component } from "react";
import Button from "@mui/material/Button";
import $ from "jquery";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }


  }

  handleClick() {

  }

  componentDidMount() {
    $.get("/api/products").then((data) => {
      const arraytemp = data.map(url => url.image)
      console.log(arraytemp);
      this.setState({ products: [...arraytemp] }
      )
    }
    )
  }

  render() {
    console.log('error ' + this.state.products.length)
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
              <img className="d-block w-80" src={this.state.products[7]} alt="First slide"></img>
            </div>
            <div className="carousel-item">
              <div className='carouselink'>
                <h1 className='carouselhead'>Great selections for your needs</h1>
                <button type="button" className="btn btn-primary">Shop Now</button>
              </div>
              <img className="d-block w-80" src={this.state.products[8]} alt="Second slide"></img>
            </div>
            <div className="carousel-item">
              <div className='carouselink'>
                <h1 className='carouselhead'>Jump into these deals now!</h1>
                <button type="button" className="btn btn-primary">Shop Now</button>
              </div>
              <img className="d-block w-80" src={this.state.products[4]} alt="Third slide"></img>
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
//End of carousel

        //Start Of Category Section
        <div className="product categorys">
          <div className='product box'>
            <div>Christmas Selection</div>

            <div id='catagorycarousel' className='carousel' data-ride='carousel'>
              <div className='carouselInner'>
                <div className='carousel-item active'>
                  <div className='productview'>
                    <a href={this.state.products[0]}>
                      <img className="d-block w-20" src={this.state.products[7]} alt="First slide"></img>
                    </a>
                    <img className="d-block w-20" src={this.state.products[2]} alt="First slide"></img>
                    <img className="d-block w-20" src={this.state.products[7]} alt="First slide"></img>
                    <img className="d-block w-20" src={this.state.products[2]} alt="First slide"></img>

                  </div>

                </div>

                <div className='carousel-item'>
                  <div className='productview'>
                    <img className="d-block w-20" src={this.state.products[2]} alt="First slide"></img>
                    <img className="d-block w-20" src={this.state.products[7]} alt="First slide"></img>
                    <img className="d-block w-20" src={this.state.products[2]} alt="First slide"></img>
                    <img className="d-block w-20" src={this.state.products[7]} alt="First slide"></img>
                  </div>
                </div>

              </div>


              <a className="carousel-control-prev" href="#catagorycarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#catagorycarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className='malwart'>Malwart</div>
          <button className="navbutton" variant="contained">Departments</button>
          <input className='navsearch' placeholder='Search...'></input>
          <button className='navbutton'>My Items</button>
          <button className='navbutton'>Account</button>
          <button className='cartbutton'>My Cart</button>
        </div>
      </React.Fragment >
    );
  }
}

import React from "react";

const HeroCarousel = () => {
  return (
    <React.Fragment>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carouselink">
              <h1 className="carouselhead">Shop at Malwart Today</h1>
              <button type="button" className="btn btn-primary">
                Shop Now
              </button>
            </div>
            <img
              className="d-block w-80"
              src={this.state.products[7]}
              alt="First slide"
            ></img>
          </div>
          <div className="carousel-item">
            <div className="carouselink">
              <h1 className="carouselhead">Great selections for your needs</h1>
              <button type="button" className="btn btn-primary">
                Shop Now
              </button>
            </div>
            <img
              className="d-block w-80"
              src={this.state.products[8]}
              alt="Second slide"
            ></img>
          </div>
          <div className="carousel-item">
            <div className="carouselink">
              <h1 className="carouselhead">Jump into these deals now!</h1>
              <button type="button" className="btn btn-primary">
                Shop Now
              </button>
            </div>
            <img
              className="d-block w-80"
              src={this.state.products[4]}
              alt="Third slide"
            ></img>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleSlidesOnly"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleSlidesOnly"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  );
};

export default HeroCarousel;

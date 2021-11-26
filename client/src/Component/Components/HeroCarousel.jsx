import React from "react";
import "./HeroCarousel.css";
import Video from "./hero.mp4";
const HeroCarousel = (props) => {
  console.log(props);

  const handleHerobox = (start, end) => {
    let array = [];
    if (props.products.length !== 0) {
      for (start; start <= end; start++) {
        const obj = props.products[start];

        array.push(
          <div id="productimagehero" key={props.products[start].id}>
            <img
              id={props.products[start].id}
              className="d-block w-15"
              key={props.products[start].id}
              src={props.products[start].image}
            />
          </div>
        );
      }
    }
    return array;
  };
  return (
    <React.Fragment>
      <div id="videocontainer">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          id="videotext"
        >
          Welcome to MalWart
        </h1>
        <video
          id="overlay"
          autoPlay
          muted
          loop
          width="900"
          type="video/ogg"
          src={Video}
        ></video>
      </div>
      <div
      data-aos="fade-up" data-aos-duration="3000"
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
            {handleHerobox(2, 2)}
          </div>
          <div className="carousel-item">
            <div className="carouselink">
              <h1 className="carouselhead">Great selections for your needs</h1>
              <button type="button" className="btn btn-primary">
                Shop Now
              </button>
            </div>
            {handleHerobox(4, 4)}
          </div>
          <div className="carousel-item">
            <div className="carouselink">
              <h1 className="carouselhead">Jump into these deals now!</h1>
              <button type="button" className="btn btn-primary">
                Shop Now
              </button>
            </div>
            {handleHerobox(6, 6)}
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

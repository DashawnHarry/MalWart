import React from 'react'
import './ProductCategory.css'
import { Link } from 'react-router-dom'



export const CategoryBox = (props) => {
  return (
    <>
      <div className="product box">
        <div>Christmas Selection</div>
        <div id="catagorycarousel" className="carousel" data-ride="carousel">
          <div className="carouselInner">
            <div className="carousel-item active">
              <div className="productview">
                <Link to='nav'>
                  <img
                    className="d-block w-20"
                    src={props.products[7]}
                    alt="First slide"
                  ></img>
                </Link>
                <img
                  className="d-block w-20"
                  src={props.products[2]}
                  alt="First slide"
                ></img>
                <img
                  className="d-block w-20"
                  src={props.products[7]}
                  alt="First slide"
                ></img>
                <img
                  className="d-block w-20"
                  src={props.products[2]}
                  alt="First slide"
                ></img>
              </div>
            </div>

            <div className="carousel-item">
              <div className="productview">
                <img
                  className="d-block w-20"
                  src={props.products[2]}
                  alt="First slide"
                ></img>
                <img
                  className="d-block w-20"
                  src={props.products[7]}
                  alt="First slide"
                ></img>
                <img
                  className="d-block w-20"
                  src={props.products[2]}
                  alt="First slide"
                ></img>
                <img
                  className="d-block w-20"
                  src={props.products[7]}
                  alt="First slide"
                ></img>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#catagorycarousel"
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
            href="#catagorycarousel"
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
      </div>

    </>
  )

}
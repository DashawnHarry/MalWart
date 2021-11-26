import React from "react";
import "./ProductCategory.css";
import { Link, useNavigate } from "react-router-dom";


export const CategoryBox = (props) => {
  const navigate = useNavigate();

  const handleCategorybox = (start, end) => {
    let array = [];
    if (props.products.length !== 0) {
      for (start; start <= end; start++) {
        const obj = props.products[start];

        array.push(
          <div
          data-aos="fade-in"  
          id="productimagecategory"
            key={props.products[start].id}
            onClick={handleClick}
          >
            <img
              id={props.products[start].id}
              className="d-block w-20"
              key={props.products[start].id}
              src={props.products[start].image}
            />
          </div>
        );
      }
    }
    return array;
  };
  const handleClick = (e) => {
    // props.id = e.target.id

    navigate(`/id/${e.target.id}`);
  };
  return (
    <>
      <div data-aos="fade-in" data-aos-duration="3000" className="product box">
        <div id="categorycarousel" className="carousel" data-ride="carousel">
          <div className="carouselInner">
            <div className="carousel-item active">
              <div className="productview">{handleCategorybox(1, 4)}</div>
            </div>

            <div className="carousel-item">
              <div className="productview">{handleCategorybox(5, 8)}</div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#categorycarousel"
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
            href="#categorycarousel"
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
  );
};

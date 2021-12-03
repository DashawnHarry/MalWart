import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import { useParams } from "react-router";
import "./productlanding.css";
import NavBar from "../Components/NavBar";
import "../Components/NavBar.css"

const ProductDescriptionHome = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    $.get(`http://3.144.78.169/api/id/${id}`).then((data) => {
      setProduct(data);
    });
  });

  const createStars = () => {
    const temparray = []
    for (let index = 0; index < product.review; index++) {
      temparray.push(<span class="fa fa-star checked"></span>)
      
    }

return temparray

  }
  
  
  return (
    <>
    <NavBar/>
    <div className="product-description-content">
      <div>
        <img className="productImage" src={product.image} />
      </div>
      <div className="sideDescription">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-information">
          <p className="product-review">Rating: {createStars()}</p>
          <p className="product-price">Price: ${product.price}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDescriptionHome;

import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import { useParams } from "react-router";
import "./productlanding.css";

const ProductDescriptionHome = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    $.get(`/api/id/${id}`).then((data) => {
      setProduct(data);
    });
  });

  return (
    <div className="product-description-content">
      <div>
        <img className="productImage" src={product.image} />
      </div>
      <div className="sideDescription">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-information">
          <p className="product-review">Stars: {product.review}</p>
          <p className="product-price">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionHome;

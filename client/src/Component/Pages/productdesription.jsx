import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import { useParams } from "react-router";
import './productlanding.css'

const ProductDescriptionHome = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    $.get(`/api/id/${id}`).then((data) => {
      setProduct(data);
    });
  });

  return (
    <div>
      <div className="heroTop">
        <img className='productImage' src={product.image} />
        <div className="sideDescription">
          <h1>{product.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionHome;
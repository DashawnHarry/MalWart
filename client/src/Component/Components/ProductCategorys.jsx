import React from "react";
import "./ProductCategory.css";
import { CategoryBox } from "./ProductCategoryCarousel.jsx";
import { CategoryBox2 } from "./CategoryBox2";
import { CategoryBox3 } from "./CategoryBox3";
const ProductCategory = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="categorytxt"
      >
        Our Products
      </div>
      <div className="product categorys">
        <CategoryBox products={props.products} id={props.id} />
        <CategoryBox2 products={props.products} id={props.id} />
        <CategoryBox3 products={props.products} id={props.id} />
      </div>
    </React.Fragment>
  );
};

export default ProductCategory;

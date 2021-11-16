import React from "react";
import './ProductCategory.css'
import { CategoryBox } from './ProductCategoryCarousel.jsx'

const ProductCategory = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <div className="product categorys">
        <CategoryBox products={props.products} />
        <CategoryBox products={props.products} />
        <CategoryBox products={props.products} />
        <CategoryBox products={props.products} />
        <CategoryBox products={props.products} />

      </div>
    </React.Fragment>
  );
};

export default ProductCategory;

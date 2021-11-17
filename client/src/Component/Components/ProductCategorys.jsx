import React from "react";
import './ProductCategory.css'
import { CategoryBox } from './ProductCategoryCarousel.jsx'

const ProductCategory = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <div className="product categorys">
        <CategoryBox products={props.products} id={props.id} />
        <CategoryBox products={props.products} id={props.id}/>
        <CategoryBox products={props.products} id={props.id}/>
      </div>
    </React.Fragment>
  );
};

export default ProductCategory;

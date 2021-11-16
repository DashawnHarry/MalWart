import React, { Component } from "react";
import $ from "jquery";

import HeroCarousel from "../Components/HeroCarousel";
import ProductCategory from "../Components/ProductCategorys";
import NavBar from "../Components/NavBar";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  handleClick() { }

  componentDidMount() {
    $.get("/api/products").then((data) => {
      const arraytemp = data.map((url) => url.image);
      console.log(arraytemp);
      this.setState({ products: [...arraytemp] });
    });
  }

  render() {

    return (
      <React.Fragment>
        <NavBar />
        <HeroCarousel products={this.state.products} />
        <ProductCategory products={this.state.products} />
      </React.Fragment>
    );
  }
}
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

  handleClick() {}

  componentDidMount() {
    $.get("/api/products").then((data) => {
      this.setState({ products: data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <HeroCarousel products={this.state.products} />
        <ProductCategory products={this.state.products} id={this.props.id} />
      </React.Fragment>
    );
  }
}

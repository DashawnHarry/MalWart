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
    $.get("https://3.144.78.169/api/products").then((data) => {
    console.log(data)  
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

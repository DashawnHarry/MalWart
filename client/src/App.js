import React, { Component } from "react";
import Button from "@mui/material/Button";
import $ from "jquery";
import HeroCarousel from "./Component/HeroCarousel";
import ProductCategory from "./Component/ProductCategorys";
import NavBar from "./Component/NavBar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  handleClick() {}

  componentDidMount() {
    $.get("/api/products").then((data) => {
      const arraytemp = data.map((url) => url.image);
      console.log(arraytemp);
      this.setState({ products: [...arraytemp] });
    });
  }

  render() {
    console.log("error " + this.state.products.length);
    return (
      <React.Fragment>
        <HeroCarousel products={this.state.products}/>
        <ProductCategory products={this.state.products}/>
        <NavBar/>
      </React.Fragment>
    );
  }
}

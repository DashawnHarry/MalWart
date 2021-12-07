import React, { Component } from "react";
import $ from "jquery";
import axios from 'axios'

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
    axios.get("http://3.145.6.90/api/products", {
    headers: {"Access-Control-Allow-Origin": "*",}


    }).then((data) => console.log(data.data))
  
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

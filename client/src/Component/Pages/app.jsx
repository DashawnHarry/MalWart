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
    
    
    // $.get("http://3.144.78.169/api/products").then((data) => {
    // console.log(data)  
    // this.setState({ products: data });
    // });
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

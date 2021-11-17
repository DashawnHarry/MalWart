import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
}
from 'react-router-dom'



import Home from "../Component/Pages/app";
import NavBar from "../Component/Components/NavBar";
import ProductDescriptionHome from "../Component/Pages/productdesription.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2
    }

  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="id" element={<ProductDescriptionHome />}>
            <Route path=":id" element={<ProductDescriptionHome />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

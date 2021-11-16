import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from 'react-router-dom'
import Home from "./Component/Pages/app";
import NavBar from "./Component/Components/NavBar";


export default class App extends Component {
  constructor(props) {
    super(props);


  }
  render() {

    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nav' element={<NavBar />} />
        </Routes>
      </Router>
    );
  }
}

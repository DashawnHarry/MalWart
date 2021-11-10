import React, { Component } from "react";
import Button from "@mui/material/Button";
import $ from "jquery";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    $.get("/test").then((data) => console.log(data));
  }

  render() {
    return (
      <Button className="button" variant="contained" onClick={this.handleClick}>
        CSS God Button
      </Button>
    );
  }
}

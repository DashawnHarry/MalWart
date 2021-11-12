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
      <React.Fragment>
      <Button className="button" variant="contained" onClick={this.handleClick}>
        CSS God Button
      </Button>
      <Button className="departments" variant="contained">Departments</Button>
      <Button className="items" variant="contained">Myitems</Button>
      <Button className="account" variant="contained">MyAccount</Button>
      </React.Fragment>
    );
  }
}

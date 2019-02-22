import React, { Component } from "react";
import "./style.css";
import OperatorNavbar from "./../shared/OperatorNavbar";
import Footer from "../shared/Footer";

class OperatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <OperatorNavbar />
        <Footer />
      </div>
    );
  }
}

export default OperatorComponent;

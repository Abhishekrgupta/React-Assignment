import React, { Component } from "react";

class TableHeaderComponent extends Component {
  render() {
    return (<th>{this.props.header}</th>);
  }
}

export default TableHeaderComponent;

import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    localStorage.removeItem("token");
    const history = this.props.history;
    history.push("/");
    return <div />;
  }
}

export default Logout;

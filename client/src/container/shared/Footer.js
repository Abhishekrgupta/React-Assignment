import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1
    };
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span>Harbinger Systems Pvt Ltd.</span>
        </footer>
      </div>
    );
  }
}

export default Footer;

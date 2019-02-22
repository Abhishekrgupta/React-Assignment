import React, { Component } from "react";
import "./style.css";
import AdminNavbar from "./../shared/AdminNavbar";
import Footer from "../shared/Footer";

class AdminComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AdminNavbar />
        <Footer />
      </div>
    );
  }
}

export default AdminComponent;

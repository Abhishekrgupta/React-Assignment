import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const navbar = function() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/admin-dashboard">
        Harbinger Systems
      </Link>
      <ul className="navbar-nav" />
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;

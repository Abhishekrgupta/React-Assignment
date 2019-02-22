import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const navbar = function() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/admin-dashboard">
        Harbinger Systems 
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-user">
            New User
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/add-user-personal-info">
            Personal Info
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/role">
            Roles
          </Link>
        </li>
      </ul>
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

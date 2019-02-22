import React, { Component } from "react";
import APIService from "./../../services/api";
import AdminNavbar from "./../shared/AdminNavbar";
import Footer from "../shared/Footer";
import "./style.css";

class Role extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: ""
    };
    this.service = new APIService();
  }

  onChangeRole(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSaveRole(e) {
    let role = { role: this.state.role };
    console.log(role);
    if (role.role !== "") {
      const history = this.props.history;

      this.service
        .addRole(role)
        .then(res => res.json())
        .then(resp => {
          console.log(resp);
          history.push("/admin-dashboard");
        })
        .catch(err => console.log(err));
    }
  }

  onCancel(e) {
    const history = this.props.history;
    history.push("/admin-dashboard");
  }
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="container bg-light login">
          <div className=" row  justify-content-center align-items-center">
            <div className="col-md-7">
              <h1 className="text-center">Add Role</h1>
              <hr />
              <form>
                <div className="form-group">
                  <label htmlFor="role">
                    Role Name <span className="required"> * </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="role"
                    name="role"
                    value={this.state.role}
                    onChange={this.onChangeRole.bind(this)}
                    placeholder="New Role"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.onCancel.bind(this)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onSaveRole.bind(this)}
                >
                  Add Role
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Role;

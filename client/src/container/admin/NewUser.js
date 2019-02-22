import React, { Component } from "react";
import APIService from "./../../services/api";
import "./../shared/style.css";
import AdminNavbar from "./../shared/AdminNavbar";
import Footer from "../shared/Footer";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Email: "",
      Mobile: "",
      Password: "",
      Role: "AccessUser",
      Roles: ["AccessUser", "Admin", "Operator"],
      addUserToast: false
    };

    this.service = new APIService();
  }

  onChangeUser(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSaveUser(e) {
    const history = this.props.history;
    let user = {
      UserName: this.state.UserName,
      Email: this.state.Email,
      Mobile: this.state.Mobile,
      Password: this.state.Password,
      Role: this.state.Role
    };
    console.log(user);

    this.service
      .addNewUser(user)
      .then(res => res.json())
      .then(resp => {
        console.log(resp);
        // alert(resp.uid);
        // for notification
        this.setState({ addUserToast: true });
        
        setTimeout(() => {
        // alert(resp.uid)
          history.push(`/add-user-personal-info/${resp.uid}`);
        }, 3000);
      })
      .catch(err => console.log(err));
  }

  onCancel(e) {
    const history = this.props.history;
    history.push("/admin-dashboard");
  }

  render() {
    return (
      <div>
        <AdminNavbar />
        {this.state.addUserToast ? (
          <div className="toast-body alert-success col-md-3 float-right">User added successfully</div>
        ) : null}
        <div className="container bg-light login">
          <div className=" row  justify-content-center align-items-center">
            <div className="col-md-7">
              <h1 className="text-center">New User</h1>
              <hr />
              <form>
                <div className="form-group">
                  <label htmlFor="userName">
                    User Name <span className="required"> * </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="UserName"
                    value={this.state.UserName}
                    onChange={this.onChangeUser.bind(this)}
                    placeholder="User Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required"> * </span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="Email"
                    value={this.state.Email}
                    onChange={this.onChangeUser.bind(this)}
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">
                    Mobile No <span className="required"> * </span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    name="Mobile"
                    value={this.state.Mobile}
                    onChange={this.onChangeUser.bind(this)}
                    placeholder="10 digit mobile number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    Password <span className="required"> * </span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="Password"
                    value={this.state.Password}
                    onChange={this.onChangeUser.bind(this)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">
                    Role <span className="required"> * </span>
                  </label>
                  <select
                    className="form-control"
                    id="role"
                    onChange={this.onChangeUser.bind(this)}
                    name="Role"
                  >
                    {this.state.Roles.map((value, idx) => (
                      <option value={value} key={idx}>
                        {value}
                      </option>
                    ))}
                  </select>
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
                  onClick={this.onSaveUser.bind(this)}
                >
                  Add User
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

export default NewUser;

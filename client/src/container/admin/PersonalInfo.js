import React, { Component } from "react";
import APIService from "./../../services/api";

import "./../shared/style.css";
import AdminNavbar from "./../shared/AdminNavbar";
import Footer from "../shared/Footer";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
     PersonId: "",
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Gender: "Male",
      DateOfBirth: "",
      Age: 0,
      FlatNumber: "",
      SocietyName: "",
      AreaName: "",
      City: "",
      State: "",
      Pincode: 0,
      PhoneNo: 0,
      MobileNo: 0,
      PhysicalDisability: "",
      MaritalStatus: "Married",
      Education: "PhD",
      BirthSign: "",

      Genders: ["Male", "Female", "Transgender"],

      Marital_Status: ["Married", "Unmarried", "Divorced", "Widow", "Widower"],

      Educations: [
        "PhD",
        "Post-Graduate",
        "Under-Graduate",
        "HSC",
        "SSC",
        "Illiterate"
      ]
    };

    this.service = new APIService();
  }

  onChangeUser(e) {
    if (e.target.name === "DateOfBirth") {
      this.setState({
        Age: new Date().getFullYear() - e.target.value.split("-")[0]
      });
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSave(e) {
    
    let person = {
      PersonId: this.state.PersonId,
      FullName: {
        FirstName: this.state.FirstName,
        MiddleName: this.state.MiddleName,
        LastName: this.state.LastName
      },
      Gender: this.state.Gender,
      DateOfBirth: this.state.DateOfBirth,
      Age: this.state.Age,
      Address: {
        FlatNumber: this.state.FlatNumber,
        SocietyName: this.state.SocietyName,
        AreaName: this.state.AreaName
      },
      City: this.state.City,
      State: this.state.State,
      Pincode: this.state.Pincode,
      PhoneNo: this.state.PhoneNo,
      MobileNo: this.state.MobileNo,
      PhysicalDisability: this.state.PhysicalDisability,
      MaritalStatus: this.state.MaritalStatus,
      Education: this.state.Education,
      BirthSign: this.state.BirthSign
    };
    console.log(person);

    const history = this.props.history;

    this.service
      .addNewPerson(person)
      .then(res => res.json())
      .then(resp => {
        if (resp.status === 401) {
          history.push("/");
        } else if (resp.status === 200) {
          history.push("/users");
          //console.log(resp);
        }
      })
      .catch(err => console.log(err));
  }

  onCancel(e) {
    const history = this.props.history;
    history.push("/admin-dashboard");
  }
  componentDidMount() {
    //alert(this.props.match.params.uid);
    this.setState({ PersonId: this.props.match.params.uid });
  }

  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="container bg-light login">
          <div className=" row  justify-content-center align-items-center">
            <div className="col-md-8">
              <h1 className="text-center">User Personal Information</h1>
              <hr />
              <form>
                <div className="form-group">
                  <label htmlFor="PersonId">Person Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="PersonId"
                    name="PersonId"
                    value={this.state.PersonId}
                    onChange={this.onChangeUser.bind(this)}
                    disabled
                  />
                </div>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="FirstName">
                      First Name <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="FirstName"
                      name="FirstName"
                      value={this.state.FirstName}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="MiddleName">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="MiddleName"
                      name="MiddleName"
                      value={this.state.MiddleName}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                  {/* Last Name */}
                  <div className="form-group col-md-4">
                    <label htmlFor="LastName">
                      Last Name <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="LastName"
                      name="LastName"
                      value={this.state.LastName}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="form-group">
                  <label htmlFor="gender">
                    Gender
                  </label>
                  <select
                    className="form-control"
                    id="gender"
                    onChange={this.onChangeUser.bind(this)}
                    name="Gender"
                  >
                    {this.state.Genders.map((value, idx) => (
                      <option value={value} key={idx}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date of Birth */}
                <div className="form-group">
                  <label htmlFor="dob">
                    Date of Birth <span className="required"> * </span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="DateOfBirth"
                    value={this.state.DateOfBirth}
                    onChange={this.onChangeUser.bind(this)}
                  />
                </div>

                {/* Age */}
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="Age"
                    value={this.state.Age}
                    onChange={this.onChangeUser.bind(this)}
                    disabled
                  />
                </div>

                {/* BirthSign */}
                <div className="form-group">
                  <label htmlFor="BirthSign">Birth Sign</label>
                  <span> (If any)</span>
                  <input
                    type="text"
                    className="form-control"
                    id="BirthSign"
                    name="BirthSign"
                    value={this.state.BirthSign}
                    onChange={this.onChangeUser.bind(this)}
                  />
                </div>

                {/* address */}
                <h4>Address</h4>

                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="FlatNumeber">
                      Flat Number <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="FlatNumber"
                      name="FlatNumber"
                      value={this.state.FlatNumber}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="dob">
                      Society Name <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="SocietyName"
                      name="SocietyName"
                      value={this.state.SocietyName}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="dob">
                      Area Name <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="AreaName"
                      name="AreaName"
                      value={this.state.AreaName}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                  {/* Pincode */}
                  <div className="form-group col-md-6">
                    <label htmlFor="Pincode">
                      Pincode <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Pincode"
                      name="Pincode"
                      value={this.state.Pincode}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                </div>

                {/* City */}
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="City">
                      City <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="City"
                      name="City"
                      value={this.state.City}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>

                  {/* State */}
                  <div className="form-group  col-md-6">
                    <label htmlFor="State">
                      State <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="State"
                      name="State"
                      value={this.state.State}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                </div>

                <div className="row">
                  {/* MobileNo */}
                  <div className="form-group col-md-6">
                    <label htmlFor="MobileNo">
                      Mobile Number <span className="required"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="MobileNo"
                      name="MobileNo"
                      value={this.state.MobileNo}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>

                  {/* PhoneNo */}
                  <div className="form-group col-md-6">
                    <label htmlFor="PhoneNo">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="PhoneNo"
                      name="PhoneNo"
                      value={this.state.PhoneNo}
                      onChange={this.onChangeUser.bind(this)}
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="form-group">
                  <label htmlFor="MaritalStatus">
                    Marital Status
                  </label>
                  <select
                    className="form-control"
                    id="MaritalStatus"
                    onChange={this.onChangeUser.bind(this)}
                    name="MaritalStatus"
                  >
                    {this.state.Marital_Status.map((value, idx) => (
                      <option value={value} key={idx}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PhysicalDisability */}
                <div className="form-group">
                  <label htmlFor="PhysicalDisability">
                    Physical Disability
                  </label>
                  <span> (If any)</span>

                  <input
                    type="text"
                    className="form-control"
                    id="PhysicalDisability"
                    name="PhysicalDisability"
                    value={this.state.PhysicalDisability}
                    onChange={this.onChangeUser.bind(this)}
                  />
                </div>

                {/* Education */}
                <div className="form-group">
                  <label htmlFor="Education">
                    Education
                  </label>
                  <select
                    className="form-control"
                    id="Education"
                    onChange={this.onChangeUser.bind(this)}
                    name="Education"
                  >
                    {this.state.Educations.map((value, idx) => (
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
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSave.bind(this)}
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

export default PersonalInfo;

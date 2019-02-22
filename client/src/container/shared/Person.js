import React, { Component } from "react";
import APIService from "./../../services/api";

import AdminNavbar from "./../shared/AdminNavbar";
import OperatorNavbar from "./../shared/OperatorNavbar";
import UserNavbar from "./../shared/UserNavbar";

class Person extends Component {
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
      BirthSign: ""
    };
    this.role = 1;

    this.service = new APIService();
  }

  componentDidMount() {
    let PersonId = this.props.match.params.uid;
    console.log(this.props.match.params.id);

    this.role = this.props.match.params.id;
    
    this.service
      .findPersonById(PersonId)
      .then(res => res.json())
      .then(resp => {
        //console.log(JSON.stringify(resp.data[0].FullName.FirstName));
        let person = resp.data[0];
        this.setState({
          PersonId: person.PersonId,
          FirstName: person.FullName.FirstName,
          MiddleName: person.FullName.MiddleName,
          LastName: person.FullName.LastName,
          Gender: person.Gender,
          DateOfBirth: person.DateOfBirth,
          Age: person.Age,
          FlatNumber: person.Address.FlatNumber,
          SocietyName: person.Address.SocietyName,
          AreaName: person.Address.AreaName,
          City: person.City,
          State: person.State,
          Pincode: person.Pincode,
          PhoneNo: person.PhoneNo,
          MobileNo: person.MobileNo,
          PhysicalDisability: person.PhysicalDisability,
          MaritalStatus: person.MaritalStatus,
          Education: person.Education,
          BirthSign: person.BirthSign
        });
        console.log(`the state is :==> ${JSON.stringify(this.state)}`);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.role === 1 ? (
          <AdminNavbar />
        ) : this.role === 2 ? (
          <OperatorNavbar />
        ) : (
          <UserNavbar />
        )}
        <div className="container">
          <h1 className="text-center">Person Information</h1>
          <table className="table table-border table-striped">
            <thead />
            <tbody>
              <tr>
                <td>FullName</td>
                <td>
                  {this.state.FirstName} {this.state.MiddleName}{" "}
                  {this.state.LastName}
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.state.Gender}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{this.state.DateOfBirth.substring(0, 10)}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{this.state.Age}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  {this.state.FlatNumber}, {this.state.SocietyName},{" "}
                  {this.state.AreaName}
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.state.City}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{this.state.State}</td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>{this.state.Pincode}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{this.state.PhoneNo}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{this.state.MobileNo}</td>
              </tr>
              <tr>
                <td>Birth Sign</td>
                <td>{this.state.BirthSign}</td>
              </tr>
              <tr>
                <td>Physical Disability</td>
                <td>{this.state.PhysicalDisability}</td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>{this.state.MaritalStatus}</td>
              </tr>
              <tr>
                <td>Education</td>
                <td>{this.state.Education}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Person;

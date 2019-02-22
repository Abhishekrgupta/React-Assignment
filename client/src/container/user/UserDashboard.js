import React, { Component } from "react";
import UserNavbar from "./../shared/UserNavbar";
import Footer from "../shared/Footer";

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    console.log(this.props.match.params.uid);
    const history = this.props.history;
    history.push(`/person/${this.props.match.params.uid}/3`);
  }
  render() {
    return (
      <div>
        <UserNavbar />
        <Footer />
      </div>
    );
  }
}

export default UserComponent;

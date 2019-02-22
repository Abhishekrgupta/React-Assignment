import React, { Component } from "react";

class TableRowComponent extends Component {
  onRowClick() {
    // a "selected" method is used to pass received data
    this.props.selected(this.props.rec);
  }

  onPersonInfo(){
    this.props.person(this.props.rec);
    //alert(JSON.stringify(this.props.rec));
  }
  render() {
    let key = Object.keys(this.props.rec);
    //let idx = 0;
    return (
      /* Dynamic */
      <tr>
        {key.map((v, i) => (
          <td key={i} onClick={this.onPersonInfo.bind(this)}>{this.props.rec[v]}</td>
        ))}
        <td className="btn-link" onClick={this.onRowClick.bind(this)}>Authorized</td>
      </tr>
    );
  }
}

export default TableRowComponent;

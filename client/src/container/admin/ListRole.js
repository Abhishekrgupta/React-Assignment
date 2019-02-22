import React, { Component } from "react";
import TableHeaderComponent from "../shared/TableHeader";
import TableRowComponent from "../shared/TableRow";


class ListRole extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {Object.keys(this.state.Products[0]).map((header, idx) => (
                <TableHeaderComponent key={idx} header={header} />
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.Products.map((prd, idx) => (
              <TableRowComponent
                key={idx}
                row={prd}
                selected={this.getSelectedProduct.bind(this)}
                deleted={this.onClickDelete.bind(this)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListRole;

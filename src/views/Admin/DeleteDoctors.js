import React from "react";
import API from "../../utils/API";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css";
import Button from "../../components/Button";
import { StyleDiv } from "./styled";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class DeleteDoctors extends React.Component {
  constructor() {
    super();
    this.state = {
      allDoctors: [],
      disabled: true,
      selectedRow: {}
    };
  }
  handleDelete = () => {
    API.deleteDoctor(this.state.selectedRow.email).then(res => {
      API.getAllDoctors().then(res => {
        this.setState({
          allDoctors: res.data.filter(x => x.deleted === false)
        });
      });
    });
  };

  onRowSelect = (row, isSelected, e) => {
    // let rowStr = "";
    // for (const prop in row) {
    //   rowStr += prop + ': "' + row[prop] + '"';
    // }
    this.setState({ selectedRow: row, disabled: false });
  };
  componentWillMount() {
    API.getAllDoctors().then(res => {
      this.setState({ allDoctors: res.data.filter(x => x.deleted === false) });
    });
  }

  render() {
    const selectRowProp = {
      mode: "radio",
      onSelect: this.onRowSelect
    };
    return (
      <StyleDiv>
        <BootstrapTable data={this.state.allDoctors} selectRow={selectRowProp}>
          <TableHeaderColumn dataField="_id" isKey>
            Doctor ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Full Name</TableHeaderColumn>
        </BootstrapTable>
        <div className="topmargin">
          <Button disabled={this.state.disabled} onClick={this.handleDelete}>
            DELETE
          </Button>
        </div>
      </StyleDiv>
    );
  }
}

export default DeleteDoctors;

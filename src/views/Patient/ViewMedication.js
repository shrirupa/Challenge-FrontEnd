import React from "react";
import API from "../../utils/API";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css";
import { StyleDiv } from "./styled";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Cookies from "js-cookie";
const getCookieData = key => {
  return Cookies.get(key);
};

class ViewMedication extends React.Component {
  constructor() {
    super();
    this.state = {
      allPrescription: []
    };
  }

  componentWillMount() {
    API.getPrescriptions(getCookieData("email")).then(res => {
      this.setState({ allPrescription: res.data });
    });
  }

  render() {
    return (
      <StyleDiv>
        <BootstrapTable data={this.state.allPrescription}>
          <TableHeaderColumn dataField="doctorEmail" isKey>
            Doctor Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField="medication">
            Medication
          </TableHeaderColumn>
          <TableHeaderColumn dataField="dosage">Dosage</TableHeaderColumn>
          <TableHeaderColumn dataField="duration">Days</TableHeaderColumn>
        </BootstrapTable>
      </StyleDiv>
    );
  }
}

export default ViewMedication;

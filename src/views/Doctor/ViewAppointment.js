import React from "react";
import API from "../../utils/API";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css";
import { StyleDiv } from "./styled";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Button from "../../components/Button";
import Cookies from "js-cookie";
import LightBox from "../../components/LightBox/index";
import { Row, Col, Grid } from "react-bootstrap";
import {
  Outer,
  Welcome,
  LoginContainer,
  StyledButton,
  Email,
  Password,
  Alert,
  Spacer,
  Link,
  RemRow,
  InputFieldStyled
} from "./styled";
const getCookieData = key => {
  return Cookies.get(key);
};

const saveCookieData = (key, value, options) => {
  if (!options) {
    options = {};
  }
  Cookies.set(key, value, options);
};

const deleteCookieData = key => {
  Cookies.remove(key);
};
class ViewAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      allAppointments: [],
      selectedRow: {},
      disabled: true,
      openModal: false,
      prescribed: false,
      form: {}
    };
  }
  formUpdate(e) {
    const field = e.target;
    let form = this.state.form;

    form[field.name] = field.value;
    this.setState({ form });
  }

  componentWillMount() {
    API.getAppointmentsByDoctor(getCookieData("email")).then(res => {
      res.data.map(function(a) {
        var date = new Date(a.appointmentDate);
        a.appointmentDate =
          date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
        a.time = date.getHours() + ":" + date.getMinutes();
      });

      this.setState({ allAppointments: res.data });
    });
  }
  onRowSelect = (row, isSelected, e) => {
    // let rowStr = "";
    // for (const prop in row) {
    //   rowStr += prop + ': "' + row[prop] + '"';
    // }
    this.setState({ selectedRow: row, disabled: false }, () => {
      let form = this.state.form;

      form["appointmentId"] = this.state.selectedRow["_id"];
      form["patientEmail"] = this.state.selectedRow["patientEmail"];
      form["doctorEmail"] = this.state.selectedRow["doctorEmail"];
      this.setState({
        form,
        prescribed: this.state.selectedRow["prescribed"]
      });
    });
  };
  toggleModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };
  handleCloseModal = bool => {
    this.setState({ openModal: bool });
  };
  prescribe = () => {
    console.log(this.state.prescribed);
    if (!this.state.prescribed) {
      this.setState({ openModal: true });
    } else {
      alert("Already Prescribed!");
    }
  };
  handleBook = () => {
    API.postMedication(this.state.form).then(res => {
      API.getAppointmentsByDoctor(getCookieData("email")).then(res => {
        res.data.map(function(a) {
          var date = new Date(a.appointmentDate);
          a.appointmentDate =
            date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
          a.time = date.getHours() + ":" + date.getMinutes();
        });

        API.updateAppointment(this.state.form["appointmentId"], {
          prescribed: true
        });

        this.setState({ allAppointments: res.data, openModal: false }, () =>
          alert("Prescribed")
        );
      });
    });
  };
  render() {
    const selectRowProp = {
      mode: "radio",
      onSelect: this.onRowSelect
    };
    return (
      <StyleDiv>
        <BootstrapTable
          data={this.state.allAppointments}
          selectRow={selectRowProp}
        >
          <TableHeaderColumn dataField="_id" isKey>
            Appointment Number
          </TableHeaderColumn>
          <TableHeaderColumn dataField="patientEmail">
            Patient Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField="reason">Reason</TableHeaderColumn>
          <TableHeaderColumn dataField="appointmentDate" dataSort>
            Appointment Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField="time" dataSort>
            Start Time
          </TableHeaderColumn>
          <TableHeaderColumn dataField="prescribed" dataSort>
            Prescribed
          </TableHeaderColumn>
        </BootstrapTable>
        <div className="topmargin">
          <Button disabled={this.state.disabled} onClick={this.prescribe}>
            Prescribe Drugs
          </Button>
        </div>
        {this.state.openModal && (
          <LightBox
            onClose={this.handleCloseModal}
            display={
              <React.Fragment>
                <Welcome>Register</Welcome>
                <LoginContainer>
                  <Password>Appointment Id</Password>
                  <InputFieldStyled
                    name="appointmentId"
                    type="text"
                    height="50px"
                    width="100%"
                    value={this.state.selectedRow["_id"]}
                    onChange={e => this.formUpdate(e)}
                    disabled
                  />
                  <Password>Your Name</Password>
                  <InputFieldStyled
                    name="doctorEmail"
                    value={this.state.selectedRow["doctorEmail"]}
                    type="text"
                    height="50px"
                    width="100%"
                    onChange={e => this.formUpdate(e)}
                  />
                  <Password>Patient Email</Password>
                  <InputFieldStyled
                    name="patientEmail"
                    value={this.state.selectedRow["patientEmail"]}
                    type="text"
                    height="50px"
                    width="100%"
                    onChange={e => this.formUpdate(e)}
                  />

                  <Password>Medication</Password>
                  <InputFieldStyled
                    name="medication"
                    type="text"
                    height="50px"
                    width="100%"
                    onChange={e => this.formUpdate(e)}
                  />
                  <Password>Dosage</Password>
                  <InputFieldStyled
                    name="dosage"
                    type="text"
                    height="50px"
                    width="100%"
                    onChange={e => this.formUpdate(e)}
                  />
                  <Password>Duration in Days</Password>
                  <InputFieldStyled
                    name="duration"
                    type="text"
                    height="50px"
                    width="100%"
                    onChange={e => this.formUpdate(e)}
                  />

                  <div className="buttondiv">
                    <Button
                      inverse
                      type="primary"
                      width="100%"
                      marginTop="50px"
                      onClick={this.handleBook}
                    >
                      Register
                    </Button>
                  </div>
                </LoginContainer>
              </React.Fragment>
            }
          />
        )}
      </StyleDiv>
    );
  }
}

export default ViewAppointment;

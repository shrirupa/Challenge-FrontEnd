import React from "react";
import {
  Outer,
  Welcome,
  LoginContainer,
  StyledButton as Button,
  Email,
  Password,
  InputFieldStyled
} from "./styled";
import { Row, Col, Grid } from "react-bootstrap";
import Select from "react-select";
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import "rc-time-picker/assets/index.css";

import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      errorFields: [],
      form: {
        email: "",
        password: "",
        type: ""
      }
    };
  }
  formUpdate(e) {
    const field = e.target;
    let form = this.state.form;

    form[field.name] = field.value;
    this.setState({ form });
  }

  handleBook = () => {
    var json = {
      email: this.state.form["email"],
      password: this.state.form["password"],
      name: this.state.form["name"]
    };
    console.log(json);
    if (
      json["email"] !== "" &&
      json["password"] !== "" &&
      json["name"] !== "" &&
      json["email"] &&
      json["password"] &&
      json["name"]
    ) {
      switch (this.state.form["type"]) {
        case "Patient":
          API.postPatient(json).then(res => {
            alert("Registered! Login Now!");
            window.location = "/login";
          });
          break;
        case "Doctor":
          API.postDoctor(json).then(res => {
            alert("Registered! Login Now!");
            window.location = "/login";
          });
          break;
        default:
        case "Admin":
          API.postAdmin(json).then(res => {
            alert("Registered! Login Now!");
            window.location = "/login";
          });
          break;
      }
    } else {
      alert("Enter All Details!!");
    }
  };
  handleChange = option => {
    let form = this.state.form;
    form["type"] = option.value;
    this.setState({ form });
  };
  render() {
    const options = [
      { label: "Doctor", value: "Doctor" },
      { label: "Patient", value: "Patient" },
      { label: "Admin", value: "Admin" }
    ];
    return (
      <Outer>
        <Row>
          <Col xs={12} sm={10} smOffset={1}>
            <Welcome>Register</Welcome>
            <LoginContainer>
              <Email>*Full Name</Email>
              <InputFieldStyled
                name="name"
                type="text"
                height="50px"
                width="100%"
                onChange={e => this.formUpdate(e)}
              />
              <Email>*Email</Email>
              <InputFieldStyled
                name="email"
                type="text"
                height="50px"
                width="100%"
                onChange={e => this.formUpdate(e)}
              />

              <Password>*Password</Password>
              <InputFieldStyled
                name="password"
                type="password"
                height="50px"
                width="100%"
                onChange={e => this.formUpdate(e)}
              />
              <Select
                options={options}
                name="type"
                onChange={e => this.handleChange(e)}
              />

              <Button
                inverse
                type="primary"
                width="100%"
                marginTop="50px"
                onClick={this.handleBook}
              >
                Register
              </Button>
            </LoginContainer>
          </Col>
        </Row>
      </Outer>
    );
  }
}
export default Register;

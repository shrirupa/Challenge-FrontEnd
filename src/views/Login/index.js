import React from "react";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import API from "../../utils/API";
import {
  Welcome,
  LoginContainer,
  Email,
  Password,
  StyledButton as Button,
  InputFieldStyled as InputField
} from "./styled";
import Cookies from "js-cookie";

const saveCookieData = (key, value, options) => {
  if (!options) {
    options = {};
  }
  Cookies.set(key, value, options);
};

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      errorFields: [],
      form: {
        email: "",
        password: "",
        type: ""
      },
      loginSuccess: false
    };
  }
  handleRegister = () => {
    window.location = "/register";
  };
  formUpdate(e) {
    const field = e.target;
    let form = this.state.form;

    form[field.name] = field.value;
    this.setState({ form });
  }
  handleChange = option => {
    let form = this.state.form;
    form["type"] = option.value;
    this.setState({ form });
  };
  handleSubmit = () => {
    switch (this.state.form["type"]) {
      case "Patient":
        API.getPatientByEmail(this.state.form["email"]).then(res => {
          if (res.data) {
            if (res.data.password === this.state.form.password) {
              saveCookieData("email", this.state.form["email"]);
              window.location = "/patient";
            } else {
              alert("Password or Email doesn't exist");
            }
          } else {
            alert("Password or Email doesn't exist");
          }
        });
        break;
      case "Doctor":
        API.getDoctorByEmail(this.state.form["email"]).then(res => {
          if (res.data) {
            if (res.data.password === this.state.form.password) {
              saveCookieData("email", this.state.form["email"]);
              window.location = "/Doctor";
            } else {
              alert("Password or Email doesn't exist");
            }
          } else {
            alert("Password or Email doesn't exist");
          }
        });
        break;
      default:
      case "Admin":
        API.getAdminByEmail(this.state.form["email"]).then(res => {
          if (res.data) {
            if (res.data.password === this.state.form.password) {
              saveCookieData("email", this.state.form["email"]);
              window.location = "/Admin";
            } else {
              alert("Password or Email doesn't exist");
            }
          } else {
            alert("Password or Email doesn't exist");
          }
        });
        break;
    }
  };

  render() {
    const options = [
      { label: "Doctor", value: "Doctor" },
      { label: "Patient", value: "Patient" },
      { label: "Admin", value: "Admin" }
    ];
    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          <Welcome>Login Page</Welcome>
          <LoginContainer>
            <Email>Email</Email>
            <InputField
              name="email"
              type="text"
              height="50px"
              width="100%"
              onChange={e => this.formUpdate(e)}
            />
            <Password>Password</Password>
            <InputField
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

            <div className="buttondiv">
              <Button
                inverse
                type="primary"
                width="100%"
                marginTop="50px"
                onClick={this.handleSubmit}
              >
                LOGIN
              </Button>
              <Button
                inverse
                type="primary"
                width="100%"
                marginTop="50px"
                onClick={this.handleRegister}
              >
                REGISTER
              </Button>
            </div>
          </LoginContainer>
        </Col>
      </Row>
    );
  }
}

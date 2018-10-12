import React from "react";
import {
  Outer,
  Welcome,
  LoginContainer,
  Email,
  Password,
  InputFieldStyled
} from "./styled";
import { Row, Col } from "react-bootstrap";
import Button from "../../components/Button";
import Select from "react-select";
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import "rc-time-picker/assets/index.css";

import moment from "moment";
// import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import Cookies from "js-cookie";

const getCookieData = key => {
  return Cookies.get(key);
};

class BookAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      errorFields: [],
      form: {
        patientEmail: "",
        doctorEmail: "",
        reason: "",
        appointmentDate: moment()
      },
      options: []
    };
  }
  formUpdate(e) {
    const field = e.target;
    let form = this.state.form;

    form[field.name] = field.value;
    this.setState({ form });
  }
  handleChange = option => {
    let form = this.state.form;
    form["doctorEmail"] = option.value;
    this.setState({ form });
  };
  selectDate = date => {
    let form = this.state.form;
    const formattedDate = date && date.format();
    form["appointmentDate"] = formattedDate;
    this.setState({ form });
  };

  handleBook = () => {
    API.postAppointment(this.state.form).then(() => {
      alert("Appointment Booked");
      window.location = window.location.href;
    });
  };
  componentWillMount() {
    let form = this.state.form;

    form["patientEmail"] = getCookieData("email");
    this.setState({ form });

    API.getAllDoctors().then(res =>
      this.setState({ options: res.data }, () => {
        const arr = [];
        this.state.options.map(i => {
          !i.deleted && arr.push({ label: i.name, value: i.email });
        });
        this.setState({ options: arr });
      })
    );
  }
  render() {
    return (
      <Outer>
        <Row>
          <Col xs={12} sm={10} smOffset={1}>
            <Welcome>Book Appointment</Welcome>
            <LoginContainer>
              <Email>Your email</Email>
              <InputFieldStyled
                name="patientEmail"
                type="text"
                height="50px"
                width="100%"
                onChange={e => this.formUpdate(e)}
                value={getCookieData("email")}
                disabled
              />
              <Password>Doctor's email</Password>
              <Select
                options={this.state.options}
                name="doctorEmail"
                onChange={e => this.handleChange(e)}
              />
              <Password>Reason</Password>
              <InputFieldStyled
                name="reason"
                type="text"
                height="50px"
                width="100%"
                onChange={e => this.formUpdate(e)}
              />
              <Password>Appointment Date</Password>
              <DatePicker
                selected={moment(this.state.form["appointmentDate"])}
                onChange={this.selectDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                minDate={moment()}
                dateFormat="LLL"
                timeCaption="time"
              />

              <div className="buttondiv">
                <Button
                  inverse
                  type="primary"
                  width="100%"
                  marginTop="50px"
                  onClick={this.handleBook}
                >
                  Confirm Booking
                </Button>
              </div>
            </LoginContainer>
          </Col>
        </Row>
      </Outer>
    );
  }
}
export default BookAppointment;

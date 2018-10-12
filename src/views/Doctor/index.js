import React from "react";
import Tabs from "../../components/Tabs";
import ViewAppointment from "./ViewAppointment";
import PrescribedMedication from "./PrescribedMedication";

import Cookies from "js-cookie";
import { StyledButton } from "./styled";
const deleteCookieData = key => {
  Cookies.remove(key);
};

class Doctor extends React.Component {
  logout = () => {
    console.log("here");
    deleteCookieData("email");
    window.location = "/login";
  };
  render() {
    return (
      <React.Fragment>
        <StyledButton onClick={this.logout}>Logout</StyledButton>
        <Tabs
          tabs={[
            {
              title: "Prescribed Medication",
              content: <PrescribedMedication />
            },
            {
              title: "View Appointments",
              content: <ViewAppointment />
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default Doctor;

import React from "react";
import Tabs from "../../components/Tabs";
import ViewMedication from "./ViewMedication";
import BookAppointment from "./BookAppointment";

import Cookies from "js-cookie";
import { StyledButton as Button } from "./styled.js";

const deleteCookieData = key => {
  Cookies.remove(key);
};

class Patient extends React.Component {
  logout = () => {
    console.log("here");
    deleteCookieData("email");
    window.location = "/login";
  };
  render() {
    return (
      <React.Fragment>
        <Button width="100%" onClick={this.logout}>
          Logout
        </Button>
        <Tabs
          tabs={[
            {
              title: "Book Appointment",
              content: <BookAppointment />
            },
            {
              title: "View Medication",
              content: <ViewMedication />
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default Patient;

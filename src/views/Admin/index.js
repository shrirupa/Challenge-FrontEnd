import React from "react";
import Tabs from "../../components/Tabs";
import DeleteDoctors from "../Admin/DeleteDoctors";
import { StyledButton as Button } from "./styled";
import Cookies from "js-cookie";

const deleteCookieData = key => {
  Cookies.remove(key);
};

class Admin extends React.Component {
  logout = () => {
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
              title: "Delete Doctors",
              content: <DeleteDoctors />
            },
            {
              title: "Update Patient Info",
              content: <h1>Update Patient Info</h1>
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default Admin;

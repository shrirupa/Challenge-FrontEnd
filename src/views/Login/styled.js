import styled from "styled-components";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

import { Row } from "react-bootstrap";
import { Link as L } from "react-router-dom";
const Outer = styled.div`
  min-height: 100vh;
  width: "50%";
  .colorize {
    color: black;
    font-size: 15px;
    font-weight: 500;
  }
`;

const Welcome = styled.div`
  margin: auto;
  margin-top: 20%;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: black;
`;
const LoginContainer = styled.div`
  width: 70%;
  margin: auto;
`;
const StyledButton = styled(Button)`
  background: #508ea9;
  margin-top: 20px;
  text-align: center;
`;
const Email = styled.div`
  height: 19px;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
  // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 12px;
  color: black;
`;
const Password = styled.div`
  height: 19px;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
  // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
  color: black;
`;

const Alert = styled.div`
  color: black;
  background-color: #d0021b;
  padding: 10px;
  border: solid 1px #ffffff;
  margin-top: -10px;
  text-align: left;
  font-size: 14px;
`;

const Spacer = styled.div`
  text-align: center;
  margin-top: 30px;
  padding: 20px 0;
  font-size: 16px;
  font-weight: bold;
`;

const Link = styled(L)`
  &:link,
  &:visited {
    color: black;
    text-decoration: underline;
  }
`;
const RemRow = styled(Row)`
  margin-top: 15px;
`;
const InputFieldStyled = styled(InputField)`
  border: ${props => (props.hasError ? "3px solid red" : "inherit")};
`;
export {
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
};

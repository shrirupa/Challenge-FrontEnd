import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Link as L } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
const StyleDiv = styled.div`
  margin: auto;
  div {
    text-align: center;
  }
  .topmargin {
    margin-top: 20px;
  }
  .Modal {
    position: relative;
    top: 0px;
    left: 0px;
    height: 1000px;
    width: 1000px;
    background-color: white;
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.7;
  }
`;

const Card = styled.div`
  width: 80vw;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  min-height: 70vh;
  border: solid 1px black;
`;

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
  margin: 0 auto;
  margin-top: 182px;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: white;
`;
const LoginContainer = styled.div`
  width: 50%;
  margin: auto;
`;
// const StyledButton = styled(Button)`
//   background: #508ea9;
//   margin-top: 20px;
//   text-align: center;
// `;

const StyledButton = styled.button`
  width: 100%;
  background: #3c763d;
  font-weight: bold;
  font-size: 22px;
  height: 50px;
  color: white;
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
  color: white;
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
  color: white;
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
  StyleDiv,
  Card,
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

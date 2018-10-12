import styled from "styled-components";
import { Tab as BSTab, Tabs as BSTabs } from "react-bootstrap";

const Tabs = styled(BSTabs)`
  li {
    width: 50%;
    height: 50%;
    a {
      background: rgba(127, 148, 208, 1);
      color: white;
      font-weight: bold;
      font-family: Helvetica-Bold;
      font-size: 20px;
      text-align: center;
    }
    a:hover {
      background-color: rgba(127, 148, 208, 1);
    }
    &.active {
      a {
        background: rgba(73, 87, 218, 1) !important;
        color: white !important;
      }
    }
  }
`;

const Tab = styled(BSTab)``;

export { Tab, Tabs };

import styled from "styled-components";
import { Button as B } from "react-bootstrap";

const Button = styled(B)`
  outline: none;
  width: 200px;
  height: 40px;
  width: ${props => props.width};
  font-size: 16px;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 12px;
  }
  line-height: 1;
  border-radius: 5px;
  margin-top: ${props => props.marginTop};

  color: "red";

  background: "blue";

  transition: color 200ms linear, border 200ms linear, background 200ms linear;
  &:link {
    padding-top: 12px;
  }
`;

export { Button };

import styled from "styled-components";

const InputField = styled.input`
  &[type="text"] {
    ${"" /* width: 100%; */} color: black !important;
  }

  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 0;
  border: solid 2px black !important ;
  margin-bottom: 15px;
`;

export { InputField };

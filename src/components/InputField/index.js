import { InputField } from "./styled";
import PropTypes from "prop-types";

InputField.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

export default InputField;

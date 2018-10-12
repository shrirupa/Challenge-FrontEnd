import { Button } from "./styled";
import PropTypes from "prop-types";

// this is a styled component, check ./styled.js file

// Lets check those proptypes
Button.propTypes = {
  // inverse: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

import PropTypes from "prop-types";

const Icon = ({ fill = "#fff", children }) => children(fill);

Icon.propTypes = {
  children: PropTypes.func.isRequired
};

export default Icon;

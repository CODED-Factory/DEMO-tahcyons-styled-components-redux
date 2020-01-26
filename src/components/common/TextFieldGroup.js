import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  value,
  error,
  placeholder,
  info,
  type,
  label,
  onChange,
  required,
  checked,
  disabled
}) => {
  const requiredSpan = (
    <span className={`normal ${required ? "red" : "black-60"}`}>
      {required ? " *" : " (optional)"}
    </span>
  );
  return (
    <div className="measure mt3">
      {label && (
        <label htmlFor={name} className="db fw6 lh-copy f6">
          {label}
          {requiredSpan}
        </label>
      )}
      <input
        type={type}
        className={`pa2 input-reset ba hover-bg-black hover-white w-100 ${
          error ? "b--red" : " b--black-20"
        }`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        id={name}
        aria-describedby={info ? "name-desc" : name}
      />
      {info && (
        <small id="name-desc" className="f6 black-60 db mb2">
          {info}
        </small>
      )}
      {error && <small className="f6 red db mb2">{error}</small>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;

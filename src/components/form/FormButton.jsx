import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({ type, children, disabled = false }) => {
  return (
    <button type={type} disabled={disabled}>
      {/* className={`form-button ${disabled ? 'disabled' : ''}`} */}
      {children}
    </button>
  );
};

FormButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default FormButton;

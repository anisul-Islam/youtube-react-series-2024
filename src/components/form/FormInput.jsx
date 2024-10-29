import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ id, name, type, value, onChange, required, accept }) => {
  return type === 'file' ? (
    <input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      accept={accept}
      required={required}
    />
  ) : (
    <input
      type={type}
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    />
  );
};

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default FormInput;

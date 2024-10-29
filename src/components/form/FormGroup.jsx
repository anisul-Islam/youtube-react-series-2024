import React from 'react';
import PropTypes from 'prop-types';

import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormError from './FormError';

const FormGroup = ({
  id,
  label,
  name,
  type,
  value,
  onChange,
  required,
  accept,
  error,
}) => {
  return (
    <div className="form-group">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormInput
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        accept={accept}
      />
      {error && <FormError message={error} />}
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default FormGroup;

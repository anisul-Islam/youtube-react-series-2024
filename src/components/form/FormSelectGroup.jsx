import React from 'react';
import PropTypes from 'prop-types';

import FormLabel from './FormLabel';
import FormError from './FormError';
import FormSelect from './FormSelect';

const FormSelectGroup = ({
  id,
  label,
  name,
  value,
  onChange,
  required,
  error,
  options,
  placeholder,
}) => {
  return (
    <div className="form-group">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormSelect
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        options={options}
        placeholder={placeholder}
      />
      {error && <FormError message={error} />}
    </div>
  );
};

FormSelectGroup.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default FormSelectGroup;

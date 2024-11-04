import React from 'react';
import PropTypes from 'prop-types';

const FormSelect = ({
  id,
  value,
  name,
  onChange,
  required,
  options,
  placeholder,
}) => {
  return (
    <select
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default FormSelect;

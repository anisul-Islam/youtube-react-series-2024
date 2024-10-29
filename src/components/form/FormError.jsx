import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ message }) => {
  return <p>{message}</p>;
};

FormError.propTypes = {
  message: PropTypes.string,
};

export default FormError;

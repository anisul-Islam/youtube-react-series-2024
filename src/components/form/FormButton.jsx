import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({ type, children }) => {
  return <button type={type}>{children}</button>;
};

FormButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default FormButton;

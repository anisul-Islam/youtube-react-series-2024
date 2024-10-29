import React from 'react';
import PropTypes from 'prop-types';

const FormLabel = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}> {children} </label>;
};

FormLabel.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};

export default FormLabel;

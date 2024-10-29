import React from 'react';
import PropTypes from 'prop-types';

const ImagePreview = ({ src, alt }) => {
  return (
    <div className="image-preview">
      {src ? <img src={src} alt={alt} /> : <p>No Image selected</p>}
    </div>
  );
};

ImagePreview.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImagePreview;

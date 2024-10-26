import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;

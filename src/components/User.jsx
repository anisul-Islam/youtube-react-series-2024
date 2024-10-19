import React from 'react';
import PropTypes from 'prop-types';

import styles from './User.module.css';
import Card from './Card';

const User = (props) => {
  const { name, email, imageUrl, gender, age, country } = props.user;

  return (
    <Card>
      <article className={styles.user}>
        <div className={styles['user-info']}>
          <img src={imageUrl} alt={name} className={styles['user-image']} />
          <div className={styles['user-body']}>
            <h3 className={styles['user-name']}>{name}</h3>
            <p>Email: {email}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
          </div>
        </div>
      </article>
    </Card>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
  }),
};

export default User;

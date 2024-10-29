//@ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegTrashCan } from 'react-icons/fa6';

import styles from './User.module.css';
import Card from '../layout/Card';

const User = (props) => {
  const { id, name, email, image, gender, age, country } = props.user;
  const { setUsers } = props;

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <Card>
      <article className={styles.user}>
        <div className={styles['user-info']}>
          <img src={image} alt={name} className={styles['user-image']} />
          <div className={styles['user-body']}>
            <h3 className={styles['user-name']}>{name}</h3>
            <p>Email: {email}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <button className={`btn`} onClick={() => handleDelete(id)}>
              <FaRegTrashCan />
            </button>
          </div>
        </div>
      </article>
    </Card>
  );
};

User.propTypes = {
  setUsers: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
  }),
};

export default User;

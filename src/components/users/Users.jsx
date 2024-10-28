//@ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import styles from './Users.module.css';

const Users = (props) => {
  const { users, setUsers } = props;
  // handle empty users case
  if (users.length === 0) {
    return <h3>No users found</h3>;
  }

  const usersElement = users.map((user) => (
    <User setUsers={setUsers} user={user} key={user.id} />
  ));

  return <section className={styles.users}>{usersElement}</section>;
};

Users.propTypes = {
  setUsers: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
};

export default Users;

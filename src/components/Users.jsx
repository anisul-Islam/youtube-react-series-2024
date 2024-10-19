import React from 'react';

import User from './User';
import styles from './Users.module.css';

const user1 = {
  id: 1,
  name: 'John Doe',
  email: 'john@gmail.com',
  imageUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
  age: 25,
  gender: 'Male',
  country: 'Usa',
};

const user2 = {
  id: 2,
  name: 'Ben Smith',
  email: 'ben@gmail.com',
  imageUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
  age: 35,
  gender: 'Male',
  country: 'Great Britan',
};

const user3 = {
  id: 3,
  name: 'Mike Jhonson',
  email: 'mike@gmail.com',
  imageUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
  age: 35,
  gender: 'Male',
  country: 'Australia',
};

const user4 = {
  id: 4,
  name: 'Chris Lee',
  email: 'chris@gmail.com',
  imageUrl: 'https://avatars.githubusercontent.com/u/4?v=4',
  age: 35,
  gender: 'Male',
  country: 'Canada',
};

const Users = () => {
  return (
    <>
      <h2 className={`${styles.title} ${styles.large}`}>User Management App</h2>
      <section className={styles.users}>
        <User user={user1} />
        <User user={user2} />
        <User user={user3} />
        <User user={user4} />
      </section>
    </>
  );
};

export default Users;

import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome to the User Management App</h1>
    </header>
  );
};

export default Header;

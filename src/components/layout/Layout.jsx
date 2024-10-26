import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>{props.children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

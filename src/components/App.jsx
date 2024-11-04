import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Users from './users/Users';
import { usersData } from '../../data';
import Layout from './layout/Layout';
import SignUpForm from './users/SignUpForm';

const App = () => {
  const [users, setUsers] = useState(usersData);

  return (
    <Layout>
      <ToastContainer />
      <SignUpForm setUsers={setUsers} />
      <Users users={users} setUsers={setUsers} />
    </Layout>
  );
};

export default App;

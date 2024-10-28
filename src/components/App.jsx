import React, { useState } from 'react';

import Users from './users/Users';
import { usersData } from '../../data';
import Layout from './layout/Layout';
import AddUserForm from './users/AddUserForm';

const App = () => {
  const [users, setUsers] = useState(usersData);
  return (
    <Layout>
      <AddUserForm />
      <Users users={users} setUsers={setUsers} />
    </Layout>
  );
};

export default App;

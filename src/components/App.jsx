import React, { useState } from 'react';

import Users from './users/Users';
import { usersData } from '../../data';
import Layout from './layout/Layout';

const App = () => {
  const [users, setUsers] = useState(usersData);

  return (
    <Layout>
      <Users users={users} setUsers={setUsers} />
    </Layout>
  );
};

export default App;

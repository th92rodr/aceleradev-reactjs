import React from 'react';

import UsersList from '../../containers/UsersList/UsersList';
import { FetchUsers } from '../../services';

const UsersRoute = () => {
  const users = FetchUsers();
  return (
    <div className='container' data-testid='users-route'>
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;

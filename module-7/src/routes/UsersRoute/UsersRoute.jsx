import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  return (
    <div className='container' data-testid='users-route'>
      <UsersList />
    </div>
  );
};

export default UsersRoute;

import React from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';
import Loading from '../../components/Loading';
import { FetchPostsByUserId, FetchUserByPath } from '../../services';

const ProfileRoute = () => {
  const user = FetchUserByPath();
  const posts = FetchPostsByUserId();
  return (
    <div data-testid='profile-route'>
      {user && posts ? (
        <>
          <UserProfile
            name={user.name}
            username={user.username}
            avatar={user.avatar}
          />
          <UserPosts posts={posts} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProfileRoute;

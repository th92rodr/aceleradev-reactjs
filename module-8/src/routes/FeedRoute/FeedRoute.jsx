import React from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';
import Posts from '../../containers/Posts';
import { FetchUsers, FetchStories, FetchPosts } from '../../services';
import './FeedRoute.scss';

const FeedRoute = () => {
  const users = FetchUsers();
  const stories = FetchStories();
  const posts = FetchPosts(users).posts;
  const searchedUsers = FetchPosts(users).searchedUsers;
  const finishedLoadingPosts = users.length === searchedUsers;

  const getUserById = userId => {
    return users.find(user => user.id === userId);
  };

  return (
    <div data-testid='feed-route'>
      <Stories stories={stories} getUserHandler={getUserById} />
      {finishedLoadingPosts ? (
        <Posts posts={posts} getUserHandler={getUserById} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default FeedRoute;

import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className='container' data-testid='posts'>
    {posts.map(post => {
      const user = getUserHandler(post.userId);
      return <Post key={post.id} userInfo={user} postInfo={post} />;
    })}
  </div>
);

export default Posts;

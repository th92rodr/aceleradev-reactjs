import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [like, setLike] = useState(false);

  return (
    <article className='post' data-testid='post'>
      <header className='post__header'>
        <div className='user'>
          <Link className='user__thumb' to={`/users/${userInfo.username}`}>
            <img src={userInfo.avatar} alt={userInfo.username} />
          </Link>
          <Link className='user__name' to={`/users/${userInfo.username}`}>
            {userInfo.name}
          </Link>
        </div>
        <button className='post__context'>
          <span className='follow-btn'>Seguir</span>
        </button>
      </header>
      <figure className='post__figure'>
        <img src={postInfo.imageUrl} alt='' />
      </figure>
      <nav className='post__controls'>
        <button className='post__control' onClick={() => setLike(!like)}>
          {like ? (
            <i className='fas fa-heart'></i>
          ) : (
            <i className='far fa-heart'></i>
          )}
        </button>
        {postInfo.comments.length > 0 && (
          <div className='post__status'>
            <div className='user'>
              <span>
                curtido por <a href='/'>{postInfo.comments[0].name}</a> e outra
                {postInfo.comments.length > 1 ? 's' : ''}
                <a href='/'>
                  {' '}
                  {postInfo.comments.length} pessoa
                  {postInfo.comments.length > 1 ? 's' : ''}.
                </a>
              </span>
            </div>
          </div>
        )}
      </nav>
    </article>
  );
};

export default Post;

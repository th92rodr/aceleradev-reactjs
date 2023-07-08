import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ infoUser, selectUser }) => {
  const { avatar, name, username } = infoUser;

  return (
    <article
      className='post'
      data-testid='user'
      onClick={() => selectUser(infoUser)}
    >
      <header className='post__header'>
        <Link className='user' to={'/users/' + username}>
          <div className='user__thumb'>
            <img src={avatar} alt={name} />
          </div>
          <div className='user__name'>{name}</div>
        </Link>
      </header>
    </article>
  );
};

export default User;

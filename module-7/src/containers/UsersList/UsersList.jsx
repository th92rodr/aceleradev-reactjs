import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UsersList = ({ users }) => {
  return (
    <section className='users-list' data-testid='user-list'>
      <article className='post' data-testid='user'>
        <header className='post__header'>
          <a className='user' href='/users/blackpanther'>
            <div className='user__thumb'>
              <img
                src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg'
                alt="T'Challa"
              />
            </div>
            <div className='user__name'>T'Challa</div>
          </a>
        </header>
      </article>
      <article className='post' data-testid='user'>
        <header className='post__header'>
          <a className='user' href='/users/brucewayne'>
            <div className='user__thumb'>
              <img
                src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg'
                alt='Bruce Wayne'
              />
            </div>
            <div className='user__name'>Bruce Wayne</div>
          </a>
        </header>
      </article>
      <article className='post' data-testid='user'>
        <header className='post__header'>
          <a className='user' href='/users/captainmarvel'>
            <div className='user__thumb'>
              <img
                src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/carol/carol-profile.jpg'
                alt='Carol Danvers'
              />
            </div>
            <div className='user__name'>Carol Danvers</div>
          </a>
        </header>
      </article>
    </section>
  );
};

export default UsersList;

import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className='container' data-testid='user-posts'>
    <section className='user-posts'>
      <article className='post' data-testid='post'>
        <figure className='post__figure'>
          <img
            src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg'
            alt=''
          />
        </figure>
      </article>
      <article className='post' data-testid='post'>
        <figure className='post__figure'>
          <img
            src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-2.jpg'
            alt=''
          />
        </figure>
      </article>
      <article className='post' data-testid='post'>
        <figure className='post__figure'>
          <img
            src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-3.jpg'
            alt=''
          />
        </figure>
      </article>
      <article className='post' data-testid='post'>
        <figure className='post__figure'>
          <img
            src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-4.jpg'
            alt=''
          />
        </figure>
      </article>
      <article className='post' data-testid='post'>
        <figure className='post__figure'>
          <img
            src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-5.jpg'
            alt=''
          />
        </figure>
      </article>
    </section>
  </div>
);

export default UserPosts;

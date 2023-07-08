import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className='post' data-testid='post'>
      <header className='post__header'>
        <div className='user'>
          <a className='user__thumb' href='/users/blackpanther'>
            <img
              src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg'
              alt="T'Challa"
            />
          </a>
          <a className='user__name' href='/users/blackpanther'>
            T'Challa
          </a>
        </div>
        <button className='post__context'>
          <span className='follow-btn'>Seguir</span>
        </button>
      </header>
      <figure className='post__figure'>
        <img
          src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg'
          alt=''
        />
      </figure>
      <nav className='post__controls'>
        <button className='post__control'>
          <i className='far fa-heart'></i>
        </button>
        <div className='post__status'>
          <div className='user'>
            <span>
              curtido por <a href='/'>Santino Rowe</a> e outra{' '}
              <a href='/'>1 pessoa.</a>
            </span>
          </div>
        </div>
      </nav>
    </article>
  );
};

export default Post;

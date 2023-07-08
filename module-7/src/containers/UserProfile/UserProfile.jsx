import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className='profile' data-testid='user-profile'>
      <div className='container'>
        <div className='profile-data'>
          <div className='user'>
            <div className='user__thumb'>
              <img
                src='https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg'
                alt=''
              />
            </div>
            <p className='user__name'>
              T'Challa<span>@blackpanther</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;

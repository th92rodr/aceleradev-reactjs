import React, { useState } from 'react';

import Story from '../../components/Story';
import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [clickedStory, setClickedStory] = useState('');
  const [clickedUser, setClickedUser] = useState('');

  const handleClick = (story, user) => {
    setClickedUser(user);
    setClickedStory(story);
    setShowStory(true);
  };

  const handleClose = () => {
    setClickedUser('');
    setClickedStory('');
    setShowStory(false);
  };

  const allStories = stories.map((story, index) => {
    const user = getUserHandler(story.userId);
    return (
      <button
        key={story.id}
        onClick={() => handleClick(story, user)}
        className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
      >
        <div className='user__thumb__wrapper'>
          {user && <img src={user.avatar} alt={user.name} />}
        </div>
      </button>
    );
  });

  return (
    <React.Fragment>
      <section className='stories' data-testid='stories'>
        <div className='container'>{allStories}</div>
      </section>
      {showStory && (
        <Story
          user={clickedUser}
          story={clickedStory}
          handleClose={handleClose}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;

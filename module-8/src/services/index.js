import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { baseURL } from './api';

export const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const response = await fetch(baseURL + '/users');
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, []);
  return users;
};

export const FetchPosts = () => {
  const [searchedUsers, setsearchedUsers] = useState(0);
  const [posts, setPosts] = useState([]);
  const users = FetchUsers();

  useEffect(() => {
    if (searchedUsers !== users.length) {
      fetch(baseURL + 'users/' + users[searchedUsers].id + '/posts')
        .then(response => response.json())
        .then(data => {
          setPosts([...posts, ...data]);
          setsearchedUsers(searchedUsers + 1);
        });
    }
  }, [searchedUsers, users]);
  return {
    posts,
    searchedUsers
  };
};

export const FetchUserByPath = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    id: '',
    avatar: '',
    email: ''
  });
  const username = useParams().username;
  useEffect(() => {
    fetch(baseURL + 'users?search=' + username)
      .then(response => response.json())
      .then(data => {
        setUser(data[0]);
      });
  }, []);
  return user;
};

export const FetchPostsByUserId = () => {
  const id = FetchUserByPath().id;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (id) {
      fetch(baseURL + 'users/' + id + '/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }
  }, [id]);
  return posts;
};

export const FetchStories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function getStories() {
      const response = await fetch(baseURL + '/stories');
      const data = await response.json();
      setStories(data);
    }
    getStories();
  }, []);
  return stories;
};

export const PostNewUser = postObject => {
  fetch(baseURL + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: postObject
  }).then();
  return true;
};

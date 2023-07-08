import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';
import { PostNewUser } from '../../services';
import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@mail.com');
  const [submit, setSubmit] = useState(false);

  const handleSetName = event => setName(event.target.value);
  const handleSetEmail = event => setEmail(event.target.value);
  const handleSetUsername = event => setUsername(event.target.value);
  const handleSetAvatar = event => setAvatar(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email
    });
    async function postUser() {
      await PostNewUser(postObject);
      setSubmit(true);
    }
    postUser();
  };

  return (
    <React.Fragment>
      <section className='profile' data-testid='user-form'>
        <div className='container'>
          <div className='profile-data'>
            <div className='user'>
              <div className='user__thumb'>
                {avatar ? (
                  <img src={avatar} alt='' />
                ) : (
                  <img
                    src='https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png'
                    alt=''
                  />
                )}
              </div>

              {name && (
                <p className='user__name'>
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='post__form'>
        <div className='container'>
          <div className='post__form__wrapper'>
            <label>Nome</label>
            <input
              name='name'
              type='text'
              value={name}
              placeholder='Ex: Fulano da Silva'
              onChange={handleSetName}
            />

            <label>Usuário</label>
            <input
              name='username'
              type='text'
              value={username}
              placeholder='Ex: fulano_da_silva'
              onChange={handleSetUsername}
            />

            <label>Email</label>
            <input
              name='email'
              type='email'
              value={email}
              placeholder='Ex: fulano@provedor.com'
              onChange={handleSetEmail}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              name='avatar'
              type='text'
              placeholder='http://...'
              onChange={handleSetAvatar}
            />

            <button type='button' onClick={handleSubmit}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>
      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;

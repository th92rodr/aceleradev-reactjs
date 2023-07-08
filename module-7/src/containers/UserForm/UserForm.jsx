import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [submit, setSubmit] = useState(false);

  const handleChange = event => {
    const { value, name } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'image':
        setAvatar(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: postObject
    }).then(() => setSubmit(true));
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
              onChange={handleChange}
            />

            <label>Usuário</label>
            <input
              name='username'
              type='text'
              value={username}
              placeholder='Ex: fulano_da_silva'
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              name='email'
              type='email'
              value={email}
              placeholder='Ex: fulano@provedor.com'
              onChange={handleChange}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              name='image'
              type='text'
              placeholder='http://...'
              onChange={handleChange}
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

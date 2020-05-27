import React from 'react';

const Contact = ({
  name,
  avatar,
  company,
  department,
  admissionDate,
  phone,
  country
}) => {
  return (
    <article className='contact'>
      <span className='contact__avatar'>
        <img src={avatar} alt='' />
      </span>
      <span className='contact__data'>{name}</span>
      <span className='contact__data'>{phone}</span>
      <span className='contact__data'>{country}</span>
      <span className='contact__data'>
        {admissionDate && new Date(admissionDate).toLocaleDateString('pt')}
      </span>
      <span className='contact__data'>{company}</span>
      <span className='contact__data'>{department}</span>
    </article>
  );
};

export default Contact;

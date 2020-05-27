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
  const formatDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const [
    { value: mm },
    ,
    { value: dd },
    ,
    { value: yyyy }
  ] = formatDate.formatToParts(new Date(admissionDate));

  return (
    <article className='contact'>
      <span className='contact__avatar'>
        <img src={avatar} alt='' />
      </span>
      <span className='contact__data'>{name}</span>
      <span className='contact__data'>{phone}</span>
      <span className='contact__data'>{country}</span>
      <span className='contact__data'>{`${dd}/${mm}/${yyyy}`}</span>
      <span className='contact__data'>{company}</span>
      <span className='contact__data'>{department}</span>
    </article>
  );
};

export default Contact;

import React from 'react';

const Contact = ({ data }) => {
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
  ] = formatDate.formatToParts(new Date(data.admissionDate));

  return (
    <article className='contact'>
      <span className='contact__avatar'>
        <img src={data.avatar} alt='' />
      </span>
      <span className='contact__data'>{data.name}</span>
      <span className='contact__data'>{data.phone}</span>
      <span className='contact__data'>{data.country}</span>
      <span className='contact__data'>{`${dd}/${mm}/${yyyy}`}</span>
      <span className='contact__data'>{data.company}</span>
      <span className='contact__data'>{data.department}</span>
    </article>
  );
};

export default Contact;

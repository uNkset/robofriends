import React from 'react';

const Card = (props) => {
  let { src, name, email } = props;

  return (
    <div className="f1 tc">
      <img src={src} alt="profile" />
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
};

export default Card;

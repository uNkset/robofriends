import React from 'react';

const Card = ({ user, src, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={src} alt="profile" />
      <div>
        <h3>{user}</h3>
        <h1>{name}</h1>
        <h4>{email}</h4>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error('autobots attack');
  // }
  return robots.map((item) => {
    return (
      <Card
        key={item.id}
        src={`https://robohash.org/${item.id}?200x200`}
        user={item.username}
        name={item.name}
        email={item.email}
      />
    );
  });
};

export default CardList;

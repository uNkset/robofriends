import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Card from './components/Card';
import { robots } from './robots';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="f1 tc">Robo Friends!</h1>
        {robots.map((item) => {
          return (
            <Card
              key={item.id}
              src={`https://robohash.org/${item.id}?200x200`}
              user={item.username}
              name={item.name}
              email={item.email}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import CardList from './components/CardList';
import { robots } from './robots';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="f1 tc">Robo Friends!</h1>
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;

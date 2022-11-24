import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Card from './components/Card';

const data = {
  src: 'https://robohash.org/test',
  name: 'Miytagi Sensei',
  email: 'gypsi@gmail.com',
};

class App extends Component {
  render() {
    return <Card src={data.src} name={data.name} email={data.email} />;
  }
}

export default App;

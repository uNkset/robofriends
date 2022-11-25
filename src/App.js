import React, { Component } from 'react';
import './App.css';
import 'tachyons';
//import { robots } from './robots';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  onPress = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    let filtered = this.state.robots.filter((i) =>
      i.name.toLowerCase().includes(this.state.searchField) ? i : ''
    );

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <SearchBox onPress={this.onPress} />
          <h1 className="f1">Robo Friends!</h1>
          <CardList robots={filtered} />
        </div>
      );
    }
  }
}

export default App;

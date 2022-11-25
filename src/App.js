import React, { Component } from 'react';
import './App.css';
import 'tachyons';
//import { robots } from './robots';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';

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
    const { robots, searchField } = this.state;
    let filtered = robots.filter((i) =>
      i.name.toLowerCase().includes(searchField) ? i : ''
    );

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <SearchBox onPress={this.onPress} />
        <h1 className="f1">Robo Friends</h1>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filtered} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;

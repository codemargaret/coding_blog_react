import React, { Component } from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Brain Overflow</h1>
        </header>
        <p className="App-intro">
          Things I've learned on my coding journey.
        </p>
      </div>
    );
  }
}

export default App;

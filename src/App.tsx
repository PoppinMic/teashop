import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero></Hero>
      </div>
    );
  }
}

export default App;

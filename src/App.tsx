import React, { Component } from 'react';

import Sidebar from './components/Sidebar/';
import Hero from './components/Hero';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Hero />
      </div>
    );
  }
}

export default App;

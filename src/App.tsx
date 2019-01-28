import React, { Component } from 'react';

import Sidebar from './components/Sidebar/';
import Hero from './components/Hero';
import RectangleSmall from './components/rectangle/RectangleSmall';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Hero />
        <RectangleSmall title="Oolong TeaOolong TeaOolong Tea" text="Our finest artisan oolong tea"/>
        <RectangleSmall title="Cinnamon Tea" text="Our finest artisan oolong tea"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Sidebar from './components/Sidebar/';
import Hero from './components/Hero';
import tea1 from './content/tea1.jpg';
import bg1 from './content/bg1.png';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Hero bgColor="lightblue" bgImage={'url('+bg1+')'}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Sidebar from './components/Sidebar/';
import Hero from './components/Hero';
import RectangleGrid, { RectangleItem } from './components/rectangle/';
import tea1 from './content/tea1.jpg';
import bg1 from './content/bg1.png';

// import './App.css';

class App extends Component {
  gridItems: RectangleItem[] = [
    {
      text: 'item1',
      title: 'title1',
    },
    {
      text: 'item2',
      title: 'title2',
    }
  ];
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Hero bgColor="lightblue" bgImage={'url('+bg1+')'}/>
        <RectangleGrid Items={this.gridItems}></RectangleGrid>
      </div>
    );
  }
}

export default App;

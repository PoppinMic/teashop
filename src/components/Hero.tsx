import React from 'react';
import './Hero.scss';

interface HeroProps { 
  bgColor: string;  
  bgImage?: string;  
}

export default (prop: HeroProps) => 
  <div className="hero" style={ { backgroundImage: prop.bgImage } }>
    <div className="hero-container">  
      <p className="hero-title">New Arrival</p>
      <header className="hero-header">
        <h1>
          My Tea Shop
        </h1>
      </header>
      <p className="hero-text">
        My Text from $68
      </p>
      <button>my button</button>
    </div>
  </div>
;
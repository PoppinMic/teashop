import React, { Component } from 'react';
import './Hero.scss';

const Hero = () => 
  <div className="hero">
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

export default Hero;

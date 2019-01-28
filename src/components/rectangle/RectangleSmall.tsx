import React from 'react';
import './Rectangle.scss';

const RectangleSmall = (props: {title: string; text?: string}) => 
  <div className="rectangle rectangle-small">
    <div className="item-content">  
      <div className="item-title">
        <p>{props.title}</p>
      </div>
      <div className="item-text">
        <p>{props.text}</p>
      </div>
    </div>
  </div>
;

export default RectangleSmall;
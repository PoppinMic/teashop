import React from 'react';

import RectangleSmall from './RectangleSmall';
import './Rectangle.scss';


const RectangleGrid = (props: {title: string; text?: string}) => 
  <div className="rectangle-grid">
    <RectangleSmall title="Oolong TeaOolong TeaOolong Tea" text="Our finest artisan oolong tea"/>
    <RectangleSmall title="Cinnamon Tea" text="Our finest artisan oolong tea"/>
  </div>
;

export default RectangleGrid;
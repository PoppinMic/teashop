import React from 'react';

import RectangleSmall from './RectangleSmall';
import './Rectangle.scss';

interface RectangleProps {
  Items: RectangleItem[];
}

export interface RectangleItem {
  title: string;
  text: string;
}

const RectangleGrid = (props: RectangleProps) => 
  <div className="rectangle-grid">
    <RectangleSmall title="Oolong TeaOolong TeaOolong Tea" text="Our finest artisan oolong tea"/>
    <RectangleSmall title="Cinnamon Tea" text="Our finest artisan oolong tea"/>
  </div>
;

export default RectangleGrid;
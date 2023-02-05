import React from 'react';
import cn from 'classnames';

// eslint-disable-next-line react/prop-types
const Tile = ({ value, x, y, isMerged, isNew }) => (
  <div className={cn(`tile tile-${value} tile-position-${x}-${y}`,
    { 'tile-merged': isMerged, 'tile-new': isNew })}>
    <div className="tile-inner">{value}</div>
  </div>
);

export default Tile;

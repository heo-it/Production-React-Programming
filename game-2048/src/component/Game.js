import React, { useState } from 'react';
import _ from 'lodash';
import { MAX_POS } from '../constant';

const Game = () => {
  const [tileList] = useState([]);

  return (
    <div className="game-container">
      <div className="grid-container">
        {
          _.times(MAX_POS, () => (
            <div className="grid-row">
              { _.times(MAX_POS, () => (
                <div className="grid-cell"></div>
              ))}
            </div>
          ))
        }
      </div>
      <div className="tile-container">
        {
          tileList.map(item => (
            <div key={item.value}className={`tile tile-${item.value} tile-position-${item.x}-${item.y} tile-new`}>
              <div className="tile-inner">{item.value}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Game;
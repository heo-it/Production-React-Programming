import React, { useState } from 'react';
import _ from 'lodash';
import { MAX_POS } from '../constant';
import { getInitialTileList } from '../util/tile';
import useMoveTile from '../hook/useMoveTile';
import Tile from './Tile';

const Game = () => {
  const [tileList, setTileList] = useState(getInitialTileList());

  useMoveTile({ tileList, setTileList });
  return (
    <div className="game-container">
      <div className="grid-container">
        {
          _.times(MAX_POS, (index) => (
            <div key={index} className="grid-row">
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
            <Tile key={item.id} {...item}/>
          ))
        }
      </div>
    </div>
  );
};

export default Game;
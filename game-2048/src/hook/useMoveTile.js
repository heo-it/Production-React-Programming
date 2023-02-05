import { useEffect } from 'react';
import { addKeyObserver, removeKeyObserver } from '../util/keyboard';
import { makeTile, moveTile } from '../util/tile';

const useMoveTile = ({ tileList, setTileList }) => {
  const moveAndAdd = ({x, y}) => {
    const newTileList = moveTile({ tileList, x, y });
    const newTile = makeTile(newTileList);
    newTileList.push(newTile);
    setTileList(newTileList);
  };

  const moveUp = () => moveAndAdd({ x: 0, y: -1 });
  const moveDown = () => moveAndAdd({ x: 0, y: 1 });
  const moveLeft = () => moveAndAdd({ x: -1, y: 0 });
  const moveRight = () => moveAndAdd({ x: 1, y: 0 });

  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveLeft);
    addKeyObserver('right', moveRight);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveLeft);
      removeKeyObserver('right', moveRight);
    };
  });
};

export default useMoveTile;
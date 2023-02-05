import { MAX_POS } from '../constant';
import { getRandomInteger } from './number';

export const makeTile = (tileList) => {
  let tile;

  while (!tile || checkCollision(tileList, tile)) {
    tile = {
      x: getRandomInteger(1, MAX_POS),
      y: getRandomInteger(1, MAX_POS),
      value: 2,
      isNew: undefined,
      isMerged: undefined
    };
  }

  return tile;
};

export const getInitialTileList = () => {
  const tileList = [];
  tileList.push(makeTile(tileList));
  tileList.push(makeTile(tileList));

  return tileList;
};

const checkCollision = (tileList, tile) => {
  return tileList.some(item => item.x === tile.x && item.y === tile.y);
};
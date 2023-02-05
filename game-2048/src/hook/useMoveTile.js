import { useEffect } from 'react';
import { addKeyObserver } from '../util/keyboard';

const useMoveTile = () => {
  useEffect(() => {
    addKeyObserver('up', () => {
      console.log('up');
    });
    addKeyObserver('down', () => {
      console.log('down');
    });
    addKeyObserver('left', () => {
      console.log('left');
    });
    addKeyObserver('right', () => {
      console.log('right');
    });
  });
};

export default useMoveTile;
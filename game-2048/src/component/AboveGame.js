import React from 'react';

const AboveGame = () => {
  return (
    <div className="above-game">
      <p className="game-intro">
        Join the tiles, get to <strong>2048!</strong>
      </p>
      <a href="/" className="restart-button">New Game</a>
    </div>
  );
};

export default AboveGame;
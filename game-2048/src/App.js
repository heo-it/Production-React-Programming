import React from 'react';
import AboveGame from './component/AboveGame';
import Header from './component/Header';
import Game from './component/Game';

function App() {
  return (
    <div className="container">
      <Header />
      <AboveGame />
      <Game />
    </div>
  );
}

export default App;

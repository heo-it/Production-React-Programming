import React from 'react';

const Header = () => {

  return (
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container">20</div>
        <div className="best-container">20</div>
      </div>
    </div>
  );
};

export default Header;
import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <h1 className="header__title title">
            Bets to game
          </h1>
      </div>
    );
  }
}

export default Header;

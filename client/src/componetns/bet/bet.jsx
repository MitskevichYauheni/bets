import React, { Component } from 'react';
import './bet.css';
import BetForm from './bet-form/bet-form.jsx';

class Bet extends Component {
  render() {
    return (
      <div className="bet">
        <h2 className="bet__second-title second-title">
          Поставить ставку
        </h2>
        <BetForm />
      </div>
    );
  }
}

export default Bet;

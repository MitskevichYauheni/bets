import React, { Component } from 'react';
import Header from './componetns/header/header';
import Bet from './componetns/bet/bet';
import './common.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Bet />
      </div>
    );
  }
}

export default App;

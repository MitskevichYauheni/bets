import React, { Component } from 'react';
import Header from './componetns/header/header.jsx';
import Bet from './componetns/bet/bet.jsx';
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

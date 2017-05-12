import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      visible: false,
      balance: 0,
      amountBets: 0
    }
    this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
  }
  onCheckRuleClick(e) {
    this.server();
    this.setState({visible: !this.state.visible});
  }
  server(){
    fetch('http://localhost:3000/user-info', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching deficit'))
    .then(authResult => {
        this.setState({balance: authResult.balance , amountBets: authResult.amountBets});
        console.log(authResult)
      })
  }
  componentDidMount(){
    this.server();
  }
  render() {
    let visible = this.state.visible;
    let balance = this.state.balance;
    let amountBets = this.state.amountBets;

    return (
      <div className="header">
          <h1 className="header__title title">
            Bets to game
          </h1>
          <div className="header-info">
            <a onClick={this.onCheckRuleClick} className="header-info__link ">
              { (visible ? '↑' : '↓') }
            </a>
            <div className={"header-pupup " + (visible ? "" : "none")}>
              <p className="header-pupup__text text">Баланс: {balance}</p>
              <p className="header-pupup__text text">Количество ставок: {amountBets}</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;

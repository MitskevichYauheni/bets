import React, { Component } from 'react';
import './bet-form.css';

class BetForm extends Component {
  constructor(){
    super();
    this.state = {
      odds: '2'
    };
    this.handleOddsChange = this.handleOddsChange.bind(this);
    this.onBtnBetCreate = this.onBtnBetCreate.bind(this);
  }
  handleOddsChange(e) {
    this.setState({odds: e.target.value});
  }
  serverBetCreate(e){
    fetch('http://localhost:3000/bet/', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        nameBet: (this.refs.betForm__name).value,
        amount: (this.refs.betForm__amount).value,
        odds: (this.refs.betForm__odds).value,
        enemy: (this.refs.betForm__enemy).value,
        comment: (this.refs.betForm__comment).value
      })
    })
  }
  onBtnBetCreate(e) {
    e.preventDefault();
    this.serverBetCreate();
  }
  render() {
    let odds = this.state.odds;
    return (
      <form className="bet-form">
        <label htmlFor="bet-form__name" className="bet-form__label-name">Название ставки: </label>
        <input
          id="bet-form__name"
          className="bet-form__name"
          type="text"
          ref='betForm__name'
          placeholder="Введите название ставки ..."
        />

        <label htmlFor="bet-form__amount" className="bet-form__label-amount">Сумма ставки: </label>
        <input
          id="bet-form__amount"
          className="bet-form__amount"
          type="number"
          ref='betForm__amount'
          placeholder="Введите сумму ставки ..."
        />

        <label htmlFor="bet-form__odds" className="bet-form__label-odds">Коэффициент ставки: </label>
        <input
          id="bet-form__odds"
          className="bet-form__odds"
          type="number"
          ref='betForm__odds'
          onChange={this.handleOddsChange}
          defaultValue={odds}
        />

        <label htmlFor="bet-form__enemy" className="bet-form__label-enemy">Оппонент: </label>
        <input
          id="bet-form__enemy"
          className="bet-form__enemy"
          type="text"
          ref='betForm__enemy'
          placeholder="Оппонент ..."
        />

        <label htmlFor="bet-form__comment" className="bet-form__label-comment">Комментарий: </label>
        <input
          id="bet-form__comment"
          className="bet-form__comment"
          type="text"
          ref='betForm__comment'
          placeholder="Введите комментарий ..."
        />

        <button
          type="submit"
          className="bet-form__btn"
          onClick={this.onBtnBetCreate}
        > Поставить
        </button>
      </form>
    );
  }
}

export default BetForm;

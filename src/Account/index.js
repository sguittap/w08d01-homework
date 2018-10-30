import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state={
      balance:0,
    }
  }

  handleDepositClick=(e)=>{
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    const newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
  }
  handleWithdrawClick=(e)=>{
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    const newBalance = this.state.balance - amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
  }
  render() {
    let zeroClass = 'balance';
      if(this.state.balance === 0){
        zeroClass += ' zero';
      }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={zeroClass}>{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
        
      </div>
    )
  }
}

export default Account;

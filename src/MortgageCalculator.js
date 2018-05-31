import React, { Component } from 'react';
import './App.css';

class MortgageCalculator extends Component {

  state = {
    principleValue: 0,
    interestRateValue: 0,
    amortizationPeriod: 0,
    monthlyPayments: 0
  }

  //calculation logic

  //event handlers
  onInput = (e) => {
    this.setState({
      principleValue: this.refs.principleInput.value,
      interestRateValue: this.refs.principleInput.value,
      amortizationPeriod: this.refs.amortizationInput.value
    })
  }

  //display logic

  render() {
    return (
      <div>
        <h1>React Mortgage Calculator</h1>
        <form className="Form">
          <h2>Principle</h2>
          <input type="text" value={this.state.principleValue} ref="principleInput" onChange={this.onInput.bind(this)} />
          <h2>Interest</h2>
          <input type="text" value={this.state.interestRateValue} ref="interestInput" onChange={this.onInput.bind(this)} />
          <h2>Mortage Duration</h2>
          <input type="text" value={this.state.monthlyPayments} ref="amortizationInput" onChange={this.onInput.bind(this)} />

        </form>

        <br />

        <h2>Your monthly mortgage payments are: {this.state.monthlyPayments}</h2>
      </div>
    )
  }
}

export default MortgageCalculator;

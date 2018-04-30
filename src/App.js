// @flow

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinRecords: [],
    }
  }
  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    .then(response => response.json())
    .then(data => {
      let coinRecords = data.map((coin) => {
        return(
          <div key={coin.id}>
            <h1>{coin.name}</h1>
            <h2>{coin.price_usd}</h2>
          </div>
        )
      })
      this.setState({coinRecords: coinRecords});
      console.log("state", this.state.coinRecords);
    })
  }
  render() {
    // const tickers = this.state.coinRecords
    return (
      <div>
        <h1>Crypto Values</h1>
          {this.state.coinRecords}
      </div>
    );
  }
}

export default App;

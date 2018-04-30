// @flow

import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinRecords: []
    };
  }
  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then(response => response.json())
      .then(data => this.setState({ coinRecords: data }));
  }
  searchCoins(formText) {
    console.log("text entered: ", formText);
  }
  render() {
    const tickers = this.state.coinRecords.map(coin => {
      return (
        <div key={coin.id}>
          <h1>{coin.name}</h1>
          <h2>{coin.price_usd}</h2>
        </div>
      );
    });

    return (
      <div>
        <h1>Crypto Values</h1>
        <SearchBox searchCoins={this.searchCoins.bind(this.value)} />
        {tickers}
      </div>
    );
  }
}

export default App;

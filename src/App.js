// @flow

import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox.js";
import fuzzysearch from "fuzzysearch";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinRecords: [],
      searchValue: ""
    };
  }
  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then(response => response.json())
      .then(data => this.setState({ coinRecords: data }));
  }
  searchCoins(formText) {
    //console.log("text entered: ", formText);
    this.setState({ searchValue: formText });
  }
  render() {
    const tickers = this.state.coinRecords.map(coin => {
      if (this.state.searchValue === "") {
        return (
          <div key={coin.id}>
            <h1>{coin.name}</h1>
            <h2>USD$ {coin.price_usd}</h2>
          </div>
        );
      } else {
        if (
          fuzzysearch(
            this.state.searchValue.toUpperCase(),
            coin.name.toUpperCase()
          )
        ) {
          return (
            <div key={coin.id}>
              <h1>{coin.name}</h1>
              <h2>$USD {coin.price_usd}</h2>
            </div>
          );
        }
      }
    });

    return (
      <div>
        <h1 className="App-header">Cryptocurrency Values</h1>
        <SearchBox
          value={this.state.searchValue}
          searchCoins={this.searchCoins.bind(this)}
        />
        <hr />
        {tickers}
      </div>
    );
  }
}

export default App;

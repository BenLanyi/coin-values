// @flow

import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox.js";
import CoinRow from "./components/CoinRow.js";

type PropType = {
  searchCoins: string => void
};
type StateType = {
  coinRecords: any,
  searchValue: any
};

class App extends Component<PropType, StateType> {
  constructor() {
    super();
    this.state = {
      coinRecords: [],
      searchValue: ""
    };
  }
  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20")
      .then(response => response.json())
      .then(data => this.setState({ coinRecords: data }));
  }
  searchCoins(formText) {
    //console.log("text entered: ", formText);
    this.setState({ searchValue: formText });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="App-header">Cryptocurrency Values</h1>
        </div>
        <div className="App-body">
          <SearchBox
            value={this.state.searchValue}
            searchCoins={this.searchCoins.bind(this)}
          />
          <hr />
          <CoinRow
            coinRecords={this.state.coinRecords}
            searchValue={this.state.searchValue}
          />
        </div>
      </div>
    );
  }
}

export default App;

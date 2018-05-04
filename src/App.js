// @flow

import React, { Component } from "react";
import "./App.css";

import Routes from "./Routes";

type PropType = {};
type StateType = {
  coinRecords: Array<{ [string]: string }>,
  searchValue: string
};

// // Testing Immutable.js
// const { Map } = require("immutable");
// var coinRecords = Map({ test1: "hello", test2: "world" });
// var searchValue = "some stuff";
// var state2 = Map({ coinRecords: coinRecords, searchValue: searchValue });
// console.log(state2.get("searchValue"));
// console.log(state2.getIn(["coinRecords", "test1"]));
// // End Test

class App extends Component<PropType, StateType> {
  state = {
    coinRecords: [],
    searchValue: ""
  };

  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=20")
      .then(response => response.json())
      .then(data => this.setState({ coinRecords: data }));
  }

  setSearchValue = (newValue: string) => {
    this.setState({ searchValue: newValue });
  };

  render() {
    return <Routes {...this.state} setSearchValue={this.setSearchValue} />;
  }
}

export default App;

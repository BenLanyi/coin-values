// @flow

import React, { Component } from "react";
import "./App.css";

import Routes from "./Routes";

type PropType = {};
type StateType = {
  coinRecords: Array<{ [string]: string }>,
  searchValue: string
};

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
    //console.log("text entered: ", searchBoxText);
    this.setState({ searchValue: newValue });
  };

  render() {
    return <Routes {...this.state} setSearchValue={this.setSearchValue} />;
  }
}

export default App;

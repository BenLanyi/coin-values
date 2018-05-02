// @flow

import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import SearchBox from "./components/SearchBox.js";
import CoinList from "./components/CoinList.js";
import { Row } from "antd";
import { Route, Link } from "react-router-dom";
import RouterTest from "./components/RouterTest";

type PropType = {};
type StateType = {
  coinRecords: Array<{ [string]: string }>,
  searchValue: string
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
  searchCoins(searchBoxText: string) {
    //console.log("text entered: ", searchBoxText);
    this.setState({ searchValue: searchBoxText });
  }

  render() {
    return (
      <div>
        <Route path="/hello" component={RouterTest} />
        <Link to="/hello">Router Test</Link>
        <div className="App">
          <div>
            <h1 className="App-header">Cryptocurrency Values</h1>
          </div>
          <div className="App-body">
            <SearchBox searchCoins={this.searchCoins.bind(this)} />
            <hr />
            <Row type="flex" justify="start">
              <CoinList
                coinRecords={this.state.coinRecords}
                searchValue={this.state.searchValue}
              />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

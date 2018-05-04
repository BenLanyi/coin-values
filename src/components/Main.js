// @flow

import React from "react";
import SearchBox from "./SearchBox";
import CoinList from "./CoinList";
import { Row } from "antd";
import { Link } from "react-router-dom";

type PropTypes = {
  setSearchValue: string => void,
  searchValue: string,
  coinRecords: Array<{ [string]: string }>
};

const Main = (props: PropTypes) => {
  return (
    <div>
      <Link to="/hello">Router Test</Link>
      <div className="App">
        <div>
          <h1 className="App-header">Cryptocurrency Values</h1>
        </div>
        <div className="App-body">
          <SearchBox setSearchValue={props.setSearchValue} />
          <hr />
          <Row type="flex" justify="start">
            <CoinList
              searchValue={props.searchValue}
              coinRecords={props.coinRecords}
            />
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Main;

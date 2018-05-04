// @flow

import React from "react";
import SearchBox from "./SearchBox";
import CoinList from "./CoinList";
import { Row, Icon } from "antd";
import { Link } from "react-router-dom";

type PropTypes = {
  setSearchValue: string => void,
  searchValue: string,
  coinRecords: Array<{ [string]: string }>
};

const Main = (props: PropTypes) => {
  return (
    <div>
      <div className="App">
        <div>
          <h1 className="App-header">Cryptocurrency Values</h1>
        </div>
        <div className="App-menu">
          <SearchBox setSearchValue={props.setSearchValue} />
          <Link to="/hello" style={{ float: "right" }}>
            <Icon
              className="Icon"
              type="question-circle-o"
              style={{ fontSize: 40 }}
            />
          </Link>
        </div>
        <div className="App-body">
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

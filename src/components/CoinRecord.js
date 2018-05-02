// @flow

import React from "react";
import { Popover, Button } from "antd";
import "antd/dist/antd.css";
import CoinDetails from "./CoinDetails";
import { Col } from "antd";

type PropType = {
  coin: { [string]: string }
};

function CoinRecord(props: PropType) {
  return (
    <Col>
      <Popover
        trigger="hover"
        placement="rightTop"
        title={props.coin.symbol}
        content={<CoinDetails coin={props.coin} />}
      >
        <div className="Coin-record">
          <h2 className="Coin-name">{props.coin.name}</h2>
          <h3>USD$ {props.coin.price_usd}</h3>
        </div>
      </Popover>
    </Col>
  );
}

export default CoinRecord;

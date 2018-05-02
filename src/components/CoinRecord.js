// @flow

import React from "react";
import { Popover } from "antd";
import "antd/dist/antd.css";
import CoinDetails from "./CoinDetails";

type PropType = {
  coin: { [string]: string }
};

function CoinRecord(props: PropType) {
  return (
    <div className="Coin-row">
      <Popover
        trigger="hover"
        placement="rightTop"
        title={props.coin.symbol}
        content={<CoinDetails coin={props.coin} />}
      >
        <h2 className="Coin-name">{props.coin.name}</h2>
        <h3>USD$ {props.coin.price_usd}</h3>
      </Popover>
    </div>
  );
}

export default CoinRecord;

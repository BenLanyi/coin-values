// @flow

import React from "react";

type PropType = {
  coin: { [string]: string }
};

function CoinDetails(props: PropType) {
  return (
    <div>
      <p>rank: {props.coin.rank}</p>
      <p>price btc: {props.coin.price_btc}</p>

      <p>market cap usd: {props.coin.market_cap_usd}</p>
      <p>available supply:{props.coin.available_supply}</p>
      <p>total supply: {props.coin.total_supply}</p>
      <p>max supply: {props.coin.max_supply}</p>
      <p>percent change 1h: {props.coin.percent_change_1h}</p>
      <p>percent change 24h": {props.coin.percent_change_24h}</p>
      <p>percent change 7d: {props.coin.percent_change_7d} </p>
    </div>
  );
}

export default CoinDetails;

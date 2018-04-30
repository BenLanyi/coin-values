import React from "react";

function CoinRecord(props) {
  return (
    <div key={props.coin.id}>
      <h2 className="Coin-name">{props.coin.name}</h2>
      <h3>USD$ {props.coin.price_usd}</h3>
      <button type="button">Click Me!</button>
    </div>
  );
}

export default CoinRecord;

import React from "react";
import fuzzysearch from "fuzzysearch";
import CoinRecord from "./CoinRecord";

function CoinRow(props) {
  const ticker = props.coinRecords.map(coin => {
    if (props.searchValue === "") {
      return <CoinRecord coin={coin} />;
    } else {
      if (
        fuzzysearch(props.searchValue.toUpperCase(), coin.name.toUpperCase())
      ) {
        return <CoinRecord coin={coin} />;
      }
    }
  });
  return ticker;
}

export default CoinRow;
